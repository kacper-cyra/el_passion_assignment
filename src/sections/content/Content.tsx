import React from "react";
import { IssueGroup } from "../../components";
import "./style.css";

const contentData = [
  {
    date: "19-07-2016",
    issues: [
      { title: "Page changes", isMarked: true },
      { title: "Review of last issues", isMarked: true },
    ],
  },
  {
    date: "18-07-2016",
    issues: [
      { title: "Visual UI Update Review", isMarked: false },
      { title: "Sidebar changes", isMarked: false },
    ],
  },
  {
    date: "15-07-2016",
    issues: [
      { title: "Crash update", isMarked: false },
      { title: "Page visual UI Update Review", isMarked: true },
      { title: "Sidebar update", isMarked: false },
    ],
  },
  {
    date: "14-07-2016",
    issues: [
      { title: "Crash issue", isMarked: true },
      { title: "Visual update & Crash resolve", isMarked: true },
    ],
  },
];

export const Content = () => {
  return (
    <section className="content">
      {contentData.map(({ date, issues }) => {
        return <IssueGroup date={date} issues={issues} key={date} />;
      })}
    </section>
  );
};
