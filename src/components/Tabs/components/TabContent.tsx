import { useContext, type ReactNode } from "react";
import { TabsContext } from "../TabsContext";

interface ITabContent {
  children: ReactNode;
  index: number;
}

export const TabContent = ({ children, index }: ITabContent) => {
  const tabContext = useContext(TabsContext);

  if (tabContext?.currentIndex !== index) return null;

  return <div>{children}</div>;
};
