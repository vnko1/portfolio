"use client";
import React, { useActionState } from "react";
import Form from "next/form";
import { AnimatePresence, motion } from "motion/react";

import { sendMessage } from "@/lib";
import { Button } from "@/components";

interface Props {
  tariff?: string;
}

const initialState = {
  name: "",
  email: "",
  message: "",
  tariff: "",
  errors: {
    name: undefined,
    email: undefined,
    tariff: undefined,
    message: undefined,
  },
};

const ContactForm: React.FC<Props> = ({ tariff }) => {
  const [state, formAction, pending] = useActionState(
    sendMessage,
    initialState
  );

  return (
    <div className="2xl:basis-1/2">
      <h3 className="mb-2-xs italic text-md leading-48 font-medium">
        Or, send message
      </h3>
      <Form action={formAction} className="flex flex-col gap-1-lg">
        <label className="label">
          <input
            name="name"
            defaultValue={state.name as string}
            className={`input ${state.errors.name ? "error" : ""}`}
            placeholder="Name"
          />
          <p className={`error-text ${state.errors.name ? "active" : ""}`}>
            {state.errors.name ? state.errors.name[0] : null}
          </p>
        </label>
        <label className="label">
          <input
            name="email"
            defaultValue={state.email as string}
            className={`input ${state.errors.email ? "error" : ""}`}
            placeholder="Email"
          />
          <p className={`error-text ${state.errors.email ? "active" : ""}`}>
            {state.errors.email ? state.errors.email[0] : null}
          </p>
        </label>
        <label className="sr-only">
          <input name="tariff" defaultValue={tariff || ""} hidden />
        </label>
        <label className="label mb-0-xl">
          <textarea
            name="message"
            defaultValue={state.message as string}
            className={`input resize-none ${
              state.errors.message ? "error" : ""
            }`}
            placeholder="Message"
          />
          <p className={`error-text ${state.errors.message ? "active" : ""}`}>
            {state.errors.message ? state.errors.message[0] : null}
          </p>
        </label>
        <Button
          disabled={pending}
          type="submit"
          classNames="self-start min-w-[194px]"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={pending ? "loading" : "send-message"}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.2 }}
            >
              {pending ? "Loading..." : "Send Message"}
            </motion.span>
          </AnimatePresence>
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
