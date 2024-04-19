import Link from "next/link";
import React, { FC } from "react";

import me from "@/lib/data/me.json";
import socials from "@/lib/data/socials.json";
import Social from "../Social/Social";

const Footer: FC = () => {
  return (
    <footer className="main-footer">
      <div className="main-container">
        <div className="main-footer__upper">
          <div className="main-footer__row main-footer__row-1">
            <h2 className="heading heading-sm main-footer__heading-sm">
              <span>Social</span>
            </h2>
            <ul className="main-footer__social-cont">
              {socials.map((el, i) => (
                <li key={i}>
                  <Social link={el.link} icon={el.icon} isFooter />
                </li>
              ))}
            </ul>
          </div>
          <div className="main-footer__row main-footer__row-2">
            <h4 className="heading heading-sm text-lt">{me.FULL_NAME}</h4>
            <p className="main-footer__short-desc">{me.FOOTER_DESCR}</p>
          </div>
        </div>
        <div className="main-footer__lower" id="footer-copy">
          &copy; Copyright 2024. Made by
          <Link id="footer-copy-link" href="/">
            Andrii Valenko
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
