import React from "react";
import { Issue } from "../Issue/Issue";
import "./style.css";

// 'issues' is an array of issue

export const IssueGroup = ({ date, issues }) => {
  return (
    <div className="issue-group">
      <span className="issue-group__date">{date}</span>
      {issues.map(({ title, isMarked }) => (
        <Issue title={title} isMarked={isMarked} key={title} />
      ))}
    </div>
  );
};
