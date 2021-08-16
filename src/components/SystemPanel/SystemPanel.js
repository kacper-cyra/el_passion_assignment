import React from "react";
import "./style.css";

export function SystemPanel() {
  return (
    <nav className="system-panel">
      <div className="system-panel__button system-panel__button--close"></div>
      <div className="system-panel__button system-panel__button--minimize"></div>
      <div className="system-panel__button system-panel__button--maximize"></div>
    </nav>
  );
}