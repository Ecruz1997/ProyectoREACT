import { render, screen, fireEvent } from '@testing-library/react';
import { RecipeCard } from '../RecipeCard';

describe('RecipeCard', () => {
  const recipe = {
    id: '1',
    title: 'Receta de prueba con título largo para el filtro',
    descriptionIngredientes: 'Ingredientes de prueba',
    descriptionPreparacion: 'Preparación de prueba',
    ilustracion: '/test.jpg',
  };

  it('renderiza correctamente el título y la imagen', () => {
    render(<RecipeCard recipe={recipe} />);
    expect(screen.getByText(recipe.title)).toBeInTheDocument();
    expect(screen.getByAltText(recipe.title)).toBeInTheDocument();
  });

  it('llama a onDelete cuando se hace click en el botón', () => {
    const onDelete = vi.fn();
    render(<RecipeCard recipe={recipe} onDelete={onDelete} />);
    const button = screen.getByText(/eliminar/i);
    fireEvent.click(button);
    expect(onDelete).toHaveBeenCalledWith(recipe.id);
  });
});
