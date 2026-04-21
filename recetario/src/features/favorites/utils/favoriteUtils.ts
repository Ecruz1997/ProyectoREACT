import type { Favorite } from '../types';

export function getAllFavorites(): Favorite[] {
  return [
    {
      id: '1',
      title: 'Gallo Pinto',
      description: 'Arroz, frijoles, cebolla y pimientos.',
    },
    {
      id: '2',
      title: 'Chifrijo',
      description: 'Frijoles, arroz, chicharrón y pico de gallo.',
    },
  ];
}
