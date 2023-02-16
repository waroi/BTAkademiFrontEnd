import React from "react";
import cardBg from "../images/cardBackground.png";
const Card = (props) => {
  return (
    <div className="col-md-3">
      <div className="card text-bg-light">
        <img src={cardBg} className="card-img" alt={cardBg} height={200} />
        <div className="card-img-overlay">
          <h5 className="card-title">{props.title}</h5>
          <div className="card-body d-flex align-items-center justify-content-end text-white gap-2">
            <p className="card-text display-1 fw-bolder">{props.count}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
