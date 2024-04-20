import { useState } from "react";

import "./ContactForm.css";
const ContactForm = () => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="ContactForm">
      <div className="ContactForm__container">
        <div className="ContactForm__content">
          <div className="ContactForm__title">КОНТАКТНАЯ ИНФА</div>
          <form className="form">
            <input
              className="form__input"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Номер"
            />
            <input
              className="form__input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Имя"
            />
            <input
              className="form__input"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              placeholder="Фамилия"
            />
            <input
              className="form__input"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="Дата рождения"
            />
            <input
              className="form__input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Почта"
            />
            <button className="form__button">ПОДТВЕРДИТЬ</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
