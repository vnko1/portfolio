import React from "react";
import Starfield from "react-starfield";

const StarFields: React.FC = () => (
  <Starfield
    starCount={1000}
    starColor={[255, 255, 255]}
    speedFactor={0.05}
    backgroundColor='black'
  />
);

export default StarFields;
