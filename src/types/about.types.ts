import { UIDType } from "./uid.types";
import { ContactLink } from "./links.types";
import { PriceCardType } from "./priceCard.types";
import { ServiceCardType } from "./serviceCard.types";

export interface AboutType extends UIDType {
  description: string;
  age: number;
  contact_links: Array<ContactLink>;
  services: Array<ServiceCardType>;
  tariffs: Array<PriceCardType>;
}
