"use server";

import { notFound } from "next/navigation";
import { isAxiosError } from "axios";

import { FormValues } from "@/types/formValues.types";
import { StrapiApi } from "@/api/strapiApi";

const URL = process.env.FORM_URL || "https://formspree.io/f/xoqgyega";
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

export async function getProject(slug: string) {
  const data = await strapi.getProject(slug);

  if (isAxiosError(data) || data instanceof Error) notFound();
  return data;
}
