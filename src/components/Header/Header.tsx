"use client";
import React, { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import me from "@/lib/data/me.json";

const links = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

const Header: FC = () => {
  const [activeMenu, setActiveMenu] = useState(false);
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
        <div className="header__main">
          <ul className="header__links">
            {links.map((el, i) => (
              <li key={i} className="header__link-wrapper">
                <Link href={el.href} className="header__link">
                  {el.label}
                </Link>
              </li>
            ))}
          </ul>
          <button
            className="header__main-ham-menu-cont"
            onClick={() => setActiveMenu(!activeMenu)}
          >
            <Image
              src={activeMenu ? "/ham-menu-close.svg" : "/ham-menu.svg"}
              alt={`hamburger menu ${activeMenu ? "close" : ""}`}
              width={26}
              height={26}
              className={
                activeMenu
                  ? "header__main-ham-menu-close"
                  : "header__main-ham-menu"
              }
            />
          </button>
        </div>
      </div>
      <div className="header__sm-menu">
        <div className="header__sm-menu-content">
          <ul className="header__sm-menu-links">
            {links.map((el, i) => (
              <li key={i} className="header__sm-menu-link">
                <Link href={el.href}>{el.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
