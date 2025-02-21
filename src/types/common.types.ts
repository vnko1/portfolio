import { UIDType } from "./uid.types";
import { ImageType } from "./media.types";
import { ContactLink, SocialLink } from "./links.types";

export interface CommonType extends UIDType {
  banner: ImageType;
  first_name: string;
  last_name: string;
  role: string;
  city: string;
  location: string;
  copyright_text: string | null;
  contact_links: Array<ContactLink>;
  social_links: Array<SocialLink>;
}
