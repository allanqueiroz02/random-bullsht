import {
  useContext,
  useEffect,
  useRef,
  type ComponentType,
  type ReactNode,
} from "react";
import type { IconBaseProps } from "react-icons";
import { LiaRandomSolid } from "react-icons/lia";


import { TabsContext } from "../TabsContext";

import "../styles.css";

interface ITabButton {
  children: ReactNode;
  index: number;
  Icon?: ComponentType<IconBaseProps>;
}

export const TabButton = ({
  children,
  index,
  Icon = LiaRandomSolid,
}: ITabButton) => {
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
      <div className="container-content">
        {children}
        {Icon && <Icon style={{ fontSize: "17" }} />}
      </div>
    </button>
  );
};
