import React from "react";
import clsx from "clsx";

type WrapperTagType = "div" | "section" | "header" | "footer";

interface WrapperProps {
  children: React.ReactNode;
  tag?: WrapperTagType;
  classNames?: string;
  accentColor?: boolean;
  id?: string;
}

const Wrapper: React.FC<WrapperProps> = ({
  tag: Tag = "section",
  classNames,
  accentColor = false,
  children,
  id,
}) => (
  <Tag
    id={id}
    className={clsx(
      "w-full mx-auto overflow-x-hidden",
      Tag === "section" ? "py-lg lg:py-xxl" : "",
      Tag === "header" ? "py-xs" : "",
      Tag === "footer" ? "py-sm" : "",
      accentColor ? "bg-gl-50 dark:bg-gd-50" : "bg-gl-0 dark:bg-gd-0",
      classNames
    )}>
    <div
      className={clsx(
        "w-full mx-auto overflow-x-hidden",
        Tag === "section" || Tag === "header"
          ? "max-w-md lg:max-w-sm lg:px-md"
          : "",
        Tag === "header"
          ? "flex justify-between items-center border-b border-b-gl-100 dark:border-b-gd-100"
          : "",
        Tag === "footer" ? "max-w-lg lg:max-w-sm lg:px-md" : ""
      )}>
      {children}
    </div>
  </Tag>
);

export default Wrapper;
