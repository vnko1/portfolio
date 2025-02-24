import React from "react";

interface Props {
  tariff?: string;
}
const Contact: React.FC<Props> = () => {
  return (
    <section>
      <h2 className="section-title">
        Let&apos;s <span>Connect</span>
      </h2>
    </section>
  );
};

export default Contact;
