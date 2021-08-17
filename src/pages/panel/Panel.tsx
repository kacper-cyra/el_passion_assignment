import React from "react";
import { Content, Sidebar } from "../../sections";
import "./style.css";

export const Panel = () => {
  return (
    <div className="panel-container">
      <main className="panel">
        <Sidebar />
        <Content />
      </main>
    </div>
  );
};
