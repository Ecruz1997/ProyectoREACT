import { renderHook, act } from '@testing-library/react';
import { FiltersProvider } from '../context/FiltersContext';
import { useFiltersHook } from './useFilters';

import { describe, it, expect } from 'vitest';

describe('useFiltersHook', () => {
  it('updates filters', () => {
    const wrapper = ({ children }: any) => <FiltersProvider>{children}</FiltersProvider>;
    const { result } = renderHook(() => useFiltersHook(), { wrapper });
    act(() => {
      result.current.setPriority('alta');
    });
    expect(result.current.filters.priority).toBe('alta');
  });
});
