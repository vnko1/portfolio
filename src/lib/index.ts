import { strapiApi } from "@/api";

export const getCommonData = async () => {
  return Promise.all([strapiApi.getCommonData(), strapiApi.getCVData()]);
};

export const getAboutData = async () => {
  return Promise.all([getCommonData(), strapiApi.getAboutData()]);
};
