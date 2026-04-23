import React from "react";
import { Badge } from "../atoms/Badge";
import { Avatar } from "../atoms/Avatar";
import { Spinner } from "../atoms/Spinner";

interface TicketCardProps {
  title: string;
  priority: "alta" | "media" | "baja";
  label: string;
  assignee: string;
}


export const TicketCard: React.FC<TicketCardProps> = React.memo(function TicketCard({ title, priority, label, assignee }) {
  return (
    <div className="ticket-card" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 8 }}>
      {/* <Avatar name={assignee} /> */}
      <span style={{ fontSize: '0.95em', color: 'var(--foreground)', marginBottom: 2 }}>Asignado a: <b>{assignee}</b></span>
      <h4 style={{ margin: 0 }}>{title}</h4>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Badge color={priority === "alta" ? "red" : priority === "media" ? "yellow" : "green"}>{priority}</Badge>
      </div>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <span className="label" style={{ color: 'var(--primary)', fontWeight: 500, fontSize: '0.95em' }}>{label}</span>
      </div>
    </div>
  );
});
