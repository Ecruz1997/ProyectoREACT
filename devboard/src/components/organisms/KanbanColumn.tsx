import React, { ReactNode } from "react";

interface KanbanColumnProps {
  title: string;
  children: ReactNode;
}

export const KanbanColumn: React.FC<KanbanColumnProps> = ({ title, children }) => (
  <div className="kanban-column">
    <h4>{title}</h4>
    {children}
  </div>
);
