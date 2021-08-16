import React from "react";
import { ReactComponent as ClosedIcon } from "../../assets/icons/icon-closed-issue.svg";

export function Closed({ fill }) {
  return <ClosedIcon fill={fill} alt="Closed" />;
}
