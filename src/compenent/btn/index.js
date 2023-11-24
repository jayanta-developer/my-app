import React from "react";
import "./style.css";

export const Btn = ({ btnText }) => {
  return (
    <div className="btn">
      <p>{btnText}</p>
    </div>
  );
};

export const Btn2 = () => {
  return (
    <div className="btn2">
      <p>submit2</p>
    </div>
  );
};
