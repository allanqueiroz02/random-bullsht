import { useEffect, useRef } from "react";
import "./style.css";

const COLORS_SCHEME = {
  success: "#51a351",
  info: "#3276b1",
  warning: "#f89406",
  error: "#bd362f",
};

interface IToastrProps {
  color?: keyof typeof COLORS_SCHEME;
  text: string;
}

export const Toastr = ({ color = "success", text }: IToastrProps) => {
  const toastrContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = toastrContainerRef.current;

    if (element) {
      element.style.backgroundColor = COLORS_SCHEME[color];
    }
  }, [color]);

  return (
    <div ref={toastrContainerRef} className="container-toastr">
      <div>{text}</div>
    </div>
  );
};
