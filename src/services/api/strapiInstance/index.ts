import { AboutType, CommonType, CVType, HomeType } from "@/types";
import ApiInstance from "../apiInstance";

export default class StrapiInstance extends ApiInstance {
  constructor(baseUrl: RequestInfo | URL, baseInit: RequestInit = {}) {
    super(baseUrl, baseInit);
  }

  getCommonData() {
    const params = this.buildQueryString({
      populate: {
        banner: { fields: ["url"] },
        contact_links: true,
        social_links: { populate: { icon: { fields: ["url"] } } },
      },
    });

    return this.get<{ data: CommonType }>(`api/common?${params}`);
  }

  getCVData() {
    const params = this.buildQueryString({
      populate: {
        cv_doc: true,
      },
    });

    return this.get<{ data: CVType }>(`api/cv?${params}`);
  }

  getHomeData() {
    return this.get<{ data: HomeType }>("api/home");
  }

  getAboutData() {
    const params = this.buildQueryString({
      populate: {
        contact_links: true,
        services: { populate: { icon: { fields: ["url"] } } },
        tariffs: { populate: { icon: { fields: ["url"] } } },
      },
    });

    return this.get<{ data: AboutType }>(`api/about?${params}`);
  }
}
