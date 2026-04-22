import type { Favorite } from '../types';
import { Card, Badge } from '@/shared/ui';
import Image from 'next/image';

interface FavoriteCardProps {
  favorite: Favorite;
}

/**
 * ✅ Server Component — solo renderiza HTML, no usa hooks ni eventos
 */
import React from 'react';

export const FavoriteCard = React.memo(function FavoriteCard({ favorite }: FavoriteCardProps) {
  return (
    <Card>
      <h3>{favorite.title}</h3>
      <p>{favorite.description}</p>
      {favorite.ilustracion && (
        <Image
          src={favorite.ilustracion}
          alt={favorite.title}
          width={120}
          height={120}
          style={{ objectFit: 'contain', borderRadius: '8px' }}
        />
      )}
    </Card>
  );
});
