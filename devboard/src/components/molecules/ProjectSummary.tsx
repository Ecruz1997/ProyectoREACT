import React from "react";

interface ProjectSummaryProps {
  name: string;
  description: string;
  openTickets: number;
  progress: number;
}

export const ProjectSummary: React.FC<ProjectSummaryProps> = React.memo(({ name, description, openTickets, progress }) => (
  <div className="project-summary">
    <h3>{name}</h3>
    <p>{description}</p>
    <p>Tickets abiertos: {openTickets}</p>
    <progress value={progress} max={1} />
  </div>
));
