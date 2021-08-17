import React, { ReactNode } from "react";
import "./style.css";

export interface SidebarItemProps {
  title: string;
  Icon: ReactNode;
  numberOfIssues: string;
  active?: boolean;
}

export const SidebarItem = ({ Icon, title, numberOfIssues, active }: SidebarItemProps) => {
  return (
    <button className={`sidebar__item ${active ? "sidebar__item--active" : ""}`}>
      <div className="sidebar__item__icon">{Icon}</div>
      <div className="sidebar__item__title">{title}</div>
      <div className="sidebar__item__number">{numberOfIssues}</div>
    </button>
  );
};
