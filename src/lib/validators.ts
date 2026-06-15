import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  phone: z.string().max(20).optional(),
  subject: z.string().min(3, "Subject must be at least 3 characters").max(200),
  message: z.string().min(10, "Message must be at least 10 characters").max(5000),
});

export const blogPostSchema = z.object({
  title: z.string().min(3).max(200),
  slug: z
    .string()
    .min(3)
    .max(200)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must be lowercase with hyphens"),
  excerpt: z.string().min(10).max(500),
  content: z.string().min(50),
  coverImage: z.string().url().optional().or(z.literal("")),
  author: z.string().min(2).max(100),
  tags: z.array(z.string()).optional(),
  published: z.boolean().optional(),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
export type BlogPostInput = z.infer<typeof blogPostSchema>;
