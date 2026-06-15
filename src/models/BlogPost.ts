import mongoose, { Schema, type Model } from "mongoose";
import type { BlogPost } from "@/types";

export interface BlogPostDocument extends Omit<BlogPost, "_id" | "publishedAt" | "updatedAt"> {
  _id: mongoose.Types.ObjectId;
  publishedAt: Date;
  updatedAt: Date;
}

const blogPostSchema = new Schema<BlogPostDocument>(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    coverImage: { type: String },
    author: { type: String, required: true },
    tags: [{ type: String }],
    published: { type: Boolean, default: false },
    publishedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

blogPostSchema.index({ published: 1, publishedAt: -1 });

export const BlogPostModel: Model<BlogPostDocument> =
  mongoose.models.BlogPost ??
  mongoose.model<BlogPostDocument>("BlogPost", blogPostSchema);
