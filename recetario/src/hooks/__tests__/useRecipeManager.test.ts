import { renderHook, act } from '@testing-library/react';
import { useRecipeManager } from '../useRecipeManager';

describe('useRecipeManager', () => {
  it('agrega y elimina recetas correctamente', () => {
    const { result } = renderHook(() => useRecipeManager([]));
    act(() => {
      result.current.addRecipe({ id: '1', title: 'Test', descriptionIngredientes: '', descriptionPreparacion: '', ilustracion: '' });
    });
    expect(result.current.recipes).toHaveLength(1);
    act(() => {
      result.current.removeRecipe('1');
    });
    expect(result.current.recipes).toHaveLength(0);
  });
});
