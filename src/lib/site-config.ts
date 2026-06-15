import type { NavLink, SiteConfig, SocialLink } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Blagweb Agency",
  tagline: "We Build Technology That Drives Business Growth",
  description:
    "Blagweb is a full-service technology and digital marketing agency helping startups, brands, and enterprises grow with modern websites, scalable software, mobile apps, and performance-driven promotions.",
  email: "contact@blagweb.com",
  phone: "+91 7091543135",
  whatsapp: "+917091543135",
  address: "61, Block Road, Jamunia, Narkatiaganj, India 845455",
};

export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks: SocialLink[] = [
  { platform: "linkedin", href: "https://linkedin.com", label: "LinkedIn" },
  { platform: "twitter", href: "https://twitter.com", label: "Twitter" },
  { platform: "github", href: "https://github.com", label: "GitHub" },
];
