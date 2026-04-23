import React from "react";
import { Input } from "../atoms/Input";

interface FilterBarProps {
  onSearch: (value: string) => void;
  onPriorityChange: (priority: string) => void;
  onAssigneeChange: (assignee: string) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({ onSearch, onPriorityChange, onAssigneeChange }) => (
  <div className="filter-bar">
    <Input placeholder="Buscar..." onChange={e => onSearch(e.target.value)} />
    <select onChange={e => onPriorityChange(e.target.value)}>
      <option value="">Todas las prioridades</option>
      <option value="alta">Alta</option>
      <option value="media">Media</option>
      <option value="baja">Baja</option>
    </select>
    <Input placeholder="Responsable" onChange={e => onAssigneeChange(e.target.value)} />
  </div>
);
