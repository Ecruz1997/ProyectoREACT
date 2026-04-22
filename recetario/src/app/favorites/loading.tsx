/**
 * Skeleton UI para la carga de la página de favoritos.
 * Representa la estructura de la UI real con animación pulse.
 */
export default function Loading() {
  return (
    <div style={{ width: '80vw', maxWidth: 900, margin: '0 auto', padding: 32 }}>
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            marginBottom: 24,
            background: '#f3f3f3',
            borderRadius: 8,
            padding: 16,
            minHeight: 80,
            animation: 'pulse 1.5s infinite',
          }}
        >
          <div
            style={{
              width: 60,
              height: 60,
              background: '#e0e0e0',
              borderRadius: 8,
              flexShrink: 0,
            }}
          />
          <div style={{ flex: 1 }}>
            <div
              style={{
                width: '40%',
                height: 20,
                background: '#e0e0e0',
                borderRadius: 4,
                marginBottom: 8,
              }}
            />
            <div
              style={{
                width: '60%',
                height: 14,
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
