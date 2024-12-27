import React from "react";
import Starfield from "react-starfield";

interface StarFieldsProps {
  isLight: boolean;
}

const StarFields: React.FC<StarFieldsProps> = ({ isLight }) => {
  if (isLight) return null;
  return (
    <Starfield
      starCount={4000}
      starColor={[255, 255, 255]}
      speedFactor={0.05}
      backgroundColor={"#000"}
    />
  );
};
export default StarFields;
