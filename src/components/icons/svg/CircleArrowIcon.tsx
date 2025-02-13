import React from "react";

const CircleArrowIcon: React.FC = () => {
  return (
    <>
      <rect
        x="0.5"
        y="0.5"
        width="31"
        height="31"
        rx="15.5"
        stroke="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.256 15.3772L16.6435 12.7647L17.7042 11.704L21.7179 15.7177L22.2482 16.2481L21.7179 16.7784L17.7042 20.7921L16.6435 19.7314L19.4977 16.8772L10.6234 16.8772L10.6234 15.3772H19.256Z"
        fill="currentColor"
      />
    </>
  );
};

export default CircleArrowIcon;
