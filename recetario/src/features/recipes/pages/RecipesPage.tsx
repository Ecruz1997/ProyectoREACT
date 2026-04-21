import { RecipeList } from '../components/RecipeList';
import { getAllRecipes } from '../utils/recipeUtils';
import { PageHeader } from '@/shared/ui/PageHeader';

export function RecipesPage() {
  const recipes = getAllRecipes();

  return (
    <>
      <PageHeader>Recetario</PageHeader>
      <RecipeList recipes={recipes} />
    </>
  );
}