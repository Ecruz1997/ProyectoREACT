import { FavoriteListContainer } from '../containers/FavoriteListContainer';
import { PageHeader } from '@/shared/ui/PageHeader';

export function FavoritesPage() {
  return (
    <>
      <PageHeader>Favoritos</PageHeader>
      <FavoriteListContainer />
    </>
  );
}
