"use client";
import { ThemeProvider, useTheme } from "@/context/ThemeContext";
import { FiltersProvider } from "@/context/FiltersContext";
import React from "react";

import { useEffect, useState } from "react";
function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <button style={{ position: "fixed", top: 16, right: 16, zIndex: 1000 }} onClick={toggleTheme}>
      {theme === "light" ? "🌞" : "🌙"}
    </button>
  );
}

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ThemeToggle />
      <FiltersProvider>{children}</FiltersProvider>
    </ThemeProvider>
  );
}
