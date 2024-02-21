import React from "react";
import "./input.css";

const Input = ({ value, type, placeholder, setValue }) => {
  console.log(value);
  return (
    <input
      onChange={(e) => setValue(e.target.value)}
      value={value}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
