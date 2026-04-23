import React, { useState } from "react";
import { useKanbanStore } from "@/store/kanbanStore";
import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";

export const NewTicketForm: React.FC<{ projectId: string }> = ({ projectId }) => {
  const addTicket = useKanbanStore((s) => s.setTickets);
  const tickets = useKanbanStore((s) => s.tickets);
  const [form, setForm] = useState({
    title: "",
    priority: "media",
    label: "",
    assignee: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.title.trim() || !form.assignee.trim()) return;
    const newTicket = {
      id: `t${Date.now()}`,
      projectId,
      title: form.title,
      priority: form.priority as "alta" | "media" | "baja",
      label: form.label,
      assignee: form.assignee,
      status: "Backlog" as const,
    };
    addTicket([...tickets, newTicket]);
    setForm({ title: "", priority: "media", label: "", assignee: "" });
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24, alignItems: "center" }}>
      <Input name="title" placeholder="Título" value={form.title} onChange={handleChange} required />
      <select name="priority" value={form.priority} onChange={handleChange}>
        <option value="alta">Alta</option>
        <option value="media">Media</option>
        <option value="baja">Baja</option>
      </select>
      <Input name="label" placeholder="Etiqueta" value={form.label} onChange={handleChange} />
      <Input name="assignee" placeholder="Responsable" value={form.assignee} onChange={handleChange} required />
      <Button type="submit">Agregar tarea</Button>
    </form>
  );
};
