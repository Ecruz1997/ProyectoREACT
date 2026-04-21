import { useState } from 'react';
import type { Recipe } from '@/features/recipes/types';

/**
 * Custom hook para manejar recetas (agregar, eliminar, filtrar, etc.)
 */
export function useRecipeManager(initialRecipes: Recipe[] = []) {
  const [recipes, setRecipes] = useState<Recipe[]>(initialRecipes);

  const addRecipe = (recipe: Recipe) => setRecipes(prev => [...prev, recipe]);
  const removeRecipe = (id: string) => setRecipes(prev => prev.filter(r => r.id !== id));
  const filterByTitle = (title: string) => recipes.filter(r => r.title.toLowerCase().includes(title.toLowerCase()));

  return { recipes, addRecipe, removeRecipe, filterByTitle };
}
