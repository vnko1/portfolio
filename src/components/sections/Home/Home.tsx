import React from "react";
import Markdown from "react-markdown";

import { HomeType, IconsEnum } from "@/types";
import { Button } from "@/components";

interface Props extends HomeType {}
const Home: React.FC<Props> = ({ title_md, sub_title, text }) => {
  return (
    <section className="flex flex-col items-start">
      <Markdown
        components={{
          h1(props) {
            return (
              <h1 className="mb-1-xs italic font-medium text-light-primary dark:text-dark-primary">
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
      <p className="mb-4-xl font-extrabold text-xxl leading-82 text-light-primary dark:text-dark-primary">
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
