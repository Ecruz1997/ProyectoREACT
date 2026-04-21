import { useReducer, useMemo } from 'react';
import type { Recipe } from '@/features/recipes/types';

// Tipos para acciones y estado
export type RecipeAction =
  | { type: 'ADD_RECIPE'; payload: Recipe }
  | { type: 'DELETE_RECIPE'; payload: string }
  | { type: 'UPDATE_RECIPE'; payload: Recipe }
  | { type: 'MARK_FAVORITE'; payload: string }
  | { type: 'UNMARK_FAVORITE'; payload: string };

export interface RecipeState {
  recipes: Recipe[];
  favorites: string[]; // array de ids
}

function recipeReducer(state: RecipeState, action: RecipeAction): RecipeState {
  switch (action.type) {
    case 'ADD_RECIPE':
      return { ...state, recipes: [...state.recipes, action.payload] };
    case 'DELETE_RECIPE':
      return {
        ...state,
        recipes: state.recipes.filter(r => r.id !== action.payload),
        favorites: state.favorites.filter(id => id !== action.payload),
      };
    case 'UPDATE_RECIPE':
      return {
        ...state,
        recipes: state.recipes.map(r => r.id === action.payload.id ? action.payload : r),
      };
    case 'MARK_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case 'UNMARK_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.filter(id => id !== action.payload),
      };
    default:
      return state;
  }
}

/**
 * Custom hook con useReducer para manejar recetas y favoritos.
 * Incluye estado derivado: recetas favoritas, cantidad total, etc.
 */
export function useRecipeReducer(initialRecipes: Recipe[] = []) {
  const [state, dispatch] = useReducer(recipeReducer, {
    recipes: initialRecipes,
    favorites: [],
  });

  // Estado derivado
  const favoriteRecipes = useMemo(
    () => state.recipes.filter(r => state.favorites.includes(r.id)),
    [state.recipes, state.favorites]
  );
  const totalCount = state.recipes.length;
  const favoriteCount = state.favorites.length;

  return {
    state,
    dispatch,
    favoriteRecipes,
    totalCount,
    favoriteCount,
  };
}
