import { connectDB } from '@/lib/db';
import Service, { IService } from '@/models/Service';

export const getAllServices = async (): Promise<IService[]> => {
  await connectDB();
  return await Service.find({}).lean();
};

export const getServiceBySlug = async (slug: string): Promise<IService | null> => {
  await connectDB();
  return await Service.findOne({ slug }).lean();
};