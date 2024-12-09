import { StrapiImageType } from "./strapiImage.types";

export interface ProjectType {
  id: number;
  link: string;
  codeLink: string;
  title: string;
  description: string;
  banner: StrapiImageType;
  isVisible: boolean;
}
