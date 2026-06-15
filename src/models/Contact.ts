import mongoose, { Schema, type Model } from "mongoose";
import type { ContactSubmission } from "@/types";

export interface ContactDocument
  extends Omit<ContactSubmission, "_id" | "createdAt"> {
  _id: mongoose.Types.ObjectId;
  createdAt: Date;
}

const contactSchema = new Schema<ContactDocument>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, trim: true },
    subject: { type: String, required: true, trim: true },
    message: { type: String, required: true },
    status: {
      type: String,
      enum: ["new", "read", "replied"],
      default: "new",
    },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

export const ContactModel: Model<ContactDocument> =
  mongoose.models.Contact ??
  mongoose.model<ContactDocument>("Contact", contactSchema);
