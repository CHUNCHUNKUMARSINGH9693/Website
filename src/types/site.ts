export interface NavLink {

  label: string;

  href: string;

  hasDropdown?: boolean;

}



export interface ServiceMenuItem {

  title: string;

  description: string;

  href: string;

  icon: "globe" | "code" | "mobile" | "devops" | "seo" | "ads";

}



export interface SocialLink {

  platform: string;

  href: string;

  label: string;

}



export interface SiteConfig {

  name: string;

  tagline: string;

  description: string;

  email: string;

  phone?: string;

  whatsapp?: string;

  address?: string;

}

