import type { Favorite } from '../types';
import { FavoriteCard } from './FavoriteCard';

interface FavoriteListProps {
  favorites: Favorite[];
}

export function FavoriteList({ favorites }: FavoriteListProps) {
  return (
    <div>
      {favorites.map(fav => (
        <FavoriteCard key={fav.id} favorite={fav} />
      ))}
    </div>
  );
}
