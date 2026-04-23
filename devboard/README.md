
# DevBoard

Aplicación web de gestión de proyectos y tickets en un tablero Kanban, desarrollada con Next.js 14+, React, Zustand, Context API, Atomic Design y pruebas con Vitest + React Testing Library.

## Instalación

```bash
npm install
npm run dev
```

## Testing

```bash
npm run test
```

## Arquitectura
- **Feature-based + Atomic Design**: Componentes organizados en átomos, moléculas, organismos y dominios.
- **Estado global**: Zustand para tickets y proyectos, Context API para filtros y tema.
- **Persistencia**: localStorage.
- **Optimización**: React.memo, useMemo, useCallback, React.lazy/Suspense.

## Justificación de memoización
- Se recomienda memoizar componentes presentacionales como `TicketCard` y `ProjectSummary` para evitar renders innecesarios al filtrar o actualizar tickets.

## Estructura principal

- `src/features/projects/`
- `src/features/tickets/`
- `src/components/atoms/`
- `src/components/molecules/`
- `src/components/organisms/`
- `src/store/`
- `src/context/`
- `src/hooks/`
- `src/data/`

## Mock data
- `src/data/projects.json`
- `src/data/tickets.json`

## Captura de pantalla

> Agrega aquí una imagen o GIF de la app funcionando.

---

**Entrega:**
- El proyecto debe ejecutarse con `npm run dev` sin errores.
- Los tests deben pasar con `npm run test`.
- Explica tus decisiones de arquitectura en la defensa.
