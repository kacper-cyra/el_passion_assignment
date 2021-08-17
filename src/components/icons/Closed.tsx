import React from "react";
import { ReactComponent as ClosedIcon } from "../../assets/icons/icon-closed-issue.svg";
import type { IconProps } from "./types";

export const Closed = ({ fill, stroke, strokeWidth, className }: IconProps) => {
  return <ClosedIcon className={className} fill={fill} stroke={stroke} strokeWidth={strokeWidth} />;
};
