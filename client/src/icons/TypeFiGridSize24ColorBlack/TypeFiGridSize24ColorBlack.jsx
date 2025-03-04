/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const TypeFiGridSize24ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`type-fi-grid-size-24-color-black ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M21 14H14V21H21V14Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />

      <path
        className="path"
        d="M10 14H3V21H10V14Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />

      <path
        className="path"
        d="M21 3H14V10H21V3Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />

      <path
        className="path"
        d="M10 3H3V10H10V3Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

export default TypeFiGridSize24ColorBlack;