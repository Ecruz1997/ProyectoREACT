import { Card } from '../../../shared/ui/molecules/Card';
import { Badge } from '../../../shared/ui/atoms/Badge';
import Image from 'next/image';
import type { Recipe } from '../types';


interface RecipeCardProps {
  recipe: Recipe;
  onDelete?: (id: string) => void;
}

/**
 * ✅ Server Component — solo renderiza HTML, no usa hooks ni eventos
 */
import React from 'react';

export const RecipeCard = React.memo(function RecipeCard({ recipe, onDelete }: RecipeCardProps) {
  return (
    <Card>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', maxWidth: 420, margin: '0 auto' }}>
        <div style={{ flex: 1 }}>
          <h3>{recipe.title}</h3>
          <Badge color="#e4730a">Ingredientes</Badge>
          <p>{recipe.descriptionIngredientes}</p>
          <Badge color="#dfca13">Preparación</Badge>
          <p>{recipe.descriptionPreparacion}</p>
          {onDelete && (
            <button onClick={() => onDelete(recipe.id)} style={{ marginTop: 8 }}>Eliminar</button>
          )}
        </div>
        {recipe.ilustracion && (
          <Image
            src={recipe.ilustracion}
            alt={recipe.title}
            width={140}
            height={140}
            style={{
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
});