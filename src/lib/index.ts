"use server";
import { redirect } from "next/navigation";
import { z } from "zod";

import { strapiApi } from "@/api";
import { cookies } from "next/headers";

export const getCommonData = async () => {
  return Promise.all([strapiApi.getCommonData(), strapiApi.getCVData()]);
};

export const getAboutData = async () => {
  return Promise.all([getCommonData(), strapiApi.getAboutData()]);
};

const schema = z.object({
  name: z
    .string({
      required_error: "Name is required",
    })
    .min(5, { message: "Name is required" }),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "Invalid Email",
    }),
  tariff: z.enum(["basic", "premium", "unlimited", ""]),
  message: z.string().optional(),
});

export const sendMessage = async (_: unknown, formData: FormData) => {
  const cookieStore = await cookies();
  const validatedFields = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    tariff: formData.get("tariff"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  await new Promise((res) => setTimeout(res, 3000));

  console.log("🚀 ~ sendMessage ~ validatedFields:", validatedFields.data);
  cookieStore.set("x-page-access-allowed", "1", { maxAge: 20 });

  redirect("/success");
};
