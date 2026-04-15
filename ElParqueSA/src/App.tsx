import { Tabs } from '@/shared/ui/compounds';
import { RecipesPage } from '@/features/recipes/pages/RecipesPage';
import { FavoritesPage } from '@/features/favorites/pages/FavoritesPage';

function App() {
  return (
    <Tabs defaultTabId="all">
      <Tabs.Header>
        <Tabs.Tab id="all">Recetas</Tabs.Tab>
        <Tabs.Tab id="favorites">Favoritos</Tabs.Tab>
      </Tabs.Header>
      <Tabs.Content id="all">
        <RecipesPage />
      </Tabs.Content>
      <Tabs.Content id="favorites">
        <FavoritesPage />
      </Tabs.Content>
    </Tabs>
  );
}

export default App;