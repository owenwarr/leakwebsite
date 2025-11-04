import React from 'react';
import { Card } from "@/components/ui/card";

export default function FeatureCard({ icon: Icon, title, description, accent = false }) {
  return (
    <Card className={`p-6 h-full ${accent ? 'border-2 border-[#2CB1A1] bg-gradient-to-br from-white to-[#2CB1A1]/5' : 'border border-gray-200'} hover:shadow-xl transition-all`}>
      <div className="flex flex-col h-full">
        {Icon && (
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
            accent ? 'bg-gradient-to-br from-[#2CB1A1] to-[#0E3A5D]' : 'bg-gray-100'
          }`}>
            <Icon className={`w-6 h-6 ${accent ? 'text-white' : 'text-[#0E3A5D]'}`} />
          </div>
        )}
        <h3 className="text-lg font-bold text-[#0E3A5D] mb-2">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </Card>
  );
}