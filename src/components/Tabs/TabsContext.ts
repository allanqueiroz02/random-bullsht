import { createContext } from "react";

interface ITabsContext {
  currentIndex: number;
  onClick: (index: number) => void;
}

export const TabsContext = createContext<ITabsContext | undefined>(undefined);
