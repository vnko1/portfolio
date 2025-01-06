import { UIDType } from "./uid.types";

export interface SectionType extends UIDType {
  title: string;
  description: string;
  secondaryDescription: string | null;
  subText: string | null;
}
