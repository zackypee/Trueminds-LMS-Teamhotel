import React from "react";
import StatusBadge from "./StatusBadge";

export default function SubmissionsTable({ submissions, onView, onGrade }) {
  return (
    <div className="bg-[#FFFFFF] rounded-2xl shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#ebeffb]">
              {["Student", "Status", "Grade", "Submitted At", "Actions"].map((h, i) => (
                <th
                  key={h}
                  className={`px-5 py-3.5 text-xs font-semibold text-[#455F87] uppercase tracking-wide ${i === 4 ? "text-right" : "text-left"}`}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {submissions.map((sub, i) => (
              <tr
                key={sub.id}
                className={`border-b border-[#ebeffb] transition hover:bg-[#ebeffb] ${i === submissions.length - 1 ? "border-none" : ""}`}
              >
                {/* Student */}
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#ebeffb] flex items-center justify-center text-xs font-semibold text-[#0029F5] shrink-0">
                      {sub.studentName.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <span className="font-medium text-[#1E3A5F]">{sub.studentName}</span>
                  </div>
                </td>

                {/* Status */}
                <td className="px-5 py-4">
                  <StatusBadge status={sub.status} />
                </td>

                {/* Grade */}
                <td className="px-5 py-4 font-medium">
                  {sub.grade !== null
                    ? <span className="text-[#0D9488]">{sub.grade} / 100</span>
                    : <span className="text-[#455F87]">—</span>
                  }
                </td>

                {/* Date */}
                <td className="px-5 py-4 text-[#455F87]">
                  {sub.submittedAt ?? "—"}
                </td>

                {/* Actions */}
                <td className="px-5 py-4">
                  <div className="flex items-center justify-end gap-2">
                    {sub.status !== "Not Submitted" && (
                      <button
                        onClick={() => onView(sub)}
                        className="text-xs font-medium text-[#0029F5] px-3 py-1.5 rounded-lg border border-[#0029F5] hover:bg-[#ebeffb] transition"
                      >
                        View
                      </button>
                    )}
                    {sub.status !== "Not Submitted" && (
                      <button
                        onClick={() => onGrade(sub)}
                        className="text-xs font-medium text-[#FFFFFF] bg-[#0029F5] px-3 py-1.5 rounded-lg hover:bg-[#1E3A5F] transition"
                      >
                        {sub.status === "Graded" ? "Re-grade" : "Grade"}
                      </button>
                    )}
                    {sub.status === "Not Submitted" && (
                      <span className="text-xs text-[#455F87] italic">No action</span>
                    )}
                  </div>
                </td>
              </tr>
            ))}

            {submissions.length === 0 && (
              <tr>
                <td colSpan={5} className="px-5 py-10 text-center text-sm text-[#455F87]">
                  No submissions match this filter.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}