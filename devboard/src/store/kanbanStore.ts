import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Ticket = {
  id: string;
  projectId: string;
  title: string;
  priority: 'alta' | 'media' | 'baja';
  label: string;
  assignee: string;
  status: 'Backlog' | 'En progreso' | 'En revisión' | 'Completado';
};

interface KanbanState {
  tickets: Ticket[];
  moveTicket: (ticketId: string) => void;
  setTickets: (tickets: Ticket[]) => void;
}

const statusOrder = ['Backlog', 'En progreso', 'En revisión', 'Completado'];

export const useKanbanStore = create<KanbanState>()(
  persist(
    (set, get) => ({
      tickets: [],
      setTickets: (tickets) => set({ tickets }),
      moveTicket: (ticketId) => {
        set((state) => {
          const tickets = state.tickets.map((t) => {
            if (t.id === ticketId) {
              const idx = statusOrder.indexOf(t.status as Ticket["status"]);
              const nextStatus = statusOrder[Math.min(idx + 1, statusOrder.length - 1)] as Ticket["status"];
              return { ...t, status: nextStatus };
            }
            return { ...t, status: t.status as Ticket["status"], priority: t.priority as Ticket["priority"] };
          });
          return { tickets };
        });
      },
    }),
    { name: 'kanban-tickets' }
  )
);
