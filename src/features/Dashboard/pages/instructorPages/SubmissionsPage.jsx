import React, { useState } from "react";
import SubmissionsSummaryCards from "../../components/instructorComponents/SubmissionsSummaryCards";
import SubmissionsTable from "../../components/instructorComponents/SubmissionsTable"
import ViewSubmissionModal from "../../components/instructorComponents/ViewSubmissionModal"
import GradeModal from "../../components/instructorComponents/GradeModal"

const MOCK_SUBMISSIONS = [
  { id: 1, studentName: "Amara Okafor", assignmentTitle: "UI Wireframe Task", status: "Submitted", grade: null, submittedAt: "2025-05-08 10:32 AM", content: "https://figma.com/file/amara-wireframe-submission" },
  { id: 2, studentName: "Chidi Nwosu", assignmentTitle: "UI Wireframe Task", status: "Graded", grade: 87, submittedAt: "2025-05-07 03:15 PM", content: "https://drive.google.com/file/chidi-submission" },
  { id: 3, studentName: "Fatima Bello", assignmentTitle: "UI Wireframe Task", status: "Not Submitted", grade: null, submittedAt: null, content: null },
  { id: 4, studentName: "Emeka Eze", assignmentTitle: "UI Wireframe Task", status: "Submitted", grade: null, submittedAt: "2025-05-09 08:45 AM", content: "Completed the wireframes for the onboarding flow using Figma. All 5 screens included." },
  { id: 5, studentName: "Ngozi Adeyemi", assignmentTitle: "UI Wireframe Task", status: "Graded", grade: 92, submittedAt: "2025-05-06 11:00 AM", content: "https://behance.net/ngozi-wireframe-task" },
  { id: 6, studentName: "Tunde Salami", assignmentTitle: "UI Wireframe Task", status: "Not Submitted", grade: null, submittedAt: null, content: null },
];

const STATUSES = ["All", "Submitted", "Graded", "Not Submitted"];

export default function SubmissionsPage() {
  const [submissions, setSubmissions] = useState(MOCK_SUBMISSIONS);
  const [filterStatus, setFilterStatus] = useState("All");
  const [viewTarget, setViewTarget] = useState(null);
  const [gradeTarget, setGradeTarget] = useState(null);

  const counts = {
    All: submissions.length,
    Submitted: submissions.filter((s) => s.status === "Submitted").length,
    Graded: submissions.filter((s) => s.status === "Graded").length,
    "Not Submitted": submissions.filter((s) => s.status === "Not Submitted").length,
  };

  const filtered = filterStatus === "All"
    ? submissions
    : submissions.filter((s) => s.status === filterStatus);

  const handleSubmitGrade = (id, grade) => {
    setSubmissions((prev) =>
      prev.map((s) => (s.id === id ? { ...s, grade, status: "Graded" } : s))
    );
  };

  return (
    <div className="min-h-screen bg-[#F4F6FA] px-4 py-8 md:px-8 md:py-10">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#1E3A5F]">Assignment Submissions</h1>
        <p className="text-sm text-[#455F87] mt-1">
          UI Wireframe Task — Nexus Cohort · {submissions.length} students enrolled
        </p>
      </div>

      {/* Summary Cards */}
      <SubmissionsSummaryCards counts={counts} />

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-5 flex-wrap">
        {STATUSES.map((s) => (
          <button
            key={s}
            onClick={() => setFilterStatus(s)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
              filterStatus === s
                ? "bg-[#0029F5] text-[#FFFFFF]"
                : "bg-[#FFFFFF] text-[#455F87] border border-[#ebeffb] hover:bg-[#ebeffb] hover:text-[#0029F5]"
            }`}
          >
            {s}
            <span className={`ml-1.5 text-xs ${filterStatus === s ? "opacity-70" : "text-[#455F87]"}`}>
              ({counts[s] ?? filtered.length})
            </span>
          </button>
        ))}
      </div>

      {/* Table */}
      <SubmissionsTable
        submissions={filtered}
        onView={setViewTarget}
        onGrade={setGradeTarget}
      />

      {/* Modals */}
      {viewTarget && (
        <ViewSubmissionModal
          submission={viewTarget}
          onClose={() => setViewTarget(null)}
        />
      )}
      {gradeTarget && (
        <GradeModal
          submission={gradeTarget}
          onClose={() => setGradeTarget(null)}
          onSubmitGrade={handleSubmitGrade}
        />
      )}
    </div>
  );
}