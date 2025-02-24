import React from "react";

import { strapiApi } from "@/api";
import { Contacts, ContactForm } from "./components";

interface Props {
  tariff?: string;
}
const Contact: React.FC<Props> = async ({ tariff }) => {
  const res = await strapiApi.getContact();

  return (
    <section>
      <h2 className="section-title mb-4-xs">
        Let&apos;s <span>Connect</span>
      </h2>
      <div className="flex flex-col gap-3-xs 2xl:flex-row 2xl:justify-between">
        <Contacts {...res.data} />
        <ContactForm tariff={tariff} />
      </div>
    </section>
  );
};

export default Contact;
