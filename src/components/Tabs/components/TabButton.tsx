import {
  useContext,
  useEffect,
  useRef,
  type ComponentType,
  type ReactNode,
} from "react";
import type { IconBaseProps } from "react-icons";

import { Button } from "../../Button";
import { TabsContext } from "../TabsContext";

import "../styles.css";

interface ITabButton {
  children: ReactNode;
  index: number;
  icon?: ComponentType<IconBaseProps>;
}

export const TabButton = ({ children, index, icon }: ITabButton) => {
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
    <Button
      ref={buttonRef}
      onClick={() => tabsContext?.onClick(index)}
      icon={icon}
      className="tab-button"
    >
      {children}
    </Button>
  );
};
