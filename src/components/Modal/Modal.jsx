import "./modal.css";
import gif from "../../assets/videos/pedrope.mp4";
import gif2 from "../../assets/videos/strelka.gif";

const Modal = ({ active, setActive }) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="spinner">
          <video className="video" autoPlay muted loop>
            <source src={gif} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Modal;
