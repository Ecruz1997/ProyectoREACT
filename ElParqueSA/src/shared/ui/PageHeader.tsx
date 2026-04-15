import { ReactNode } from 'react';

interface PageHeaderProps {
  children: ReactNode;
}

export function PageHeader({ children }: PageHeaderProps) {
  return (
    <div
      style={{
        fontSize: '2rem',
        fontWeight: 'bold',
        marginBottom: '0.1rem',
        textAlign: 'center',
        backgroundColor: '#F54927',
        color: '#fff',
        padding: '1.5rem 0',
        borderRadius: '8px',
      }}
    >
      {children}
    </div>
  );
}