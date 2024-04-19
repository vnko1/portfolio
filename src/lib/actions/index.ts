"use server";

export async function submitHandler(formData: FormData) {
  try {
    await fetch("https://formspree.io/f/xoqgyega", {
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
