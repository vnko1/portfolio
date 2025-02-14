import React from "react";
import Image from "next/image";
import Link from "next/link";

import { IconsEnum, PriceCardType } from "@/types";
import { Icon } from "@/components";

interface Props extends PriceCardType {
  classNames?: string;
  alt?: string;
}

const PriceCard: React.FC<Props> = ({
  classNames,
  tariff,
  icon,
  alt = "tariff icon",
  currency,
  amount,
  billing_system,
  includes,
}) => (
  <div
    className={`flex flex-col px-4-xs py-4-xl bg-light-primary dark:bg-dark-primary ${
      classNames || ""
    }`}
  >
    <h4 className="flex items-center gap-0-xl mb-1-xs text-xs font-semibold leading-18 text-light-light dark:text-dark-light uppercase">
      {tariff}
      {icon && (
        <Image
          src={icon.url}
          alt={alt}
          width={"0"}
          height={"0"}
          className="max-w-2-md w-full"
        />
      )}
    </h4>
    <p className="font-bold text-xs leading-24 text-light-light/[0.8] dark:text-dark-light/[0.8] after:block after:h-[1px] after:mt-1-sm after:mb-2-md after:bg-light-line dark:after:bg-dark-line">
      <span>{currency}</span>
      <span className="text-xl leading-48 text-light-accent-100 dark:text-dark-accent-100">
        {amount}
      </span>
      <span>{billing_system}</span>
    </p>
    <ul className="flex flex-col gap-1-lg mb-4-xs">
      {includes.parseList().map((el, idx) => {
        const isInactive = el.hasChar();
        return (
          <li
            key={idx}
            className={`flex items-center gap-1-sm text-xxs font-semibold text-white leading-24 ${
              isInactive ? "line-through" : ""
            }`}
          >
            <span className="inline-flex justify-center items-center w-[15px] h-[15px] rounded-[50%] border-[1.5px] border-white">
              <Icon size={8.88} icon={IconsEnum.Check} />
            </span>
            {el.replaceChar()}
          </li>
        );
      })}
    </ul>
    <Link
      href={`/contact?tariff=${tariff}`}
      className="inline-flex justify-center items-center px-4-xs py-1-lg rounded-xl border border-white font-semibold leading-20 text-white transition-colors duration-300 hover:bg-white focus:bg-white hover:text-current focus:text-current"
    >
      Buy Now
    </Link>
  </div>
);

export default PriceCard;
