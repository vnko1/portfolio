"use client";
import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Menu } from "@/components";
import me from "@/lib/data/me.json";

const links = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

const Header: FC = () => {
  const [active, setActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (active) {
      setIsVisible(true);
    }
  }, [active]);

  const toggleMenu = () => {
    if (!active) return setActive(true);
    setIsVisible(false);
    setTimeout(() => {
      setActive(false);
    }, 350);
  };

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo-container">
          <div className="header__logo-img-cont">
            <Image
              src="/me.png"
              alt="Andrii Valenko Logo Image"
              className="header__logo-img"
              width={52}
              height={52}
            />
          </div>
          <span className="header__logo-sub">{me.FULL_NAME}</span>
        </div>
        <nav className="header__main">
          <ul className="header__links">
            {links.map((el, i) => (
              <li key={i} className="header__link-wrapper">
                <Link href={el.href} className="header__link">
                  {el.label}
                </Link>
              </li>
            ))}
          </ul>
          <button className="header__main-ham-menu-cont" onClick={toggleMenu}>
            <Image
              src={active ? "/ham-menu-close.svg" : "/ham-menu.svg"}
              alt={`hamburger menu ${active ? "close" : ""}`}
              width={26}
              height={26}
              className={
                active ? "header__main-ham-menu-close" : "header__main-ham-menu"
              }
            />
          </button>
        </nav>
      </div>
      <Menu links={links} isVisible={isVisible} active={active} />
    </header>
  );
};

export default Header;
