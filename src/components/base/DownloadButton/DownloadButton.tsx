import React from "react";
import Link from "next/link";

interface DownloadButtonProps {
  href: string | null;
  download?: string;
  classNames?: string;
  text?: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  href,
  download = "cv",
  classNames,
  text = "Download CV",
}) => {
  if (!href) return null;
  return (
    <Link
      className={`button flex justify-center ${classNames}`}
      href={href}
      download={download}
      target='_blank'
      rel='noreferrer'
      aria-label='file download link'>
      {text}
    </Link>
  );
};

export default DownloadButton;
