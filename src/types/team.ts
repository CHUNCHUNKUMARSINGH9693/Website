export interface TeamMember {
  _id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
  order: number;
  featured?: boolean;
}
