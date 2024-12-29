import React from "react";
import { links } from "@/utils";
import Link from "next/link";

interface NavigationProps {
  classNames?: string;
}

const Navigation: React.FC<NavigationProps> = ({ classNames }) => {
  return (
    <nav className={classNames}>
      <ul className='flex flex-col gap-1-lg lg:flex-row lg:gap-2-md'>
        {links.map(([label, href]) => (
          <li key={href}>
            <Link
              href={href}
              className='link menu lg:hidden'
              aria-label='navigation link'>
              {label}
            </Link>
            <Link
              href={href}
              className='link hidden lg:inline'
              aria-label='navigation link'>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
