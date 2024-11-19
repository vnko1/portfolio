"use server";

import { isAxiosError } from "axios";
import { notFound } from "next/navigation";
import { FormValues } from "@/types";
import { StrapiApi } from "@/api/strapiApi";

const URL = process.env.FORM_URL as string;
const strapi = new StrapiApi();

export async function submitHandler(values: FormValues) {
  try {
    const res = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        Accept: "application/json",
      },
    });

    return await res.json();
  } catch (error) {
    return error;
  }
}

export async function getProfile() {
  const data = await strapi.getProfile(undefined);

  if (isAxiosError(data) || data instanceof Error) notFound();
  return data;
}
