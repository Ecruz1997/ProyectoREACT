import { renderHook, act } from '@testing-library/react';
import { useLocalStorage } from './useLocalStorage';

import { describe, it, expect } from 'vitest';

describe('useLocalStorage', () => {
  it('should read and write localStorage', () => {
    const { result } = renderHook(() => useLocalStorage('key', 'init'));
    expect(result.current[0]).toBe('init');
    act(() => {
      result.current[1]('nuevo');
    });
    expect(result.current[0]).toBe('nuevo');
    expect(window.localStorage.getItem('key')).toBe(JSON.stringify('nuevo'));
  });
});
