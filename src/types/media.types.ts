import { UIDType } from "./uid.types";

export interface ImageType extends UIDType {
  url: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface FileType extends UIDType {}
