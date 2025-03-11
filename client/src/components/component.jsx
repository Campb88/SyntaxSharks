import React from "react";
import "./component.css";

export const Component = ({ className }) => {
  return (
    <div className={`component ${className}`}>
      <div className="frame">
        <div className="text-wrapper">Budget</div>
      </div>
    </div>
  );
};

export default Component