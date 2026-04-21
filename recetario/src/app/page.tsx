import {
  TabsRoot,
  TabsHeader,
  TabsTab,
  TabsContent,
} from "@/shared/ui/compounds/Tabs";
import { RecipesPage } from "@/features/recipes/pages/RecipesPage";
import { FavoritesPage } from "@/features/favorites/pages/FavoritesPage";
import { NewRecipePage } from "@/features/recipes/pages/NewRecipePage"; // <-- Agrega este import

export default function App() {
  return (
    <div style={{ width: '80vw', maxWidth: 900, margin: '0 auto' }}>
      <TabsRoot defaultTabId="all">
        <TabsHeader>
          <TabsTab id="all">Recetas</TabsTab>
          <TabsTab id="favorites">Favoritos</TabsTab>
          <TabsTab id="new">Nueva receta</TabsTab> {/* <-- Nueva pestaña */}
        </TabsHeader>
        <TabsContent id="all">
          <RecipesPage />
        </TabsContent>
        <TabsContent id="favorites">
          <FavoritesPage />
        </TabsContent>
        <TabsContent id="new">
          <NewRecipePage /> {/* <-- Nuevo formulario */}
        </TabsContent>
      </TabsRoot>
    </div>
  );
}