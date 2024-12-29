import React from "react";
import Link from "next/link";

interface DownloadButtonProps {
  href: string;
  download: string;
  classNames?: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  href,
  download,
  classNames,
}) => {
  return (
    <Link
      className={`button flex justify-center ${classNames}`}
      href={href}
      download={download}
      target='_blank'
      rel='noreferrer'>
      Download CV
    </Link>
  );
};

export default DownloadButton;
