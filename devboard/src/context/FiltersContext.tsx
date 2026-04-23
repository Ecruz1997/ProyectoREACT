"use client";
import React, { createContext, useContext, useState } from "react";

interface Filters {
  priority: string;
  assignee: string;
  search: string;
}

const FiltersContext = createContext<{
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}>({
  filters: { priority: "", assignee: "", search: "" },
  setFilters: () => {},
});

export const FiltersProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [filters, setFilters] = useState<Filters>({ priority: "", assignee: "", search: "" });
  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  );
};

export const useFilters = () => useContext(FiltersContext);
