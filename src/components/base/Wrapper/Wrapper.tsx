import React from "react";
import clsx from "clsx";

type WrapperTagType = "div" | "section" | "header" | "footer";

interface WrapperProps {
  children: React.ReactNode;
  tag?: WrapperTagType;
  classNames?: string;
  accentColor?: boolean;
  id?: string;
  containerClassNames?: string;
}

const Wrapper: React.FC<WrapperProps> = ({
  tag: Tag = "section",
  classNames,
  containerClassNames,
  accentColor = false,
  children,
  id,
}) => (
  <Tag
    id={id}
    className={clsx(
      "w-full mx-auto overflow-hidden",
      Tag === "section"
        ? `py-lg lg:py-xxl ${
            accentColor
              ? "bg-gl-50 dark:bg-gd-50"
              : "bg-gl-0 dark:bg-gd-0"
          }`
        : "",

      classNames
    )}>
    <div className='max-w-[1920px] w-full mx-auto overflow-hidden'>
      <div
        className={clsx(
          "w-full mx-auto overflow-hidden",
          Tag === "section" || Tag === "header"
            ? "max-w-md lg:max-w-sm lg:px-md"
            : "",
          Tag === "header"
            ? "flex justify-between items-center "
            : "",
          Tag === "footer" ? "max-w-lg lg:max-w-sm lg:px-md" : "",
          containerClassNames
        )}>
        {children}
      </div>
    </div>
  </Tag>
);

export default Wrapper;
