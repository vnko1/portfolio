
import { FC } from "react";

import { Toaster } from "react-hot-toast";
import { Form } from "@/components";

const Contacts: FC = () => {
  return (
    <div className="main-container">
      <h2 className="heading heading-sec heading-sec__mb-med">
        <span className="heading-sec__main heading-sec__main--lt">Contact</span>
        <span className="heading-sec__sub heading-sec__sub--lt">Write me!</span>
      </h2>
      <div className="contact__form-container">
        <Form />
        <Toaster
          position="top-right"
          toastOptions={{ style: { fontSize: "20px" } }}
        />
      </div>
    </div>
  );
};

export default Contacts;
