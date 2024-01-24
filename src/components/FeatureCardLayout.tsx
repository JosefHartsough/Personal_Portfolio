import React, { useState } from "react";
import FeatureCard from "./FeatureCard";

import featuresData from "../data/projects.json";

interface FeatureCardLayoutProps {
  projectTitle: string;
  details: string;
  stack: string[];
  source: string;
  demo: string;
  thumb: string;
}

export const FeatureCardLayout: React.FC = () => {
  const [features, setFeatures] =
    useState<FeatureCardLayoutProps[]>(featuresData);

  const FeatureCardRender = features.map((project, index) => {
    if (index === 1) {
      return (
        <FeatureCard
          key={index}
          id={index}
          projectTitle={project.projectTitle}
          details={project.details}
          stack={project.stack}
          isReversed={true}
          source={project.source}
        />
      );
    } else {
      return (
        <FeatureCard
          key={index}
          id={index}
          projectTitle={project.projectTitle}
          details={project.details}
          stack={project.stack}
          isReversed={false}
          source={project.source}
        />
      );
    }
  });

  return (
    <div
      style={{
        marginTop: "100px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Featured Projects</h1>
      {FeatureCardRender}
    </div>
  );
};
