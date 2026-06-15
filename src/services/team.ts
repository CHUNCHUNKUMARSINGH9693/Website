import { connectDB } from "@/lib/mongodb";
import { fallbackTeam } from "@/lib/data/fallback";
import { TeamMemberModel } from "@/models";
import type { TeamMember } from "@/types";

export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    await connectDB();
    const members = await TeamMemberModel.find().sort({ order: 1 }).lean();
    if (members.length === 0) return fallbackTeam;
    return members.map((m) => ({
      _id: m._id.toString(),
      name: m.name,
      role: m.role,
      bio: m.bio,
      image: m.image,
      linkedin: m.linkedin,
      twitter: m.twitter,
      email: m.email,
      order: m.order,
    }));
  } catch {
    return fallbackTeam;
  }
}
