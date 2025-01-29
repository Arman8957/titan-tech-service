import { createContext, useState } from "react";
export const AppContext = createContext();
export function AppProvider({ children }) {
  const [state, setState] = useState("Hello World");
  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
}