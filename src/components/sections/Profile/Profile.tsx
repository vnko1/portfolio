import React from "react";
import Image from "next/image";

import { CommonType } from "@/types";

interface Props extends CommonType {}

const Profile: React.FC<CommonType> = ({ banner }) => {
  return (
    <section className="bg-light-secondary dark:bg-dark-secondary">
      <div className="relative pl-2-xs pt-2-xs">
        <Image src={banner.url} fill />
      </div>
    </section>
  );
};

export default Profile;
