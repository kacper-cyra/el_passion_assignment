import React from "react";
import { ReactComponent as GithubIcon } from "../../assets/icons/icon-github.svg";
import type { IconProps } from "./types";

export const Github = ({ fill, stroke, strokeWidth, className }: IconProps) => {
  return <GithubIcon className={className} fill={fill} stroke={stroke} strokeWidth={strokeWidth} />;
};
