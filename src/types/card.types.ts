import { ImageType } from "./media.types";
import { UIDType } from "./uid.types";

export interface CardType extends UIDType {
  title: string;
  liveLink: string;
  codeLink: string | null;
  techStack: string;
  banner: ImageType;
}
