import { ProfileType } from "@/types/profile.types";
import { Api } from "./api";
import { ProjectType } from "@/types/project.types";

export class StrapiApi extends Api {
  constructor() {
    super({
      baseURL: `${
        process.env.BASE_URL || "https://portfiolio-server.onrender.com"
      }/api`,
    });
  }

  getProfile = this.tryCatchWrapper<undefined, ProfileType>(async () => {
    return (await this.instance("profile")).data[0];
  });

  getProject = this.tryCatchWrapper<string, ProjectType>(
    async (slug: string) => {
      return (await this.instance("projects" + "/" + slug)).data;
    }
  );
}
