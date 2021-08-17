import React from "react";
import { ReactComponent as StarIcon } from "../../assets/icons/icon-star.svg";
import type { IconProps } from "./types";

export const Star = ({ fill, stroke, strokeWidth, className }: IconProps) => {
  return <StarIcon className={className} fill={fill} stroke={stroke} strokeWidth={strokeWidth} />;
};
