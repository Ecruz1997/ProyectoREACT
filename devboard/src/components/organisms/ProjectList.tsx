"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ProjectSummary } from "../molecules/ProjectSummary";

interface ProjectListProps {
  projects: Array<{
    id: string;
    name: string;
    description: string;
    openTickets: number;
    progress: number;
  }>;
}

export const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  const router = useRouter();
  return (
    <div className="project-list">
      {projects.map((p) => (
        <div key={p.id} onClick={() => router.push(`/projects/${p.id}`)} style={{ cursor: "pointer" }}>
          <ProjectSummary {...p} />
        </div>
      ))}
    </div>
  );
};
