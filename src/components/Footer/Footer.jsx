import "./footer.css";
import "../../styles/reset.css";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <footer className="footer__content">
          <Logo className="footer__logo" />
          <div className="footer__title">2024</div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
