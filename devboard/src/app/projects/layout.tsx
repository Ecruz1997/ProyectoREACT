import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proyecto | DevBoard",
};

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
