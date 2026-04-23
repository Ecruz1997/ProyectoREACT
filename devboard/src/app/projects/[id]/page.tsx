

"use client";
import React from "react";
import { KanbanBoard } from "@/components/organisms/KanbanBoard";
import { TicketCard } from "@/components/molecules/TicketCard";
import { FilterBar } from "@/components/molecules/FilterBar";
import { useParams } from "next/navigation";
import { useProjectStore } from "@/store/projectStore";
import { useKanbanStore } from "@/store/kanbanStore";
import { useFilters } from "@/context/FiltersContext";
import { useMemo, useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";

export default function ProjectPage() {
  const { id } = useParams();
  const project = useProjectStore((s) => s.projects.find((p) => p.id === id));
  const allTickets = useKanbanStore((s) => s.tickets);
  const tickets = React.useMemo(() => allTickets.filter((t) => t.projectId === id), [allTickets, id]);
  const { filters, setFilters } = useFilters();
  const moveTicket = useKanbanStore((s) => s.moveTicket);

  // Debounce para búsqueda
  const [searchInput, setSearchInput] = useState("");
  const debouncedSearch = useDebounce(searchInput, 300);

  // Sincronizar debounce con filtro global
  React.useEffect(() => {
    setFilters((f) => ({ ...f, search: debouncedSearch }));
    // eslint-disable-next-line
  }, [debouncedSearch, setFilters]);

  const filteredTickets = useMemo(() => {
    return tickets.filter((t) => {
      if (filters.priority && t.priority !== filters.priority) return false;
      if (filters.assignee && !t.assignee.toLowerCase().includes(filters.assignee.toLowerCase())) return false;
      if (filters.search && !t.title.toLowerCase().includes(filters.search.toLowerCase())) return false;
      return true;
    });
  }, [tickets, filters]);

  const columns = ["Backlog", "En progreso", "En revisión", "Completado"];

  if (!project) return <div>Proyecto no encontrado</div>;

  return (
    <main style={{ padding: 32 }}>
      <h1>{project.name}</h1>
      <FilterBar
        onSearch={setSearchInput}
        onPriorityChange={(priority) => setFilters((f) => ({ ...f, priority }))}
        onAssigneeChange={(assignee) => setFilters((f) => ({ ...f, assignee }))}
      />
      <KanbanBoard>
        {columns.map((col) => (
          <KanbanBoard.Column key={col} title={col}>
            {filteredTickets.filter((t) => t.status === col).map((t) => (
              <KanbanBoard.Card key={t.id}>
                <div style={{ width: '100%' }}>
                  <TicketCard {...t} />
                  {col !== "Completado" && (
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 12 }}>
                      <button
                        className="btn btn-secondary"
                        style={{ width: '90%', whiteSpace: 'nowrap', paddingLeft: 0, paddingRight: 0 }}
                        onClick={() => moveTicket(t.id)}
                      >
                        Mover a siguiente
                      </button>
                    </div>
                  )}
                </div>
              </KanbanBoard.Card>
            ))}
          </KanbanBoard.Column>
        ))}
      </KanbanBoard>
    </main>
  );
}
