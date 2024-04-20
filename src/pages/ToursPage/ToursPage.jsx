import Tours from "../../components/Tours/Tours";
import "./earlybirds.css";
const ToursPage = () => {
  return (
    <div className="earlyBirdsPage">
      <div className="earlyBirdsPage__container">
        <div className="earlyBirdsPage__content">
          <div className="earlyBirdsPage__title">
            <div className="earlyBirdsPage__title__text">EARLY BIRDS</div>
            <div className="earlyBirdsPage__title__date">20.04.28</div>

            <Tours />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToursPage;
