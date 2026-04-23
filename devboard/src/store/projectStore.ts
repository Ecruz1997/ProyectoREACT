import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Project = {
  id: string;
  name: string;
  description: string;
  tickets: string[];
  progress: number;
};

interface ProjectState {
  projects: Project[];
  setProjects: (projects: Project[]) => void;
}

export const useProjectStore = create<ProjectState>()(
  persist(
    (set) => ({
      projects: [],
      setProjects: (projects) => set({ projects }),
    }),
    { name: 'projects' }
  )
);
