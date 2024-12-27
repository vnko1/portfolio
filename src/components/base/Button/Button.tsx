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
  variant = "primary",
  fullWidth = false,
  className,
  ...props
}) => {
  const classnames = clsx(
    "inline-flex items-center justify-center p-2.5 text-md rounded-xl transition-all duration-300",
    fullWidth ? "w-full" : "w-[202px]",
    variant === "primary"
      ? "bg-dark text-light  hover:bg-light hover:text-dark border hover:border-dark"
      : "",
    className
  );
  return (
    <button {...props} className={classnames}>
      {children}
    </button>
  );
};

export default Button;
