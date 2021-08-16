import React from "react";
import "./style.css";

// children is an icon

export function SidebarItem({ children, title, numberOfIssues }) {
  return (
    <div className="sidebar__item">
      <div className="sidebar__item__icon">{children}</div>
      <div className="sidebar__item__title">{title}</div>
      <div className="sidebar__item__number">{numberOfIssues}</div>
    </div>
  );
}
