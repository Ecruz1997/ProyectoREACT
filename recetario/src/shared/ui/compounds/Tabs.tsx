// ✅ Client Component — usa useState y context para tabs
"use client";
import { useState, createContext, useContext, ReactNode } from "react";

interface TabsRootProps {
  children: ReactNode;
  defaultTabId: string;
}
interface TabsContextProps {
  activeTab: string;
  setActiveTab: (id: string) => void;
}
const TabsContext = createContext<TabsContextProps | undefined>(undefined);

export function TabsRoot({ children, defaultTabId }: TabsRootProps) {
  const [activeTab, setActiveTab] = useState(defaultTabId);
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div>{children}</div>
    </TabsContext.Provider>
  );
}

/**
 * ✅ Server Component — solo renderiza HTML para el header de tabs
 */
export function TabsHeader({ children }: { children: ReactNode }) {
  return <div style={{ display: "flex", gap: 8 }}>{children}</div>;
}

/**
 * ✅ Client Component — usa useContext y event handler onClick
 */
export function TabsTab({ id, children }: { id: string; children: ReactNode }) {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error("Tab must be used within TabsRoot");
  const { activeTab, setActiveTab } = ctx;
  const isActive = activeTab === id;
  return (
    <button
      style={{
        padding: "12px 24px",
        border: "none",
        borderBottom: isActive ? "2px solid #F54927" : "2px solid transparent",
        backgroundColor: "transparent",
        color: isActive ? "#004225" : "#64748b",
        fontWeight: isActive ? "600" : "400",
        cursor: "pointer",
        fontSize: "14px",
        marginBottom: "-2px",
      }}
      onClick={() => setActiveTab(id)}
    >
      {children}
    </button>
  );
}

/**
 * ✅ Client Component — usa useContext para mostrar el contenido activo
 */
export function TabsContent({ id, children }: { id: string; children: ReactNode }) {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error("TabsContent must be used within TabsRoot");
  return ctx.activeTab === id ? <div style={{ padding: 16 }}>{children}</div> : null;
}