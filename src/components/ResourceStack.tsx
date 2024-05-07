import React from "react";
import { FaHome, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ResourceStackProps {
  links: string[];
}

export default function ResourceStack({ links }: ResourceStackProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: "40px",
        justifyContent: "stretch",
        alignContent: "stretch",
      }}
    >
      <span
        style={{
          flex: 1,
          display: "inline-block",
          borderRadius: "0.5rem",
          backgroundColor: "#1d1f20",
          color: "white",
          padding: "10px 20px",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
          cursor: "default",
          fontWeight: "normal",
          transition: "background-color 0.3s ease",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "inherit",
          }}
        >
          <FaHome />
          Home
        </div>
      </span>
      <span
        style={{
          flex: 1,
          display: "inline-block",
          borderRadius: "0.5rem",
          backgroundColor: "#1d1f20",
          color: "white",
          padding: "10px 20px",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
          cursor: "default",
          fontWeight: "normal",
          transition: "background-color 0.3s ease",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "inherit",
          }}
        >
          <FaGithub />
          Github
        </div>
      </span>
      <span
        style={{
          flex: 1,
          display: "inline-block",
          borderRadius: "0.5rem",
          backgroundColor: "#1d1f20",
          color: "white",
          padding: "10px 20px",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
          cursor: "default",
          fontWeight: "normal",
          transition: "background-color 0.3s ease",
          height: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "inherit",
          }}
        >
          <FaExternalLinkAlt />
          Demo
        </div>
      </span>
    </div>
  );
}
