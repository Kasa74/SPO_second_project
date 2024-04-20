import { useContext, useEffect, useState } from "react";
import "./orderpage.css";
import { Context } from "../..";
import Modal from "../../components/Modal/Modal";
import { postContacts, postTicket } from "../../http/axios_requests";
import { useNavigate } from "react-router-dom";

const OrderPage = () => {
  const { ticket } = useContext(Context);

  const navigate = useNavigate();

  let ticket_name = "";
  switch (ticket._selectedTicketID) {
    case 1:
      ticket_name = "БАЗИРОВАННЫЙ";
      break;
    case 2:
      ticket_name = "ВИПЧИК";
      break;
    case 3:
      ticket_name = "КАСТОМ";
      break;
    case 4:
      ticket_name = "БРАСЛЕТ";
      break;
  }

  const [modalActive, setModalActive] = useState(false);

  // form states
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");

  const [numberDirty, setNumberDirty] = useState(false);
  const [nameDirty, setNameDirty] = useState(false);
  const [surnameDirty, setSurnameDirty] = useState(false);
  const [dateDirty, setDateDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);

  const [numberError, setNumberError] = useState("Номер не может быть пустым");
  const [nameError, setNameError] = useState("Имя не может быть пустым");
  const [surnameError, setSurnameError] = useState(
    "Фамилия не может быть пустой"
  );
  const [dateError, setDateError] = useState(
    "Дата рождения не может быть пустой"
  );
  const [emailError, setEmailError] = useState("Почта не может быть пустой");

  // form handlers
  const blurHandler = (e) => {
    switch (e.target.name) {
      case "number":
        setNumberDirty(true);
        break;
      case "name":
        setNameDirty(true);
        break;
      case "surname":
        setSurnameDirty(true);
        break;
      case "date":
        setDateDirty(true);
        break;
      case "email":
        setEmailDirty(true);
        break;
      default:
        return 0;
    }
  };

  const numberHandler = (e) => {
    setNumber(e.target.value);
    const re = /\+7\(\d{3}\)\d{3}-\d{2}-\d{2}/;
    if (!re.test(String(e.target.value))) {
      setNumberError("Неккоректный номер телефона");
    } else {
      setNumberError("");
    }
  };
  const nameHandler = (e) => {
    setName(e.target.value);
    if (e.target.value.length < 3) {
      setNameError("Имя должно быть длиннее 3");
      if (!e.target.value) {
        setNameError("Имя не может быть пустым");
      }
    } else {
      setNameError("");
    }
  };
  const surnameHandler = (e) => {
    setSurname(e.target.value);
    if (e.target.value.length < 3) {
      setSurnameError("Фамилия должна быть длиннее 3");
      if (!e.target.value) {
        setSurnameError("Фамилия не может быть пустой");
      }
    } else {
      setSurnameError("");
    }
  };
  const dateHandler = (e) => {
    setDate(e.target.value);
    if (!e.target.value.length) {
      setDateError("Дата не может быть пустой");
    } else {
      setDateError("");
    }
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некорректная почта");
    } else {
      setEmailError("");
    }
  };

  // card states
  const [cardNumber, setCardNumber] = useState("");
  const [cardNameSurname, setCardNameSurname] = useState("");
  const [cardMMYY, setCardMMYY] = useState("");
  const [cardCVV, setCardCVV] = useState("");
  const [cardNumberError, setCardNumberError] = useState(
    "Номер карты не заполнен"
  );
  const [cardNameSurnameError, setCardNameSurnameError] = useState(
    "Имя Фаимлия карты не заполнены"
  );
  const [cardMMYYError, setCardMMYYError] = useState("MMYY карты не заполнен");
  const [cardCVVError, setCardCVVError] = useState("CVV карты не заполнен");

  // card Handlers
  const cardNumberHandler = (e) => {
    const value = e.target.value
      .replace(/\D+/g, "")
      .toString()
      .replace(/\d{4}(?=.)/g, "$& ");
    if (value.length <= 19) {
      setCardNumber(value);
      if (value.length === 19) {
        setCardNumberError("");
      } else {
        setCardNumberError("Не полностью заполнен номер карты!");
      }
    } else {
      return;
    }
  };

  const cardNameSurnameHandler = (e) => {
    const value = e.target.value.replace(/[\d]/g, "").toUpperCase();
    if (value.length <= 20) {
      setCardNameSurname(value);
      if (value.length > 5) {
        setCardNameSurnameError("");
      } else {
        setCardNameSurnameError("Заполните имя и фамилию до конца!");
      }
    } else {
      return;
    }
  };

  const cardMMYYHandler = (e) => {
    const value = e.target.value
      .replace(/\D+/g, "")
      .toString()
      .replace(/\d{2}(?=.)/g, "$&/");
    if (value.length <= 5) {
      setCardMMYY(value);
      if (value.length === 5) {
        setCardMMYYError("");
      } else {
        setCardMMYYError("Заполните до конца MMYY карты");
      }
    } else {
      return;
    }
  };

  const cardCVVHandler = (e) => {
    const value = e.target.value.replace(/\D+/g, "");
    if (value.length <= 3) {
      setCardCVV(value);
      if (value.length === 3) {
        setCardCVVError("");
      } else {
        setCardCVVError("Заполните CVV до конца");
      }
    } else {
      return;
    }
  };

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (
      numberError ||
      nameError ||
      surnameError ||
      dateError ||
      emailError ||
      cardNumberError ||
      cardNameSurnameError ||
      cardMMYYError ||
      cardCVVError
    ) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [
    numberError,
    nameError,
    surnameError,
    dateError,
    emailError,
    cardNumberError,
    cardNameSurnameError,
    cardMMYYError,
    cardCVVError,
  ]);
  const takeTour = () => {
    setModalActive(true);

    ticket._orderID = "randomizer";

    postTicket({
      hotel_id: ticket._selectedHotel.id,
      fly_id: ticket._selectedFlight.id,
      ticket_id: ticket._selectedTicketID,
      price: ticket._selectedHotel.price + ticket._selectedFlight.price,
      order_id: ticket._orderID,
    });

    // postContacts({
    //   phone_number: number,
    //   first_name: name,
    //   last_name: surname,
    //   birth_date: date,
    //   email: email,
    // });

    setTimeout(
      function () {
        setModalActive(false);
        navigate("/success");
      }.bind(this),
      3000
    );
    setTimeout(1);
  };
  return (
    <div className="OrderPage">
      <div className="OrderPage__container">
        <div className="OrderPage__content">
          <div className="ContactForm__content">
            <div className="ContactForm__title">КОНТАКТНАЯ ИНФА</div>
            <form className="form">
              <input
                className="form__input"
                name="number"
                value={number}
                onBlur={(e) => blurHandler(e)}
                onChange={(e) => numberHandler(e)}
                placeholder="Номер"
              />
              {numberError && numberDirty && (
                <div className="error">{numberError}</div>
              )}

              <input
                className="form__input"
                name="name"
                value={name}
                onBlur={(e) => blurHandler(e)}
                onChange={(e) => nameHandler(e)}
                placeholder="Имя"
              />
              {nameError && nameDirty && (
                <div className="error">{nameError}</div>
              )}

              <input
                className="form__input"
                name="surname"
                value={surname}
                onBlur={(e) => blurHandler(e)}
                onChange={(e) => surnameHandler(e)}
                placeholder="Фамилия"
              />
              {surnameError && surnameDirty && (
                <div className="error">{surnameError}</div>
              )}

              <input
                className="form__input"
                name="date"
                value={date}
                onBlur={(e) => blurHandler(e)}
                onChange={(e) => dateHandler(e)}
                placeholder="Дата рождения"
              />
              {dateError && dateDirty && (
                <div className="error">{dateError}</div>
              )}

              <input
                className="form__input"
                name="email"
                value={email}
                onBlur={(e) => blurHandler(e)}
                onChange={(e) => emailHandler(e)}
                placeholder="Почта"
              />
              {emailError && emailDirty && (
                <div className="error">{emailError}</div>
              )}
            </form>
          </div>
          <div className="purchase__content">
            <div className="card">
              <input
                className="card__input__number"
                value={cardNumber}
                onChange={(e) => cardNumberHandler(e)}
                placeholder="XXXX-XXXX-XXXX-XXXX"
              />
              <div className="card__bottom">
                <input
                  className="card__input__namesurname"
                  value={cardNameSurname}
                  onChange={(e) => cardNameSurnameHandler(e)}
                  placeholder="NAME SURNAME"
                />
                <input
                  className="card__input__mmyy"
                  value={cardMMYY}
                  onChange={(e) => cardMMYYHandler(e)}
                  placeholder="MM/YY"
                />
                <input
                  className="card__input__cvv"
                  value={cardCVV}
                  onChange={(e) => cardCVVHandler(e)}
                  placeholder="CVV"
                />
              </div>
            </div>
            <div className="total">
              <ul className="choosen__categories">
                <li className="choosen__category">
                  {ticket._selectedHotel.title}
                </li>
                <li className="choosen__category">
                  {ticket._selectedFlight.title +
                    " " +
                    ticket._selectedFlight.departure}
                </li>
                <li className="choosen__category">{ticket_name}</li>
              </ul>
              <div className="total__ammount__purchase">
                <div className="total__ammount">
                  {ticket._selectedFlight.price + ticket._selectedHotel.price}
                </div>
                <button
                  disabled={!formValid}
                  type="submit"
                  className={
                    formValid ? "total__purchase_active" : "total__purchase"
                  }
                  onClick={takeTour}
                >
                  ГОТОВО
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive} />
    </div>
  );
};

export default OrderPage;
