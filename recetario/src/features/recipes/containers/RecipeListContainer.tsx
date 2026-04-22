import { useEffect, useState, useMemo, useCallback } from 'react';
import { RecipeList } from '../components/RecipeList';
import type { Recipe } from '../types';

interface RecipeListContainerProps {
  initialRecipes?: Recipe[];
}

export function RecipeListContainer({ initialRecipes }: RecipeListContainerProps) {
  const [recipes, setRecipes] = useState<Recipe[]>(initialRecipes ?? []);

  useEffect(() => {
    if (initialRecipes) return; // No cargar si se pasan recetas por prop (test)
    setTimeout(async () => {
      const { getAllRecipes } = await import('../utils/recipeUtils');
      setRecipes(getAllRecipes());
    }, 0);
  }, [initialRecipes]);

  const filteredRecipes = useMemo(
    () => recipes.filter(r => r.title.length > 20),
    [recipes]
  );

  const handleDelete = useCallback((id: string) => {
    setRecipes(prev => prev.filter(r => r.id !== id));
  }, []);

  return <RecipeList recipes={filteredRecipes} onDelete={handleDelete} />;
}