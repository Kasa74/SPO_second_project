import "./success.css";
import { ReactComponent as Youtube } from "../../assets/img/youtube_svg.svg";
import { ReactComponent as Souncloud } from "../../assets/img/soundcloud_svg.svg";
import { ReactComponent as Telegram } from "../../assets/img/telegram_svg.svg";
import QRGenerator from "../QRCodeGenerator/QRCodeGenerator";
import { useContext } from "react";
import { Context } from "../..";

const Success = () => {
  const { ticket } = useContext(Context);

  return (
    <div className="success">
      <div className="success__container">
        <div className="success__content">
          <div className="success__order">
            <div className="success__order__title">Ваш заказ</div>
            <div className="success__order__number">{ticket._orderID}</div>
            <div className="success__order__qr">
              <QRGenerator />
            </div>
          </div>
          <div className="success__congrats">
            <div className="success__congrats__title">
              Поздравляем с покупкой
            </div>
            <div className="success__congrats__contacts__title">Контакты:</div>
            <div className="success__congrats__contacts">
              <div className="success__congrats__contact">
                festik1337@booking.com
              </div>
              <div className="success__congrats__contact">
                +12 908 774 67 76
              </div>
              <div className="success__congrats__contact">@clown</div>
            </div>

            <div className="success__congrats__icons">
              <Youtube />

              <Souncloud />

              <Telegram />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
