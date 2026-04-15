import type { Favorite } from '../types';
import { Card, Badge } from '@/shared/ui';

interface FavoriteCardProps {
  favorite: Favorite;
}

export function FavoriteCard({ favorite }: FavoriteCardProps) {
  return (
    <Card>
      <h3>{favorite.title}</h3>
      <p>{favorite.description}</p>
      {favorite.ilustracion && (
        <img
          src={favorite.ilustracion}
          alt={favorite.title}
          style={{ width: '120px', height: '120px', objectFit: 'contain', borderRadius: '8px' }}
        />
      )}
    </Card>
  );
}
