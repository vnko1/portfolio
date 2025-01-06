import ApiInstance from "./apiInstance";

export const strapiApi = new ApiInstance(
  process.env.BASE_URL as string
);
