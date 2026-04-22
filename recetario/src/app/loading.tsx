/**
 * Skeleton UI para la carga de la página principal (recetas, favoritos, nueva receta).
 * Representa la estructura de la UI real con animación pulse.
 */
export default function Loading() {
  return (
    <div style={{ width: '80vw', maxWidth: 900, margin: '0 auto', padding: 32 }}>
      <div style={{ display: 'flex', gap: 24, marginBottom: 32 }}>
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            style={{
              flex: 1,
              background: '#f3f3f3',
              borderRadius: 8,
              minHeight: 48,
              height: 48,
              animation: 'pulse 1.5s infinite',
            }}
          />
        ))}
      </div>
      {[1, 2].map((i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            gap: 16,
            marginBottom: 32,
            background: '#f3f3f3',
            borderRadius: 8,
            padding: 24,
            minHeight: 120,
            animation: 'pulse 1.5s infinite',
          }}
        >
          <div
            style={{
              width: 100,
              height: 100,
              background: '#e0e0e0',
              borderRadius: 8,
              flexShrink: 0,
            }}
          />
          <div style={{ flex: 1 }}>
            <div
              style={{
                width: '50%',
                height: 24,
                background: '#e0e0e0',
                borderRadius: 4,
                marginBottom: 12,
              }}
            />
            <div
              style={{
                width: '80%',
                height: 16,
                background: '#e0e0e0',
                borderRadius: 4,
                marginBottom: 8,
              }}
            />
            <div
              style={{
                width: '60%',
                height: 16,
                background: '#e0e0e0',
                borderRadius: 4,
              }}
            />
          </div>
        </div>
      ))}
      <style>{`
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
