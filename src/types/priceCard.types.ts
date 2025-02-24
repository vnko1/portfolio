import { UIDType } from "./uid.types";
import { ImageType } from "./media.types";

export type TariffType = "basic" | "premium" | "unlimited";

export interface PriceCardType extends UIDType {
  icon: ImageType | null;
  currency: string;
  amount: number;
  billing_system: string | null;
  includes: string;
  tariff: TariffType;
}
