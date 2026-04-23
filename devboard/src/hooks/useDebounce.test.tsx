import { renderHook, act } from '@testing-library/react';
import { useDebounce } from './useDebounce';

import { describe, it, expect, vi } from 'vitest';

vi.useFakeTimers();

describe('useDebounce', () => {
  it('should debounce value changes', () => {
    const { result, rerender } = renderHook(({ value }) => useDebounce(value, 300), {
      initialProps: { value: 'a' },
    });
    expect(result.current).toBe('a');
    rerender({ value: 'ab' });
    expect(result.current).toBe('a');
    act(() => {
      vi.advanceTimersByTime(300);
    });
    expect(result.current).toBe('ab');
  });
});
