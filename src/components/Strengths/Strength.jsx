import React from "react";
import "./Strength.css";

function Strength({ title, description, imageUrl}) {
  return (
    <div className="app_strength">
      <div className="app_strength-image">
        <img src={imageUrl} alt="" />
      </div>
      <div className="app_strength-content">
        <h4>
          {title}
        </h4>
        <p>
          {description}
        </p>
      </div>
    </div>
  );
}

export default Strength;
