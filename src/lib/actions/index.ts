"use server";

import { FormValues } from "@/types";

const URL = process.env.FORM_URL as string;

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
