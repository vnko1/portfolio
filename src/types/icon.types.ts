import React from "react";

export interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: 32 | 24 | 16;
}

export enum IconsEnum {
  Burger = "burger",
  ClipBoard = "clipboard",
  Copyright = "copyright",
  Cross = "cross",
  Github = "github",
  Letter = "letter",
  Location = "location",
  Moon = "moon",
  Navigation = "navigation",
  Phone = "phone",
  Sun = "sun",
}
