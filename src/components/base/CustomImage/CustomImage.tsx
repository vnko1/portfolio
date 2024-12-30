import { FC } from "react";
import Image, { ImageProps } from "next/image";

const CustomImage: FC<ImageProps> = ({ alt, src, ...props }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={"0"}
      height={"0"}
      sizes='100%'
      {...props}
    />
  );
};

export default CustomImage;
