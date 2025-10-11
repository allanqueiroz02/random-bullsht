import { useContext, type ReactNode } from "react";
import { TabsContext } from "../TabsContext";

interface ITabButton {
  children: ReactNode;
  index: number;
}

export const TabButton = ({ children, index }: ITabButton) => {
  const tabsContext = useContext(TabsContext);

  return (
    <button onClick={() => tabsContext?.onClick(index)}>{children}</button>
  );
};
