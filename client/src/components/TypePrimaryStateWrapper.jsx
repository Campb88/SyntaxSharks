/** @jsxImportSource react */
import React from "react";
import "./styles.css";

export const TypePrimaryStateWrapper = ({
  iconLeft = true,
  type,
  state,
  leftIcon,
  rightIcon,
  iconOnly,
  size,
  className = "",
  text = "Button",
}) => {
  return (
    <button className={`type-primary-state-wrapper ${className}`}>
      <div className="label">{text}</div>
    </button>
  );
};
