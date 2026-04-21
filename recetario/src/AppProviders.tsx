import { ThemeProvider } from "@/context/ThemeContext";
// Si tuvieras más providers, los importas aquí

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      {/* <AuthProvider> */}
      {/* <NotificationProvider> */}
      {children}
      {/* </NotificationProvider> */}
      {/* </AuthProvider> */}
    </ThemeProvider>
  );
}
