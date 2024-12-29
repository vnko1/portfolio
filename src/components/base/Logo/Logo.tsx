import React from "react";
import Link from "next/link";

interface LogoProps {
  setActive?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Logo: React.FC<LogoProps> = ({ setActive }) => (
  <Link
    onClick={() => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      setActive && setActive(false);
    }}
    href='/'
    className='font-bold leading-md tracking-[-0.48px] text-xl lg:text-h3_lg lg:leading-lg lg:tracking-[-0.6px] text-gl-900 dark:text-gd-900'>
    {"<AV />"}
  </Link>
);

export default Logo;
