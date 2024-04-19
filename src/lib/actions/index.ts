"use server";

const URL = process.env.FORM_URL as string;

export async function submitHandler(formData: FormData) {
  try {
    const res = await fetch(URL, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    return await res.json();
  } catch (error) {
    return error;
  }
}
