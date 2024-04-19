import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

type ProjectProps = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const Project: FC<ProjectProps> = ({ title, description, image, link }) => {
  return (
    <div className="projects__row">
      <div className="projects__row-img-cont">
        <Image
          src={image}
          alt="Software Screenshot"
          className="projects__row-img"
          loading="lazy"
          width={718}
          height={538}
        />
      </div>
      <div className="projects__row-content">
        <h3 className="projects__row-content-title">{title}</h3>
        <p className="projects__row-content-desc">{description}</p>
        <Link href={link} className="btn btn--med btn--theme dynamicBgClr">
          Case Study
        </Link>
      </div>
    </div>
  );
};

export default Project;
