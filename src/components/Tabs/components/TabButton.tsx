import { useContext, useEffect, useRef, type ReactNode } from "react";
import { TabsContext } from "../TabsContext";

import "../styles.css";

interface ITabButton {
  children: ReactNode;
  index: number;
}

export const TabButton = ({ children, index }: ITabButton) => {
  const tabsContext = useContext(TabsContext);
  const isTabActive = index === tabsContext?.currentIndex;
  const buttonRef = useRef<null | HTMLButtonElement>(null);

  useEffect(() => {
    const buttonClassList = buttonRef.current?.classList;

    if (isTabActive) {
      buttonClassList?.add("active");
    }

    return () => {
      if (buttonClassList?.contains("active")) {
        buttonClassList.remove("active");
      }
    };
  }, [isTabActive]);

  return (
    <button
      ref={buttonRef}
      onClick={() => tabsContext?.onClick(index)}
      className="tab-button"
    >
      {children}
    </button>
  );
};
