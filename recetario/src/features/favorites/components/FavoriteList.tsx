import type { Favorite } from '../types';
import { FavoriteCard } from './FavoriteCard';
import React from 'react';

interface FavoriteListProps {
  favorites: Favorite[];
}

const FavoriteList = React.memo(function FavoriteList({ favorites }: FavoriteListProps) {
  return (
    <div>
      {favorites.map(fav => (
        <FavoriteCard key={fav.id} favorite={fav} />
      ))}
    </div>
  );
});

export { FavoriteList };
