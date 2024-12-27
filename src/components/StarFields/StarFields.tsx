"use client";
import { useThemeProvider } from "@/hooks";
import React from "react";
import Starfield from "react-starfield";

const StarFields: React.FC = () => {
  const { theme } = useThemeProvider();
  const dark = theme === "dark";
  return (
    <Starfield
      starCount={4000}
      starColor={dark ? [255, 255, 255] : [0, 0, 0]}
      speedFactor={0.05}
      backgroundColor={dark ? "#000" : "#fff"}
    />
  );
};
export default StarFields;
