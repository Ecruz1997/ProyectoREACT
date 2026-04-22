// Vitest globals for TypeScript
/// <reference types="vitest" />

import { render, screen, fireEvent } from '@testing-library/react';
import { RecipeListContainer } from '../RecipeListContainer';

const mockRecipes = [
  {
    id: '1',
    title: 'Receta de ejemplo con título muy largo',
    descriptionIngredientes: 'Ingredientes de prueba',
    descriptionPreparacion: 'Preparación de prueba',
    ilustracion: '',
  },
  {
    id: '2',
    title: 'Corta',
    descriptionIngredientes: 'Ingredientes cortos',
    descriptionPreparacion: 'Preparación corta',
    ilustracion: '',
  },
];

describe('RecipeListContainer', () => {
  it('muestra solo recetas con título largo (filtradas)', async () => {
    render(<RecipeListContainer initialRecipes={mockRecipes} />);
    expect(
      await screen.findByText((content, node) =>
        node?.textContent === 'Receta de ejemplo con título muy largo'
      )
    ).toBeInTheDocument();
    expect(screen.queryByText('Corta')).toBeNull();
  });

  it('elimina una receta al hacer click en el botón', async () => {
    render(<RecipeListContainer initialRecipes={mockRecipes} />);
    const button = await screen.findByRole('button', { name: /eliminar/i });
    fireEvent.click(button);
    expect(
      screen.queryByText((content, node) =>
        node?.textContent === 'Receta de ejemplo con título muy largo'
      )
    ).toBeNull();
  });
});
