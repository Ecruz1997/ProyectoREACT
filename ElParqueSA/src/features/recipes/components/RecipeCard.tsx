import { Card, Badge } from '../../../shared/ui';
import type { Recipe } from '../types';

interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Card>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
        <div style={{ flex: 1 }}>
          <h3>{recipe.title}</h3>
          <Badge color="#e4730a">Ingredientes</Badge>
          <p>{recipe.descriptionIngredientes}</p>
          <Badge color="#dfca13">Preparación</Badge>
          <p>{recipe.descriptionPreparacion}</p>
        </div>
        {recipe.ilustracion && (
          <img
            src={recipe.ilustracion}
            alt={recipe.title}
            style={{
              width: '140px',
              height: '140px',
              objectFit: 'contain',
              borderRadius: '8px',
              background: '#fff',
              display: 'block',
            }}
          />
        )}
      </div>
    </Card>
  );
}