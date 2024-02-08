import React from "react";
import FeatureCard from "./FeatureCard";

import featuresData from "../data/projects.json";

export const FeatureCardLayout: React.FC = () => {
  const FeatureCardRender = featuresData.map((project, index) => {
    const isReversed = index === 1 ? true : false;
    return (
      <FeatureCard
        key={index}
        id={index}
        projectTitle={project.projectTitle}
        details={project.details}
        stack={project.stack}
        isReversed={isReversed}
        source={project.source}
      />
    );
  });

  return (
    <div
      style={{
        marginTop: "100px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Featured Projects</h1>
      {FeatureCardRender}
    </div>
  );
};
