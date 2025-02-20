import React from "react";
import Markdown from "react-markdown";

import { HomeType } from "@/types";

interface Props extends HomeType {}
const Home: React.FC<Props> = ({ title_md }) => {
  return (
    <section className="flex flex-col items-center">
      <Markdown />
    </section>
  );
};

export default Home;
