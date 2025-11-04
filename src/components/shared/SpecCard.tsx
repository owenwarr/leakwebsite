import React from 'react';
import { Card } from "@/components/ui/card";

export default function SpecCard({ icon: Icon, label, value, className = "" }) {
  return (
    <Card className={`p-4 border-2 border-gray-200 hover:border-[#2CB1A1] transition-all hover:shadow-lg ${className}`}>
      <div className="flex items-start gap-3">
        {Icon && (
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0E3A5D] to-[#2CB1A1] flex items-center justify-center flex-shrink-0">
            <Icon className="w-5 h-5 text-white" />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
            {label}
          </div>
          <div className="text-sm font-semibold text-[#0E3A5D] break-words">
            {value}
          </div>
        </div>
      </div>
    </Card>
  );
}