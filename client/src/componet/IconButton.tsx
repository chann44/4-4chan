import { ReactElement, ReactNode } from "react";

interface BtnProps {
  Icon: any;
  isActive?: boolean;
  color?: string;
  children?: ReactNode;
  props?: any;
}

export function IconBtn({
  Icon,
  isActive,
  color,
  children,
  ...props
}: BtnProps) {
  return (
    <button
      className={`icon-btn ${isActive ? "icon-btn-active" : ""} ${color || ""}`}
      {...props}
    >
      <span className={`${children != null ? "mr-1" : ""}`}>
        <Icon />
      </span>
      {children}
    </button>
  );
}
