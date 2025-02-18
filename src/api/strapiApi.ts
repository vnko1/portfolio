import { CommonType, CVType } from "@/types";
import { strapiApi } from "./instances";

export const strapi = {
  getCommonData: function () {
    return strapiApi.get<{ data: CommonType }>("api/common", {
      params: {
        populate: {
          banner: { fields: ["url"] },
          contact_links: true,
          social_links: { populate: { icon: { fields: ["url"] } } },
        },
      },
    });
  },
  getCV: function () {
    return strapiApi.get<{ data: CVType }>("api/cv", {
      params: {
        populate: {
          cv_doc: true,
        },
      },
    });
  },
};
