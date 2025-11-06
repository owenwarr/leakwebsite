import React from "react";
import { Card } from "@/components/ui/card";

type Props = {
  name: string;
  role: string;
  email: string;
  /** e.g. "/dustin.png" — file should live in /public (not src/public) */
  photoSrc?: string;
};

function getInitials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase() ?? "")
    .join("");
}

export default function TeamMemberCard({ name, role, email, photoSrc }: Props) {
  // null = unknown yet, true = image OK, false = image failed or not provided
  const [imgOk, setImgOk] = React.useState<boolean | null>(photoSrc ? null : false);

  return (
    <Card className="p-6 border-2 border-gray-200 hover:border-[#2CB1A1] transition-all">
      <div className="flex flex-col items-center text-center gap-4">
        <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-gray-200 bg-gray-100 flex items-center justify-center">
          {photoSrc && imgOk !== false ? (
            <img
              src={photoSrc}
              alt={`${name} headshot`}
              className="w-full h-full object-cover"
              onLoad={() => setImgOk(true)}
              onError={() => setImgOk(false)}
            />
          ) : (
            <span className="text-xl font-semibold text-[#0E3A5D]">
              {getInitials(name)}
            </span>
          )}
        </div>

        <div>
          <h3 className="text-lg font-bold text-[#0E3A5D]">{name}</h3>
          <p className="text-sm text-gray-600">{role}</p>
          <a
            href={`mailto:${email}`}
            className="text-sm text-[#0E3A5D] underline break-all"
          >
            {email}
          </a>
        </div>
      </div>
    </Card>
  );
}
