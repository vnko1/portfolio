"use client";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";

import { FormValues } from "@/types";
import { submitHandler } from "@/lib/actions";

import { schema } from "./schema";
import styles from "./Form.module.scss";

const defaultValues = { name: "", email: "", message: "" };

const Form: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: "onSubmit",
    defaultValues,
  });

  const onHandleSubmit: SubmitHandler<FormValues> = async (data) => {
    const res = await submitHandler(data);
    if (res.ok) {
      reset();
      return toast.success("Your message was sent");
    }
    if (res.errors || res.error)
      return toast.error(res.errors[0].message || res.error);

    return toast.error("Something wrong! Try again never :)");
  };

  return (
    <form
      id="form"
      className="contact__form"
      name="contact"
      onSubmit={handleSubmit(onHandleSubmit)}
    >
      <div className="contact__form-field">
        <label className="contact__form-label" htmlFor="name">
          Name
        </label>
        <input
          {...register("name")}
          placeholder="Enter Your Name"
          type="text"
          className="contact__form-input"
          id="name"
        />
        {errors.name && (
          <p className={styles["error"]}>{errors.name.message}</p>
        )}
      </div>
      <div className="contact__form-field">
        <label className="contact__form-label" htmlFor="email">
          Email
        </label>
        <input
          {...register("email")}
          placeholder="Enter Your Email"
          type="text"
          className="contact__form-input"
          id="email"
        />
        {errors.email && (
          <p className={styles["error"]}>{errors.email.message}</p>
        )}
      </div>
      <div className="contact__form-field">
        <label className="contact__form-label" htmlFor="message">
          Message
        </label>
        <textarea
          {...register("message")}
          cols={30}
          rows={10}
          className="contact__form-input"
          placeholder="Enter Your Message"
          id="message"
        />
        {errors.message && (
          <p className={styles["error"]}>{errors.message.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="btn btn--theme contact__btn"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Lading..." : "Submit"}
      </button>
    </form>
  );
};

export default Form;
