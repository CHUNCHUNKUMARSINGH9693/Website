import type { TeamMember } from "@/types";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui";

interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <Card className="text-center">
      <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-brand-100 text-3xl font-bold text-brand-700">
        {member.name.charAt(0)}
      </div>
      <CardHeader>
        <CardTitle>{member.name}</CardTitle>
        <p className="text-sm font-medium text-brand-600">{member.role}</p>
        <CardDescription>{member.bio}</CardDescription>
      </CardHeader>
      {(member.linkedin || member.twitter) && (
        <div className="mt-4 flex justify-center gap-4">
          {member.linkedin && (
            <a href={member.linkedin} className="text-sm text-gray-600 hover:text-brand-600">
              LinkedIn
            </a>
          )}
          {member.twitter && (
            <a href={member.twitter} className="text-sm text-gray-600 hover:text-brand-600">
              Twitter
            </a>
          )}
        </div>
      )}
    </Card>
  );
}
