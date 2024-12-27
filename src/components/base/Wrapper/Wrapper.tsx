import React from "react";

type WrapperTagType = "div" | "section" | "header" | "footer";

interface WrapperProps {
  children: React.ReactNode;
  tag?: WrapperTagType;
  classNames?: string;
}

const Wrapper: React.FC<WrapperProps> = ({
  tag: Tag = "section",
  classNames,
  children,
}) => {
  return (
    <Tag
      className={`w-full mx-auto overflow-x-hidden py-[10px] md:py-[25px] ${classNames}`}>
      <div className='w-full mx-auto overflow-x-hidden max-w-[88%] lg:max-w-[92%] xl:max-w-[80%]'>
        {children}
      </div>
    </Tag>
  );
};

export default Wrapper;
