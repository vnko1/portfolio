"use server";

const encode = (data: { [key: string]: string }) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

type FormValues = { name: string; email: string; message: string };

export async function submitHandler(formValues: FormValues) {
  try {
    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formValues }),
    });
    console.log("Form successfully submitted");
  } catch (error) {
    console.log("🚀 ~ submitHandler ~ error:", error);
  }
}
