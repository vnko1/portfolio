import React, { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "cta";
interface ButtonProps
  extends Partial<ButtonHTMLAttributes<HTMLButtonElement>> {
  variant?: Variant;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => {
  const classnames = clsx(className);
  return (
    <button {...props} className={classnames}>
      {children}
    </button>
  );
};

export default Button;
