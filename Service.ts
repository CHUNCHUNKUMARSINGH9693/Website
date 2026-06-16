import mongoose, { Schema, Document } from 'mongoose';

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
  relatedProjects: {
    image: string;
    title: string;
    category: string;
    slug: string;
  }[];
  faq: { question: string; answer: string }[];
}

const ServiceSchema: Schema = new Schema({
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
  relatedProjects: [
    {
      image: String,
      title: String,
      category: String,
      slug: String,
    },
  ],
  faq: [
    {
      question: String,
      answer: String,
    },
  ],
});

export default mongoose.models.Service || mongoose.model<IService>('Service', ServiceSchema);