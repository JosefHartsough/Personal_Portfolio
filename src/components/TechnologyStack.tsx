import React from "react";

const TechButton = ({ name }: { name: string }) => {
  return (
    <span
      style={{
        display: "inline-block",
        borderRadius: "0.5rem",
        backgroundColor: "#1d1f20", // bg-primary
        color: "white", // text-foreground
        padding: "10px 20px", // py-1 px-3
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", // shadow-sm
        cursor: "default", // cursor-default
        fontWeight: "normal", // font-normal
        transition: "background-color 0.3s ease",
      }}
    >
      {name}
    </span>
  );
};

export default function TechnologyStack() {
  return (
    <div>
      <h2>Technology Stack</h2>

      <div style={{ display: "flex", gap: "10px" }}>
        <TechButton name={"Typescript"} />
        <TechButton name={"React"} />
        <TechButton name={"Gatsby"} />
      </div>
    </div>
  );
}
