import "./header.css";
import "../../styles/reset.css";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <header className="header__content">
          <div className="header__logo">
            <Logo />
          </div>
          <div className="header__title">Фест</div>
        </header>
      </div>
    </div>
  );
};

export default Header;
