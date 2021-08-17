import React from "react";
import { SidebarItem, SystemPanel } from "../../components";
import { Closed, Github, Open } from "../../components/icons";
import "./style.css";

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <SystemPanel />
      <SidebarItem title="All" numberOfIssues="12" active={true} Icon={<Github fill="#fff" />} />
      <SidebarItem title="Open" numberOfIssues="4" Icon={<Open fill="#fff" />} />
      <SidebarItem title="Closed" numberOfIssues="8" Icon={<Closed fill="#fff" />} />
    </aside>
  );
};
