import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tareas | TaskFlow",
  description: "Gestiona tus tareas",
  openGraph: {
    title: "Tareas | TaskFlow",
    description: "Gestiona tus tareas",
  },
};
export default function TasksPage() {
  return <h1>Tasks</h1>;
}
