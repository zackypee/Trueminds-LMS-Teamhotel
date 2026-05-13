import React from "react";

const statusStyles = {
  Submitted: {
    bg: "bg-[#ebeffb]",
    text: "text-[#0029F5]",
    dot: "bg-[#0029F5]",
  },
  Graded: {
    bg: "bg-[#CCEFED]",
    text: "text-[#0D9488]",
    dot: "bg-[#0D9488]",
  },
  "Not Submitted": {
    bg: "bg-[#FDEBD9]",
    text: "text-[#E8651A]",
    dot: "bg-[#E8651A]",
  },
};

export default function StatusBadge({ status }) {
  const s = statusStyles[status];
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${s.bg} ${s.text}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
      {status}
    </span>
  );
}