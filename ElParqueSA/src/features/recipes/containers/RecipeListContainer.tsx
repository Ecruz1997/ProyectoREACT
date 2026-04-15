import { useEffect, useState } from 'react';
import { RecipeList } from '../components/RecipeList';
import { getAllRecipes } from '../utils/recipeUtils';
import type { Recipe } from '../types';

export function RecipeListContainer() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    setRecipes(getAllRecipes());
  }, []);

  return <RecipeList recipes={recipes} />;
}