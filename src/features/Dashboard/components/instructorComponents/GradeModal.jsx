import React, { useState } from "react";

export default function GradeModal({ submission, onClose, onSubmitGrade }) {
  const [grade, setGrade] = useState(submission.grade ?? "");
  const [feedback, setFeedback] = useState("");

  const inputClass = "w-full bg-[#F3F5F8] rounded-xl px-4 py-3 text-sm text-[#1E3A5F] border border-transparent focus:outline-none focus:ring-2 focus:ring-[#0029F5] focus:bg-[#FFFFFF] transition placeholder:text-[#455F87]";
  const labelClass = "block text-xs font-medium text-[#455F87] mb-1.5";

  const handleSubmit = () => {
    if (grade === "" || isNaN(grade) || grade < 0 || grade > 100) return;
    onSubmitGrade(submission.id, Number(grade), feedback);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4">
      <div className="bg-[#FFFFFF] rounded-2xl shadow-xl w-full max-w-md p-6">

        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-base font-semibold text-[#1E3A5F]">Grade Submission</h2>
          <button onClick={onClose} className="text-[#455F87] hover:text-[#1E3A5F] transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Student Info */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-full bg-[#ebeffb] flex items-center justify-center text-sm font-semibold text-[#0029F5]">
            {submission.studentName.split(" ").map((n) => n[0]).join("")}
          </div>
          <div>
            <p className="text-sm font-semibold text-[#1E3A5F]">{submission.studentName}</p>
            <p className="text-xs text-[#455F87]">{submission.assignmentTitle}</p>
          </div>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-4">
          <div>
            <label className={labelClass}>Grade (0 – 100)</label>
            <input
              type="number"
              min={0}
              max={100}
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              placeholder="e.g. 85"
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Feedback (optional)</label>
            <textarea
              rows={3}
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Leave a note for the student..."
              className={`${inputClass} resize-none`}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-6">
          <button
            onClick={onClose}
            className="flex-1 rounded-xl border border-[#ebeffb] py-2.5 text-sm font-medium text-[#455F87] hover:bg-[#F4F6FA] transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={grade === "" || isNaN(grade)}
            className="flex-1 bg-[#0029F5] hover:bg-[#1E3A5F] text-[#FFFFFF] rounded-xl py-2.5 text-sm font-semibold transition disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Submit Grade
          </button>
        </div>
      </div>
    </div>
  );
}