import React from "react";
import "./NewsBtn.css";
import { useNavigate } from "react-router-dom";

const NewsBtn = () => {
  const navigate = useNavigate();

  return (
    <div className="newsBtn__container">
      <div className="jopa" onClick={() => navigate("/news")}>
        ПОДРОБНЕЕ
      </div>
    </div>
  );
};

export default NewsBtn;
