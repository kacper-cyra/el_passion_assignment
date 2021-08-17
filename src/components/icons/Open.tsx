import React from "react";
import { ReactComponent as OpenIcon } from "../../assets/icons/icon-open-issue.svg";
import type { IconProps } from "./types";

export const Open = ({ fill, stroke, strokeWidth, className }: IconProps) => {
  return <OpenIcon className={className} fill={fill} stroke={stroke} strokeWidth={strokeWidth} />;
};
