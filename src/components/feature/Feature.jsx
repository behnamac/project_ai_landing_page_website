import React from "react";
import "./feature.css";

const Features = ({ title, text }) => (
  <div className="gp5__feature-container__feature">
    <div className="gp5__feature-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="gp5__feature-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Features;
