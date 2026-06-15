import mongoose, { Schema, type Model } from "mongoose";
import type { Project } from "@/types";

export interface ProjectDocument extends Omit<Project, "_id" | "completedAt"> {
  _id: mongoose.Types.ObjectId;
  completedAt?: Date;
}

const projectSchema = new Schema<ProjectDocument>(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true },
    description: { type: String, required: true },
    coverImage: { type: String },
    category: {
      type: String,
      enum: ["web", "mobile", "branding", "ecommerce", "other"],
      required: true,
    },
    client: { type: String },
    technologies: [{ type: String }],
    liveUrl: { type: String },
    featured: { type: Boolean, default: false },
    completedAt: { type: Date },
  },
  { timestamps: true }
);

projectSchema.index({ featured: 1 });

export const ProjectModel: Model<ProjectDocument> =
  mongoose.models.Project ??
  mongoose.model<ProjectDocument>("Project", projectSchema);