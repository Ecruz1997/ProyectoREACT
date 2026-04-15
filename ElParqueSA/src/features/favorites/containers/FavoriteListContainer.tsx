import { useEffect, useState } from 'react';
import { FavoriteList } from '../components/FavoriteList';
import { getAllFavorites } from '../utils/favoriteUtils';
import type { Favorite } from '../types';

export function FavoriteListContainer() {
  const [favorites, setFavorites] = useState<Favorite[]>([]);

  useEffect(() => {
    setFavorites(getAllFavorites());
  }, []);

  return <FavoriteList favorites={favorites} />;
}
