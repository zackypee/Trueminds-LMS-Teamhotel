import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCreateAssignment from "../../hooks/instructorHooks/useCreateAssignment";

function InstructorAssignmentForm({ courseId = "" }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
  });
  const [errors, setErrors] = useState({});

  const { handleCreateAssignment, loading, error, success } =
    useCreateAssignment();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Assignment title is required";
    }
    if (!formData.description.trim()) {
      newErrors.description = "Detailed instructions are required";
    }
    if (!formData.dueDate) {
      newErrors.dueDate = "Due date is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    await handleCreateAssignment(courseId, {
      title: formData.title.trim(),
      description: formData.description.trim(),
      due_date: new Date(formData.dueDate).toISOString(),
    });
  };

  useEffect(() => {
    if (success) {
      setFormData((prev) => ({
        ...prev,
        title: "",
        description: "",
        dueDate: "",
      }));
      setErrors({});
    }
  }, [success]);

  return (
    <div className="bg-white p-10 max-w-4xl">
      <Link
        to="/instructor/dashboard"
        className="text-[#7C3AED] text-sm mb-6 md:hidden"
      >
        ← Back to Dashboard
      </Link>

      <h1 className="text-4xl font-bold text-[#1F2937] mb-2">
        Create Assignment
      </h1>
      <p className="text-sm text-[#6B7280] mb-10">
        Craft a clear assignment with detailed instructions and a deadline.
      </p>

      {success && (
        <div className="mb-6 rounded-lg bg-emerald-50 border border-emerald-200 p-4 text-emerald-700">
          Assignment created successfully.
        </div>
      )}
      {error && (
        <div className="mb-6 rounded-lg bg-red-50 border border-red-200 p-4 text-red-700">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="grid gap-6">
          <div>
            <label className="block text-sm font-bold text-[#1F2937] mb-2">
              Assignment Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g. UX Research Report"
              className="w-full bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg px-4 py-3 text-sm text-[#1F2937] outline-none"
            />
            {errors.title && (
              <p className="text-red-500 text-xs mt-1">{errors.title}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-bold text-[#1F2937] mb-2">
              Assignment Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Provide step-by-step instructions, learning objectives, and grading criteria."
              className="w-full bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg px-4 py-3 text-sm text-[#1F2937] outline-none h-36 resize-none"
            />
            {errors.description && (
              <p className="text-red-500 text-xs mt-1">{errors.description}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-[#1F2937] uppercase tracking-wider mb-2">
              Due Date
            </label>
            <input
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              className="w-full bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg px-4 py-3 text-sm text-[#1F2937] outline-none"
            />
            {errors.dueDate && (
              <p className="text-red-500 text-xs mt-1">{errors.dueDate}</p>
            )}
          </div>

          <div className="flex flex-col gap-4 md:flex-row md:justify-end md:items-center mt-2">
            <button
              type="button"
              className="text-[#0029F5] text-sm font-medium px-6 py-3 rounded-lg hover:bg-[#EDE9FE] transition-colors"
            >
              Save Draft
            </button>
            <button
              type="submit"
              disabled={loading}
              className="bg-[#0029F5] disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-[#1E3A5F] transition-colors"
            >
              {loading ? "Publishing..." : "Publish Assignment"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default InstructorAssignmentForm;
