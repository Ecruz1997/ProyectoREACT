import { useState, createContext, useContext } from 'react';
import type { ReactNode } from 'react';

interface TabsProps {
  children: ReactNode;
  defaultTabId: string;
}

interface TabsContextProps {
  activeTab: string;
  setActiveTab: (id: string) => void;
}

const TabsContext = createContext<TabsContextProps | undefined>(undefined);

export function Tabs({ children, defaultTabId }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTabId);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div>{children}</div>
    </TabsContext.Provider>
  );
}

interface TabsHeaderProps {
  children: ReactNode;
}

function TabsHeader({ children }: TabsHeaderProps) {
  return <div style={{ display: 'flex', gap: 8 }}>{children}</div>;
}

interface TabProps {
  id: string;
  children: ReactNode;
}

function Tab({ id, children }: TabProps) {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error('Tab must be used within Tabs');
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

interface TabsContentProps {
  id: string;
  children: ReactNode;
}

function TabsContent({ id, children }: TabsContentProps) {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error('TabsContent must be used within Tabs');
  return ctx.activeTab === id ? <div style={{ padding: 16 }}>{children}</div> : null;
}

// Barrel export compound children
Tabs.Header = TabsHeader;
Tabs.Tab = Tab;
Tabs.Content = TabsContent;