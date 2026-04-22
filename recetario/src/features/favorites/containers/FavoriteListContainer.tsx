// ✅ Client Component — usa useState, useEffect y lógica de favoritos
"use client";
import { useEffect, useState } from 'react';
import { FavoriteList } from '../components/FavoriteList';
import { getAllFavorites } from '../utils/favoriteUtils';
import type { Favorite } from '../types';

export function FavoriteListContainer() {
  const [favorites, setFavorites] = useState<Favorite[]>([]);

  useEffect(() => {
    // Evitar render en cascada
    setTimeout(() => {
      setFavorites(getAllFavorites());
    }, 0);
  }, []);

  return <FavoriteList favorites={favorites} />;
}
