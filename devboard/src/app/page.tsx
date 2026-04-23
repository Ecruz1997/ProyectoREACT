"use client";
import { ProjectList } from "@/components/organisms/ProjectList";
import projectsData from "@/data/projects.json";
import ticketsData from "@/data/tickets.json";
import type { Project } from "@/store/projectStore";
import type { Ticket } from "@/store/kanbanStore";
import { useEffect } from "react";
import { useProjectStore } from "@/store/projectStore";
import { useKanbanStore } from "@/store/kanbanStore";

export default function Home() {
  const setProjects = useProjectStore((s) => s.setProjects);
  const setTickets = useKanbanStore((s) => s.setTickets);

  useEffect(() => {
    setProjects(projectsData as Project[]);
    setTickets(
      (ticketsData as any[]).map((t) => ({
        ...t,
        status: t.status as Ticket["status"],
        priority: t.priority as Ticket["priority"],
      })) as Ticket[]
    );
  }, [setProjects, setTickets]);

  const projects = useProjectStore((s) => s.projects);

  return (
    <main style={{ padding: 32 }}>
      <h1>Proyectos</h1>
      <ProjectList
        projects={projects.map((p) => ({
          id: p.id,
          name: p.name,
          description: p.description,
          openTickets: p.tickets.length,
          progress: p.progress,
        }))}
      />
    </main>
  );
}
