import { ImageType } from "./media.types";
import { ContactLink, SocialLink } from "./links.types";

export interface CommonType {
  banner: ImageType;
  full_name: string;
  role: string;
  city: string;
  copyright_text: string;
  contact_links: Array<ContactLink>;
  social_links: Array<SocialLink>;
}
