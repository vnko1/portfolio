import { ListType } from "./list.types";
import { StrapiImageType } from "./strapiImage.types";

export interface ProjectType {
  banner: StrapiImageType;
  preview: string;
  title: string;
  subTitle: string;
  overView: string;
  liveLink: string;
  codeLink: string | null;
  tools: Array<ListType>;
  order: number | null;
}
