import React from "react";
import Markdown from "react-markdown";

import { HomeType } from "@/types";
import { Links } from "./components";

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
      <p className="relative mb-4-xl font-extrabold text-xxl leading-82 text-light-primary dark:text-dark-primary after:relative after:bottom-5 after:block after:h-2-xs after:bg-light-secondary/20 dark:after:bg-dark-secondary/20">
        {sub_title}
      </p>
      <p className="mb-4-xl body text-xs leading-36">{text}</p>
      <Links />
    </section>
  );
};

export default Home;
