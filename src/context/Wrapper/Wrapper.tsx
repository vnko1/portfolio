import React from "react";

import "@/styles/globals.css";

interface Props extends React.PropsWithChildren {}
const Wrapper: React.FC<Props> = ({ children }) => {
  return children;
};

export default Wrapper;
