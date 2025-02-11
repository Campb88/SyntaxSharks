/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { IconOutlineArrowUp } from "../../icons/IconOutlineArrowUp/IconOutlineArrowUp";
import "./style.css";

export const StatsCard = ({
  className,
  cardClassName,
  text = "TODAY’S SALE",
  text1 = "$12,426",
  divClassName,
  text2 = "+ 36%",
  icon = <IconOutlineArrowUp className="icon-outline-arrow" />,
}) => {
  return (
    <div className={`stats-card ${className}`}>
      <div className={`card ${cardClassName}`}>
        <div className="today-s-sale">{text}</div>

        <div className="bottom">
          <div className="price">
            <div className="element">{text1}</div>
          </div>

          <div className="growth">
            <div className={`text-wrapper ${divClassName}`}>{text2}</div>

            {icon}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;