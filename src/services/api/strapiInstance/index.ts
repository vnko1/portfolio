import {
  AboutType,
  CategoryType,
  CommonType,
  CVType,
  HomeType,
  ProjectCardType,
  ResumeType,
} from "@/types";
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
        services: { populate: { icon: { fields: ["url"] } } },
        tariffs: { populate: { icon: { fields: ["url"] } } },
      },
    });

    return this.get<{ data: Omit<AboutType, "contact_links"> }>(
      `api/about?${params}`
    );
  }

  getResumeData() {
    const params = this.buildQueryString({
      populate: {
        experience: true,
        skills: { populate: { icon: { fields: ["url"] } } },
        reviews: { populate: { avatar: { fields: ["url"] } } },
        clients: { populate: { logo: { fields: ["url"] } } },
      },
    });
    return this.get<{ data: ResumeType }>(`api/resume?${params}`);
  }

  getCategories() {
    return this.get<{ data: CategoryType[] }>("api/categories");
  }

  getPortfolio(query?: string) {
    const params = this.buildQueryString({
      populate: {
        banner: { fields: ["url", "name"] },
        category: true,
      },
      filters: query ? { category: { category: { $eqi: query } } } : {},
    });

    return this.get<{ data: ProjectCardType[] }>(`api/projects?${params}`);
  }
}
