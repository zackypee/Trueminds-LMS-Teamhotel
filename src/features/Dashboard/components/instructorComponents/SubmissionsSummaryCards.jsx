import React from "react";

export default function SubmissionsSummaryCards({ counts }) {
  const cards = [
    { label: "Total Students", value: counts.All, color: "text-[#1E3A5F]" },
    { label: "Submitted", value: counts.Submitted, color: "text-[#0029F5]" },
    { label: "Graded", value: counts.Graded, color: "text-[#0D9488]" },
    { label: "Not Submitted", value: counts["Not Submitted"], color: "text-[#E8651A]" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
      {cards.map(({ label, value, color }) => (
        <div key={label} className="bg-[#FFFFFF] rounded-2xl px-4 py-4 shadow-sm">
          <p className="text-xs text-[#455F87] mb-1">{label}</p>
          <p className={`text-2xl font-bold ${color}`}>{value}</p>
        </div>
      ))}
    </div>
  );
}