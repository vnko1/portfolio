"use client";
import React from "react";

interface Props {
  classNames?: string;
}
const Menu: React.FC<Props> = ({ classNames }) => {
  return <div className={`xl:hidden ${classNames}`}>Menu</div>;
};

export default Menu;
