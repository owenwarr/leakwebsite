import React from 'react';
import { Card } from "@/components/ui/card";
import { Mail } from "lucide-react";

export default function TeamMemberCard({ name, role, email }) {
  return (
    <Card className="p-6 border-2 border-gray-200 hover:border-[#2CB1A1] transition-all hover:shadow-lg">
      <div className="flex flex-col items-center text-center">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0E3A5D] to-[#2CB1A1] flex items-center justify-center mb-4">
          <span className="text-2xl font-bold text-white">
            {name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <h3 className="text-lg font-bold text-[#0E3A5D] mb-1">{name}</h3>
        <p className="text-sm text-gray-600 mb-3">{role}</p>
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center gap-2 text-sm text-[#2CB1A1] hover:text-[#0E3A5D] transition-colors"
        >
          <Mail className="w-4 h-4" />
          {email}
        </a>
      </div>
    </Card>
  );
}