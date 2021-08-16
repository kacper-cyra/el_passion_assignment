import React from "react";
import { Star } from "../Icons";
import "./style.css";

export const Issue = ({ title, isMarked: isMarkedProp }) => {
  const [isMarked, setIsMarked] = React.useState(isMarkedProp);

  const handleClick = () => {
    setIsMarked(!isMarked);
  };

  return (
    <div className="issue">
      <span className="issue__title">{title}</span>
      <button className="issue__button" onClick={handleClick}>
        <Star onClick={handleClick} className="issue__button__star" stroke="#E0E0E0" strokeWidth="0.75px" fill={isMarked ? "#21233d" : "#fff"} />
      </button>
    </div>
  );
};
