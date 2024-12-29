"use client";

import React, { useState } from "react";
import { Wrapper, Menu } from "@/components";

const Header: React.FC = () => {
  const [active, setActive] = useState(false);
  return (
    <Wrapper
      tag='header'
      classNames='relative overflow-hidden'
      id='header'>
      <button onClick={() => setActive(true)}>OPEN</button>
      <Menu setActive={setActive} active={active} />
    </Wrapper>
  );
};

export default Header;
