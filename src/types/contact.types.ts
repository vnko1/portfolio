import { UIDType } from "./uid.types";
import { ContactLink, SocialLink } from "./links.types";

export interface ContactType extends UIDType {
  text: string;
  contact_links: ContactLink[];
  social_links: SocialLink[];
  location: string;
  locationLink: string;
}
