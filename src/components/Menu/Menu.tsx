import React, { FC } from "react";
import Link from "next/link";
import cn from "classnames";
type MenuProps = {
  links: { href: string; label: string }[];
  active: boolean;
  isVisible: boolean;
};

const Menu: FC<MenuProps> = ({ links, active, isVisible }) => {
  const menuClassNames = cn("header__sm-menu", {
    ["header__sm-menu--active"]: isVisible,
  });

  if (!active) return null;
  return (
    <div className={menuClassNames}>
      <nav className="header__sm-menu-content">
        <ul className="header__sm-menu-links">
          {links.map((el, i) => (
            <li key={i} className="header__sm-menu-link">
              <Link href={el.href}>{el.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
