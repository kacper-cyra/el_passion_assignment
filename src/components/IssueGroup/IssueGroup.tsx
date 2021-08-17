import React from "react";
import { Issue, IssueProps } from "../Issue/Issue";
import "./style.css";

export interface IssueGroupProps {
  date: string;
  issues: IssueProps[];
}

export const IssueGroup = ({ date, issues }: IssueGroupProps) => {
  return (
    <div className="issue-group">
      <span className="issue-group__date">{date}</span>
      {issues.map(({ title, isMarked }) => (
        <Issue title={title} isMarked={isMarked} key={title} />
      ))}
    </div>
  );
};
