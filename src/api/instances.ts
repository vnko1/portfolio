// export const strapiApi = axios.create({ baseURL: process.env.BASE_URL });

import { StrapiInstance } from "@/services";

export const strapiApi = new StrapiInstance(process.env.BASE_URL as string);
