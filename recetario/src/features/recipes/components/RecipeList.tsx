import type { Recipe } from '../types';
import { RecipeCard } from './RecipeCard';
import React from 'react';


interface RecipeListProps {
  recipes: Recipe[];
  onDelete?: (id: string) => void;
}


const RecipeList = React.memo(function RecipeList({ recipes, onDelete }: RecipeListProps) {
  return (
    <div>
      {recipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} onDelete={onDelete} />
      ))}
    </div>
  );
});

export { RecipeList };