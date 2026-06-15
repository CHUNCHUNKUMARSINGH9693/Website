import mongoose, { Schema, type Model } from "mongoose";
import type { TeamMember } from "@/types";

export interface TeamMemberDocument extends Omit<TeamMember, "_id"> {
  _id: mongoose.Types.ObjectId;
}

const teamMemberSchema = new Schema<TeamMemberDocument>(
  {
    name: { type: String, required: true, trim: true },
    role: { type: String, required: true },
    bio: { type: String, required: true },
    image: { type: String },
    linkedin: { type: String },
    twitter: { type: String },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const TeamMemberModel: Model<TeamMemberDocument> =
  mongoose.models.TeamMember ??
  mongoose.model<TeamMemberDocument>("TeamMember", teamMemberSchema);
