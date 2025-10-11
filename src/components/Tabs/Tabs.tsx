import type { ReactNode } from "react";
import { TabsContext } from "./TabsContext";

interface ITabsProps {
  children: ReactNode;
  currentIndex: number;
  onClick: (index: number) => void;
}

export const Tabs = ({ children, currentIndex, onClick }: ITabsProps) => {
  return (
    <TabsContext.Provider value={{ currentIndex, onClick }}>
      <div>{children}</div>
    </TabsContext.Provider>
  );
};
