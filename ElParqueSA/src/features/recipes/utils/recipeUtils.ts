import type { Recipe } from '../types';
import galloPintoImg from '../../../assets/pinto.jpeg';
import chifrijoImg from '../../../assets/chifrijo.jpg';

export function getAllRecipes(): Recipe[] {
  return [
    { 
      id: '1', 
      title: 'Gallo pinto', 
      descriptionIngredientes: 'Arroz, frijoles, cebolla y pimientos.', 
      descriptionPreparacion: 'Cocinar el arroz y los frijoles por separado, luego mezclar con cebolla y pimientos salteados.',
      ilustracion: galloPintoImg,
    },
    { 
      id: '2', 
      title: 'Chifrijo', 
      descriptionIngredientes: 'Frijoles, arroz, chicharrón, pico de gallo y aguacate.', 
      descriptionPreparacion: 'Servir los frijoles sobre el arroz, añadir el chicharrón, el pico de gallo y el aguacate.',
      ilustracion: chifrijoImg,
    },
  ];
}