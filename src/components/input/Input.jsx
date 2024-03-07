import React from "react";
import "./input.css";

const Input = ({ setValue, value, type, placeholder }) => {
  return (
    <input
      onChange={(event) => setValue(event.target.value)}
      value={value}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
