/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Icons = ({ color = "#64748B", className }) => {
  return (
    <svg
      className={`icons ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M11.2929 8.29289C11.6834 7.90237 12.3166 7.90237 12.7071 8.29289L17.7071 13.2929C18.0976 13.6834 18.0976 14.3166 17.7071 14.7071C17.3166 15.0976 16.6834 15.0976 16.2929 14.7071L12 10.4142L7.70711 14.7071C7.31658 15.0976 6.68342 15.0976 6.29289 14.7071C5.90237 14.3166 5.90237 13.6834 6.29289 13.2929L11.2929 8.29289Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

export default Icons;