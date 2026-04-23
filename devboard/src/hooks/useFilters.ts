import { useFilters } from '../context/FiltersContext';

export function useFiltersHook() {
  const { filters, setFilters } = useFilters();
  return {
    filters,
    setPriority: (priority: string) => setFilters(f => ({ ...f, priority })),
    setAssignee: (assignee: string) => setFilters(f => ({ ...f, assignee })),
    setSearch: (search: string) => setFilters(f => ({ ...f, search })),
  };
}
