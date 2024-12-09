import { StrapiImageType } from "./strapiImage.types";

export interface ProjectType {
  id: number;
  liveLink: string;
  codeLink: string | null;
  title: string;
  description: string;
  banner: StrapiImageType;
  isVisible: boolean;
  role: string | null;
}
