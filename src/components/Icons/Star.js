import React from "react";
import { ReactComponent as StarIcon } from "../../assets/icons/icon-star.svg";

export function Star({ fill, stroke, strokeWidth, className }) {
  return <StarIcon className={className} fill={fill} stroke={stroke} strokeWidth={strokeWidth} alt="star" />;
}
