import React from "react";
import { SidebarItem, SystemPanel } from "../../components";
import { Closed, Github, Open } from "../../components/Icons";
import "./style.css";

export function Sidebar() {
  return (
    <aside className="sidebar">
      <SystemPanel />
      <SidebarItem title="All" numberOfIssues="12">
        <Github />
      </SidebarItem>
      <SidebarItem title="Open" numberOfIssues="4">
        <Open />
      </SidebarItem>
      <SidebarItem title="Closed" numberOfIssues="8">
        <Closed />
      </SidebarItem>
    </aside>
  );
}
