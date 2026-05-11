import React from "react";
import StatusBadge from "./StatusBadge";

export default function ViewSubmissionModal({ submission, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4">
      <div className="bg-[#FFFFFF] rounded-2xl shadow-xl w-full max-w-lg p-6">

        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-base font-semibold text-[#1E3A5F]">Submission Details</h2>
          <button onClick={onClose} className="text-[#455F87] hover:text-[#1E3A5F] transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Student Info */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#ebeffb] flex items-center justify-center text-sm font-semibold text-[#0029F5]">
            {submission.studentName.split(" ").map((n) => n[0]).join("")}
          </div>
          <div>
            <p className="text-sm font-semibold text-[#1E3A5F]">{submission.studentName}</p>
            <p className="text-xs text-[#455F87]">{submission.assignmentTitle}</p>
          </div>
          <div className="ml-auto">
            <StatusBadge status={submission.status} />
          </div>
        </div>

        <hr className="my-4 border-[#ebeffb]" />

        {/* Details */}
        <div className="flex flex-col gap-3">
          <div>
            <p className="text-xs text-[#455F87] mb-1">Submission Date</p>
            <p className="text-sm text-[#1E3A5F] font-medium">{submission.submittedAt ?? "—"}</p>
          </div>

          <div>
            <p className="text-xs text-[#455F87] mb-1">Submission Content / Link</p>
            {submission.content ? (
              submission.content.startsWith("http") ? (
                <a href={submission.content} target="_blank" rel="noreferrer" className="text-sm text-[#0029F5] underline break-all">
                  {submission.content}
                </a>
              ) : (
                <p className="text-sm text-[#1E3A5F] bg-[#F4F6FA] rounded-xl px-4 py-3 leading-relaxed">
                  {submission.content}
                </p>
              )
            ) : (
              <p className="text-sm text-[#455F87] italic">No submission yet.</p>
            )}
          </div>

          {submission.grade !== null && (
            <div>
              <p className="text-xs text-[#455F87] mb-1">Grade</p>
              <p className="text-sm font-semibold text-[#0D9488]">{submission.grade} / 100</p>
            </div>
          )}
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full rounded-xl border border-[#ebeffb] py-2.5 text-sm font-medium text-[#455F87] hover:bg-[#F4F6FA] transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}