import React from "react";

const CrossIcon: React.FC = () => (
  <>
    <path
      d='M24 8L8 24'
      className='icon-stroke'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M8 8L24 24'
      className='icon-stroke'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </>
);

export default CrossIcon;
