"use server";

const URL = process.env.FORM_URL as string;

export async function submitHandler(formData: FormData) {
  try {
    await fetch(URL, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });
    console.log("Form successfully submitted");
  } catch (error) {
    console.log("🚀 ~ submitHandler ~ error:", error);
  }
}
