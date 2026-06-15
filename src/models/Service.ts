import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IService extends Document {
  title: string;
  slug: string;
  icon: string;
  shortDescription: string;
  description: string;
  heroImage: string;
  technologies: string[];
  features: string[];
  process: { step: number; title: string; description: string }[];
  pricing: { plan: string; price: string; description: string; features: string[]; highlight?: boolean }[];
  faq: { question: string; answer: string }[];
}

const ServiceSchema = new Schema<IService>({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  icon: { type: String, required: true },
  shortDescription: { type: String, required: true },
  description: { type: String, required: true },
  heroImage: { type: String, required: true },
  technologies: [{ type: String }],
  features: [{ type: String }],
  process: [
    {
      step: Number,
      title: String,
      description: String,
    },
  ],
  pricing: [
    {
      plan: String,
      price: String,
      description: String,
      features: [String],
      highlight: { type: Boolean, default: false },
    },
  ],
  faq: [
    {
      question: String,
      answer: String,
    },
  ],
});

export const ServiceModel: Model<IService> =
  mongoose.models.Service ??
  mongoose.model<IService>('Service', ServiceSchema);