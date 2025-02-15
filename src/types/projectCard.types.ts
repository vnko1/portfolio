import { UIDType } from "./uid.types";
import { ImageType } from "./media.types";
import { CategoryType } from "./category.types";

export interface ProjectCardType extends UIDType {
  title: string;
  description: string | null;
  tech_stack: string;
  live_link: string;
  code_link: string | null;
  banner: ImageType;
  category: CategoryType;
}
