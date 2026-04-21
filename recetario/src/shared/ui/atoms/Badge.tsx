import type { ReactNode } from 'react';

/** Props para el componente Badge */
interface BadgeProps {
  /** Contenido a mostrar dentro del badge */
  children: ReactNode;
  /** Color de fondo del badge */
  color?: string;
}

export function Badge({ children, color = '#eee' }: BadgeProps) {
  return (
    <span style={{
      background: color,
      borderRadius: '12px',
      padding: '2px 8px',
      fontSize: '12px',
      display: 'inline-block'
    }}>
      {children}
    </span>
  );
}