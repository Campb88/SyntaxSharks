import React from "react";
import "./sbf.css";

export const SmallButtonFalse = ({ className, text = "Dining Options" }) => {
  return (
    <div className={`small-button-false ${className}`}>
      <button className="button">
        <div className="get-it">{text}</div>
      </button>
    </div>
  );
};

export default SmallButtonFalse