/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const LeftIcon = ({ className }) => {
  return (
    <svg
      className={`left-icon ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 21 20"
      width="21"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M12.1666 5.83268L7.99996 9.99935L12.1666 14.166"
        stroke="#191D23"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />

      <path
        className="path"
        d="M8 10L18 10"
        stroke="#191D23"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />

      <path
        className="path"
        d="M8 17.5H4.66667C4.22464 17.5 3.80072 17.3244 3.48816 17.0118C3.1756 16.6993 3 16.2754 3 15.8333L3 4.16667C3 3.72464 3.1756 3.30072 3.48816 2.98816C3.80072 2.6756 4.22464 2.5 4.66667 2.5H8"
        stroke="#191D23"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

export default LeftIcon;