import React from "react";
import Link from "next/link";

interface DownloadButtonProps {
  href: string | null;
  download?: string;
  classNames?: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  href,
  download = "cv",
  classNames,
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
      Download CV
    </Link>
  );
};

export default DownloadButton;
