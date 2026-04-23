import { useProjectStore } from "@/store/projectStore";
import { useParams } from "next/navigation";

export default function Head() {
  const { id } = useParams();
  const project = useProjectStore.getState().projects.find((p) => p.id === id);
  return (
    <>
      <title>{project ? `${project.name} | DevBoard` : "Proyecto | DevBoard"}</title>
    </>
  );
}