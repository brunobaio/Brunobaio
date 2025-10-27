import React from "react";

const ProjectCard = ({ title, description, link }) => (
  <div
    style={{
      background: "#141414",
      padding: "1.2rem",
      borderRadius: "10px",
      border: "1px solid #222",
      transition: "0.2s ease",
    }}
  >
    <h3 style={{ color: "#6a0dad" }}>{title}</h3>
    <p style={{ color: "#bbb", margin: "0.5rem 0" }}>{description}</p>
    {link && (
      <a href={link} target="_blank" rel="noopener noreferrer">
        Ver projeto →
      </a>
    )}
  </div>
);

export default ProjectCard;
