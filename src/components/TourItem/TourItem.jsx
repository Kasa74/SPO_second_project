import hotel1_icons from "../../assets/img/hotel1_icons.png";
import "./touritem.css";

import big_img_1 from "../../assets/img/big_img_1.png";
import big_img_2 from "../../assets/img/big_img_2.png";
import big_img_3 from "../../assets/img/big_img_3.png";
import big_img_4 from "../../assets/img/big_img_4.png";

import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getFlights, getHotels } from "../../http/axios_requests";
import { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../..";

const TourItem = observer(() => {
  const [selectHotel, setSelectHotel] = useState(-1);
  const [selectFlight, setSelectFlight] = useState(-1);

  const { ticket } = useContext(Context);
  useEffect(() => {
    getHotels().then((res) => ticket.setHotels(res));
    getFlights().then((res) => ticket.setFlights(res));
  }, []);

  const { id } = useParams();
  let img_url = "";

  switch (id) {
    case "1":
      img_url = big_img_1;
      break;
    case "2":
      img_url = big_img_2;
      break;
    case "3":
      img_url = big_img_3;
      break;
    case "4":
      img_url = big_img_4;
      break;
    default:
      img_url = big_img_1;
  }

  const navigate = useNavigate();

  return (
    <div className="tourItem">
      <div className="tourItem__container">
        <div className="tourItem__content">
          <div className="tourItem__img">
            <img src={img_url} alt="img" />
          </div>
          <div className="tourItem__info">
            <div className="tourItem__info__top">
              <div className="tourItem__info__top__title">БАЗИРОВАННЫЙ</div>
              <div className="tourItem__info__top__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim
              </div>
            </div>
            <div className="tourItem__info__hotels">
              <div className="tourItem__info__hotels__title">Отель</div>
              <div
                className="tourItem__info__hotels__block"
                data-grid-columns="2"
              >
                {ticket._hotels.map((hotel) => {
                  return (
                    <div
                      className={
                        selectHotel === hotel.id
                          ? "tourItem__info__hotel_active"
                          : "tourItem__info__hotel"
                      }
                      key={hotel.id}
                      onClick={() => {
                        ticket._selectedHotel === hotel
                          ? ticket.setSelectedHotel({ price: 0 })
                          : ticket.setSelectedHotel(hotel);

                        selectHotel === hotel.id
                          ? setSelectHotel(-1)
                          : setSelectHotel(hotel.id);
                      }}
                    >
                      <div className="tourItem__info__hotel__title">
                        {hotel.title.split(/\s/, 2)[0]}
                        <br />
                        {hotel.title.split(/\s/, 2)[1]}
                      </div>
                      <div className="tourItem__info__hotel__icons">
                        <img src={hotel1_icons} alt="hotel1_icons"></img>
                      </div>
                      <div className="tourItem__info__hotel__price">
                        + {hotel.price}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="tourItem__info__flights">
              <div className="tourItem__info__flights__title">Перелет</div>
              <div
                className="tourItem__info__flights__block"
                data-grid-columns="2"
              >
                {ticket._flights.map((flight) => {
                  return (
                    <div
                      className={
                        selectFlight === flight.id
                          ? "tourItem__info__flight_active"
                          : "tourItem__info__flight"
                      }
                      key={flight.id}
                      onClick={() => {
                        ticket._selectedFlight === flight
                          ? ticket.setSelectedFlight({ price: 0 })
                          : ticket.setSelectedFlight(flight);
                        selectFlight === flight.id
                          ? setSelectFlight(-1)
                          : setSelectFlight(flight.id);
                      }}
                    >
                      <div className="tourItem__info__flight__title">
                        {flight.title.split(/\s/, 2)[0]}
                        <br />
                        {flight.title.split(/\s/, 2)[1]}
                      </div>
                      <div className="tourItem__info__flight__date">
                        {flight.departure.split(/\s/, 2)[0]}
                        <br />
                        {flight.departure.split(/\s/, 2)[1]}
                      </div>
                      <div className="tourItem__info__flight__price">
                        + {flight.price}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="tourItem__buy">
              <div>
                <div
                  className="tourItem__buy__button"
                  onClick={() => navigate("/order")}
                >
                  далее
                </div>
              </div>
              <div className="tourItem__buy__ammount">
                {ticket._selectedFlight.price + ticket._selectedHotel.price}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default TourItem;
