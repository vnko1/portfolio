import * as yup from "yup";

export const schema = yup
  .object({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .test(
        "email-or-phone",
        "Enter a valid email or phone number",
        (value) => {
          if (!value) return false;

          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          const phoneRegex = /^\+?[1-9]\d{1,14}$/; // E.164 format

          return emailRegex.test(value) || phoneRegex.test(value);
        }
      )
      .required("Email or phone number is required"),
    message: yup.string(),
  })
  .required();
