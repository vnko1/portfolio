import { ListType } from "./list.types";
import { StrapiImageType } from "./strapiImage.types";

export interface ProjectType {
  id: number;
  documentId: string;
  banner: StrapiImageType;
  preview: string;
  title: string;
  subTitle: string;
  overview: string;
  liveLink: string;
  codeLink: string | null;
  tools: Array<ListType>;
  order: number | null;
}
