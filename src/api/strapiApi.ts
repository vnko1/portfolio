import { PortfolioType } from "@/types/portfolio.types";
import { Api } from "./api";

export class StrapiApi extends Api {
  constructor() {
    super({
      baseURL: `${process.env.BASE_URL}/api`,
    });
  }

  getProfile = this.tryCatchWrapper<undefined, Array<PortfolioType>>(
    async () => {
      return (
        await this.instance("portfolio", {
          params: {
            populate: {
              avatar: { fields: ["url"] },
              contacts: {
                populate: {
                  lightIcon: { fields: ["url"] },
                  darkIcon: { fields: ["url"] },
                },
              },
              expertise: {
                populate: {
                  lightIcon: { fields: ["url"] },
                  darkIcon: { fields: ["url"] },
                  stackList: true,
                },
              },
              careerHistory: { filters: { isVisible: { $eq: true } } },
              projects: {
                filters: { isVisible: { $eq: true } },
                populate: { banner: { fields: ["url"] } },
              },
            },
          },
        })
      ).data;
    }
  );
}
