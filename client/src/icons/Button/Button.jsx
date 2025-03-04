/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Button = ({ className }) => {
  return (
    <svg
      className={`button ${className}`}
      fill="none"
      height="60"
      viewBox="0 0 60 60"
      width="60"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" filter="url(#filter0_d_132_553)">
        <path
          className="path"
          d="M2 29C2 13.536 14.536 1 30 1C45.464 1 58 13.536 58 29C58 44.464 45.464 57 30 57C14.536 57 2 44.464 2 29Z"
          fill="white"
          shapeRendering="crispEdges"
        />

        <path
          className="path"
          d="M2.5 29C2.5 13.8122 14.8122 1.5 30 1.5C45.1878 1.5 57.5 13.8122 57.5 29C57.5 44.1878 45.1878 56.5 30 56.5C14.8122 56.5 2.5 44.1878 2.5 29Z"
          shapeRendering="crispEdges"
          stroke="#ECEFF3"
        />

        <path
          className="path"
          d="M35.05 37.28C34.07 38.23 33 38.08 31.97 37.63C30.88 37.17 29.88 37.15 28.73 37.63C27.29 38.25 26.53 38.07 25.67 37.28C20.79 32.25 21.51 24.59 27.05 24.31C28.4 24.38 29.34 25.05 30.13 25.11C31.31 24.87 32.44 24.18 33.7 24.27C35.21 24.39 36.35 24.99 37.1 26.07C33.98 27.94 34.72 32.05 37.58 33.2C37.01 34.7 36.27 36.19 35.04 37.29L35.05 37.28ZM30.03 24.25C29.88 22.02 31.69 20.18 33.77 20C34.06 22.58 31.43 24.5 30.03 24.25Z"
          fill="black"
        />
      </g>

      <defs className="defs">
        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="60"
          id="filter0_d_132_553"
          width="60"
          x="0"
          y="0"
        >
          <feFlood
            className="fe-flood"
            floodOpacity="0"
            result="BackgroundImageFix"
          />

          <feColorMatrix
            className="fe-color-matrix"
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />

          <feOffset className="fe-offset" dy="1" />

          <feGaussianBlur className="fe-gaussian-blur" stdDeviation="1" />

          <feComposite
            className="fe-composite"
            in2="hardAlpha"
            operator="out"
          />

          <feColorMatrix
            className="fe-color-matrix"
            type="matrix"
            values="0 0 0 0 0.0509804 0 0 0 0 0.0509804 0 0 0 0 0.0705882 0 0 0 0.06 0"
          />

          <feBlend
            className="fe-blend"
            in2="BackgroundImageFix"
            mode="normal"
            result="effect1_dropShadow_132_553"
          />

          <feBlend
            className="fe-blend"
            in="SourceGraphic"
            in2="effect1_dropShadow_132_553"
            mode="normal"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Button;