import type {
  ButtonHTMLAttributes,
  ComponentType,
  CSSProperties,
  ReactNode,
  Ref,
} from "react";
import type { IconBaseProps } from "react-icons";

import "./styles.css";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icon?: ComponentType<IconBaseProps>;
  iconStyle?: CSSProperties;
  ref?: Ref<HTMLButtonElement>;
}

export const Button = ({
  children,
  icon,
  iconStyle,
  ref,
  ...props
}: IButtonProps) => {
  const IconComponent = icon;

  return (
    <button ref={ref} {...props}>
      <div className="container-content">
        {children}

        {IconComponent && (
          <IconComponent
            style={{ fontSize: "17", ...(iconStyle && { ...iconStyle }) }}
          />
        )}
      </div>
    </button>
  );
};
