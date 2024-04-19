"use server";

export async function submitHandler(formData: FormData) {
  try {
    console.log("🚀 ~ submitHandler ~ formData:", formData);
    // await fetch("/", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //   body: formData,
    // });
    console.log("Form successfully submitted");
  } catch (error) {
    console.log("🚀 ~ submitHandler ~ error:", error);
  }
}
