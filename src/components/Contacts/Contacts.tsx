"use client";
import { submitHandler } from "@/lib/actions";
import { ChangeEvent, FC, FormEvent, useRef, useState } from "react";
import { useFormStatus } from "react-dom";

const Contacts: FC = () => {
  const [state, setState] = useState({ name: "", email: "", message: "" });
  const { pending } = useFormStatus();
  const ref = useRef<HTMLFormElement>(null);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setState((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitHandler(state);
    ref.current?.reset();
  };

  return (
    <div className="main-container">
      <h2 className="heading heading-sec heading-sec__mb-med">
        <span className="heading-sec__main heading-sec__main--lt">Contact</span>
        <span className="heading-sec__sub heading-sec__sub--lt">Write me!</span>
      </h2>
      <div className="contact__form-container">
        <form
          ref={ref}
          id="form"
          onSubmit={onSubmit}
          className="contact__form"
          data-netlify="true"
        >
          <div className="contact__form-field">
            <label className="contact__form-label" htmlFor="name">
              Name
            </label>
            <input
              onChange={handleChange}
              required
              placeholder="Enter Your Name"
              type="text"
              className="contact__form-input"
              name="name"
              id="name"
            />
          </div>
          <div className="contact__form-field">
            <label className="contact__form-label" htmlFor="email">
              Email
            </label>
            <input
              onChange={handleChange}
              required
              placeholder="Enter Your Email"
              type="text"
              className="contact__form-input"
              name="email"
              id="email"
            />
          </div>
          <div className="contact__form-field">
            <label className="contact__form-label" htmlFor="message">
              Message
            </label>
            <textarea
              onChange={handleChange}
              required
              cols={30}
              rows={10}
              className="contact__form-input"
              placeholder="Enter Your Message"
              name="message"
              id="message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn--theme contact__btn"
            disabled={pending}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
