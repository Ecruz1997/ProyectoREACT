/**
 * Skeleton UI para la carga de la página de nueva receta.
 * Representa la estructura de la UI real con animación pulse.
 */
export default function Loading() {
  return (
    <div style={{ width: '80vw', maxWidth: 900, margin: '0 auto', padding: 32 }}>
      <div
        style={{
          background: '#f3f3f3',
          borderRadius: 8,
          padding: 32,
          minHeight: 300,
          animation: 'pulse 1.5s infinite',
        }}
      >
        <div
          style={{
            width: '40%',
            height: 32,
            background: '#e0e0e0',
            borderRadius: 4,
            marginBottom: 24,
          }}
        />
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            style={{
              width: '100%',
              height: 20,
              background: '#e0e0e0',
              borderRadius: 4,
              marginBottom: 16,
            }}
          />
        ))}
        <div
          style={{
            width: 120,
            height: 40,
            background: '#e0e0e0',
            borderRadius: 8,
            marginTop: 32,
          }}
        />
      </div>
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
