"use client";
import { FC } from "react";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import toast from "react-hot-toast";

import { FormValues } from "@/types/formValues.types";
import { submitHandler } from "@/lib/actions";

import { schema } from "./schema";

const defaultValues = { name: "", email: "", message: "" };

const Form: FC = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
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

    return toast.error("Something wrong! Try again later.");
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>
            Got a project waiting to be realized? Let&apos;s collaborate and
            make it happen!
          </p>
          <Box
            component="form"
            onSubmit={handleSubmit(onHandleSubmit)}
            noValidate
            autoComplete="off"
            className="contact-form"
          >
            <div className="form-flex">
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="outlined-required"
                    label="Your Name"
                    placeholder="What's your name?"
                    error={!!errors.name}
                    helperText={errors.name ? "Please enter your name" : ""}
                  />
                )}
              />
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    // id="outlined-required"
                    label="Email / Phone"
                    placeholder="How can I reach you?"
                    error={!!errors.email}
                    helperText={
                      errors.email
                        ? "Please enter your email or phone number"
                        : ""
                    }
                  />
                )}
              />
            </div>
            <Controller
              name="message"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  // id="outlined-multiline-static"
                  label="Message"
                  placeholder="Send me any inquiries or questions"
                  multiline
                  rows={10}
                  className="body-form"
                  error={!!errors.message}
                  helperText={errors.message ? "Please enter the message" : ""}
                />
              )}
            />
            <Button type="submit" variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Form;
