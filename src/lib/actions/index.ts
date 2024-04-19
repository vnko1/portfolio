"use server";

export async function submitHandler(formData: FormData) {
  try {
    const params = new URLSearchParams();
    formData.forEach((value, key) => {
      params.append(key, value.toString());
    });
    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });
    console.log("Form successfully submitted");
  } catch (error) {
    console.log("🚀 ~ submitHandler ~ error:", error);
  }
}
