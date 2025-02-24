import { StrapiApiInstance, FormApiInstance } from "@/services";

export const strapiApi = new StrapiApiInstance(process.env.BASE_URL as string);
export const formApi = new FormApiInstance(process.env.FORM_URL as string);
