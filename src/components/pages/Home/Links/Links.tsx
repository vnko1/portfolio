"use client";

import React from "react";
import { Button } from "@/components";
import { IconsEnum } from "@/types";
import { sleep } from "@/utils";
import { useRouter } from "next/router";

const Links: React.FC = () => {
  const { push } = useRouter();
  const handleClick = async (href: string) => {
    return async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();

      const section = document.querySelector(".page");
      section?.classList.add("page-transition");
      await sleep(500);
      push(href as string);
      await sleep(500);
      section?.classList.remove("page-transition");
    };
  };

  return (
    <div className="flex items-center gap-2-sm">
      <Button classNames="h-[68px]" onClick={handleClick("/contact")}>
        Contact Me
      </Button>
      <Button
        variant="outlined"
        icon={IconsEnum.ArrowDownCircle}
        size={28}
        reverse
        onClick={handleClick("/about")}
      >
        About Me
      </Button>
    </div>
  );
};

export default Links;
