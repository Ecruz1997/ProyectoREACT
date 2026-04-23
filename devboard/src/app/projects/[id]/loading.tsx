import { Spinner } from "@/components/atoms/Spinner";

export default function Loading() {
  return (
    <div style={{ padding: 32, display: "flex", alignItems: "center", gap: 8 }}>
      <Spinner /> Cargando proyecto...
    </div>
  );
}
