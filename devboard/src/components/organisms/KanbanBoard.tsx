import React, { ReactNode } from "react";

interface KanbanBoardProps {
  children: ReactNode;
}

const KanbanBoard: React.FC<KanbanBoardProps> & {
  Column: React.FC<KanbanColumnProps>;
  Card: React.FC<KanbanCardProps>;
} = ({ children }) => <div className="kanban-board">{children}</div>;

interface KanbanColumnProps {
  title: string;
  children: ReactNode;
}

KanbanBoard.Column = ({ title, children }) => (
  <div className="kanban-column">
    <h4>{title}</h4>
    {children}
  </div>
);

interface KanbanCardProps {
  children: ReactNode;
}

KanbanBoard.Card = ({ children }) => <div className="kanban-card">{children}</div>;

export { KanbanBoard };
