import { ProfileType } from "@/types/profile.types";
import { Api } from "./api";

export class StrapiApi extends Api {
  constructor() {
    super({ baseURL: `${process.env.BASE_URL}/api` });
  }

  getProfile = this.tryCatchWrapper<undefined, ProfileType>(async () => {
    return (await this.instance("profile")).data[0];
  });
}
