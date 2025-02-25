import React from "react";
import Markdown from "react-markdown";

import { strapiApi } from "@/api";
import { IconsEnum } from "@/types";
import { Button } from "@/components";

const Home: React.FC = async () => {
  const {
    data: { title_md, sub_title, text },
  } = await strapiApi.getHomeData();
  return (
    <section className="flex flex-col items-start">
      <Markdown
        components={{
          h1(props) {
            return (
              <h1 className="mb-1-xs italic font-medium text-primary-main">
                {props.children}
              </h1>
            );
          },
          strong(props) {
            return (
              <span className="not-italic font-extrabold">
                {props.children}
              </span>
            );
          },
        }}
      >
        {title_md}
      </Markdown>
      <p className="relative mb-4-xl font-extrabold text-xxl leading-82 text-primary-main after:relative after:bottom-5 after:block after:h-2-xs after:bg-bg-paper/20">
        {sub_title}
      </p>
      <p className="mb-4-xl body text-xs leading-36">{text}</p>
      <div className="flex items-center gap-2-sm">
        <Button classNames="h-[68px]" href="/contact">
          Contact Me
        </Button>
        <Button
          variant="outlined"
          icon={IconsEnum.ArrowDownCircle}
          size={28}
          reverse
          href="/about"
        >
          About Me
        </Button>
      </div>
    </section>
  );
};

export default Home;
