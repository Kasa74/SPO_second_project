import "./tours.css";
import { useNavigate } from "react-router-dom";

import baza_img from "../../assets/img/baza_img.png";
import vip_img from "../../assets/img/vip_img.png";
import custom_img from "../../assets/img/custom_img.png";
import bracelet_img from "../../assets/img/bracelet_img.png";
import { useContext } from "react";
import { Context } from "../..";

const Tours = () => {
  const { ticket } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div className="tours">
      <div className="tours__container">
        <div className="tours__content">
          <div
            className="tour"
            onClick={() => {
              navigate("/tour" + "/" + 1);
              ticket.setSelectedTicketID(1);
            }}
          >
            <img className="tour__img" src={baza_img} alt="baza_img" />
            <div className="tour__info">
              <div className="tour__info__title">Базированный</div>
              <div className="tour__info__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim
              </div>
              <div className="tour__info__price">
                from
                <span className="tour__info__qwerty"> 7999</span>
              </div>
            </div>
          </div>
          <div
            className="tour"
            onClick={() => {
              navigate("/tour" + "/" + 2);
              ticket.setSelectedTicketID(2);
            }}
          >
            <img className="tour__img" src={vip_img} alt="vip_img" />
            <div className="tour__info">
              <div className="tour__info__title">ВИПЧИК</div>
              <div className="tour__info__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim
              </div>
              <div className="tour__info__price">
                from
                <span className="tour__info__qwerty"> 12999</span>
              </div>
            </div>
          </div>
          <div
            className="tour"
            onClick={() => {
              navigate("/tour" + "/" + 3);
              ticket.setSelectedTicketID(3);
            }}
          >
            <img className="tour__img" src={custom_img} alt="custom_img" />
            <div className="tour__info">
              <div className="tour__info__title">КАСТОМ</div>
              <div className="tour__info__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim
              </div>
              <div className="tour__info__price">
                from
                <span className="tour__info__qwerty"> 5999</span>
              </div>
            </div>
          </div>
          <div className="tour">
            <img
              className="tour__img"
              src={bracelet_img}
              onClick={() => {
                navigate("/tour" + "/" + 1);
                ticket.setSelectedTicketID(4);
              }}
              alt="bracelet_img"
            />
            <div className="tour__info">
              <div className="tour__info__title">БРАСЛЕТ</div>
              <div className="tour__info__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim
              </div>
              <div className="tour__info__price">
                from
                <span className="tour__info__qwerty"> 2999</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tours;
