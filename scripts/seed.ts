/**
 * Seed script — run with: npx tsx scripts/seed.ts
 * Requires MONGODB_URI in .env.local (load via dotenv if needed)
 */
import mongoose from "mongoose";
import { BlogPostModel, ProjectModel, ServiceModel, TeamMemberModel } from "../src/models";

const MONGODB_URI = process.env.MONGODB_URI ?? "mongodb://localhost:27017/blagweb";

async function seed() {
  await mongoose.connect(MONGODB_URI);
  console.log("Connected to MongoDB");

  await Promise.all([
    ServiceModel.deleteMany({}),
    ProjectModel.deleteMany({}),
    TeamMemberModel.deleteMany({}),
    BlogPostModel.deleteMany({}),
  ]);

  await ServiceModel.insertMany([
    {
      title: "Web Development",
      slug: "web-development",
      description: "Custom websites and web applications.",
      icon: "code",
      category: "development",
      features: ["Next.js", "APIs", "Performance"],
      order: 1,
    },
  ]);

  await ProjectModel.insertMany([
    {
      title: "Commerce Platform",
      slug: "commerce-platform",
      description: "E-commerce with real-time inventory.",
      category: "ecommerce",
      technologies: ["Next.js", "MongoDB"],
      featured: true,
      client: "Retail Co",
    },
  ]);

  await TeamMemberModel.insertMany([
    {
      name: "Alex Morgan",
      role: "Founder & CEO",
      bio: "15+ years in digital products.",
      order: 1,
    },
  ]);

  await BlogPostModel.insertMany([
    {
      title: "Why Next.js 15",
      slug: "why-nextjs-15",
      excerpt: "App Router and Server Components explained.",
      content: "<p>Next.js 15 brings powerful defaults for modern apps.</p>",
      author: "Blagweb Team",
      tags: ["nextjs"],
      published: true,
      publishedAt: new Date(),
    },
  ]);

  console.log("Seed complete");
  await mongoose.disconnect();
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
