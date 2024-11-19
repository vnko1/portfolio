import React, { FC } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isAxiosError } from "axios";

import { StrapiApi } from "@/api/strapiApi";
import Social from "../Social/Social";

const strapi = new StrapiApi();

const Footer: FC = async () => {
  const data = await strapi.getProfile(undefined);

  if (isAxiosError(data) || data instanceof Error) notFound();

  return (
    <footer className="main-footer">
      <div className="main-container">
        <div className="main-footer__upper">
          <div className="main-footer__row main-footer__row-1">
            <h2 className="heading heading-sm main-footer__heading-sm">
              <span>Social</span>
            </h2>
            <ul className="main-footer__social-cont">
              {data.contacts.map((contact) => (
                <li key={contact.id}>
                  <Social
                    link={contact.link}
                    icon={contact.image.url}
                    isFooter
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="main-footer__row main-footer__row-2">
            <h4 className="heading heading-sm text-lt">Andrii Valenko</h4>
            <p className="main-footer__short-desc">{data.footerDescription}</p>
          </div>
        </div>
        <div className="main-footer__lower" id="footer-copy">
          &copy; Copyright 2024. Made by{" "}
          <Link id="footer-copy-link" href="/">
            Andrii Valenko
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
