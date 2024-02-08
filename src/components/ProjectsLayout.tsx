import React from "react";
import { Projects } from "../components/Projects";
import * as indexStyles from "../styles/Index/Index.module.css";

export const ProjectsLayout: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        marginTop: "40px",
      }}
    >
      <div className={indexStyles.gridTesting}>
        <Projects title="Project 1">Project 1 description...</Projects>
        <Projects title="Project 2">Project 1 description...</Projects>
        <Projects title="Project 3">Project 1 description...</Projects>
      </div>
    </div>
  );
};
