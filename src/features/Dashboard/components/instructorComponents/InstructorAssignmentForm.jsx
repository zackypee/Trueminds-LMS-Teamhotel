import { useState } from "react";
import { Link } from "react-router-dom";

function InstructorAssignmentForm() {
  const [formData, setFormData] = useState({
    title: "",
    instructions: "",
    dueDate: "",
    file: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Assignment title is required";
    }
    if (!formData.instructions.trim()) {
      newErrors.instructions = "Detailed instructions are required";
    }
    if (!formData.dueDate) {
      newErrors.dueDate = "Due date is required";
    }
    if (!formData.file) {
      newErrors.file = "Please upload a PDF file";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className="bg-white p-10 max-w-4xl">
      <Link to="/user-dashboard" className="text-[#7C3AED] text-sm  mb-6 md:hidden">
        ← Back to Dashboard
      </Link>
      <h1 className="text-4xl font-bold text-[#1F2937] mb-2">
        Upload Assignment
      </h1>
      <p className="text-sm text-[#6B7280] mb-10">
        Craft a clear and engaging challenge for your students. Provide detailed
        guidelines and set clear deadlines to ensure successful learning
        outcomes.
      </p>

      <div className="mb-6">
        <label className="block text-sm font-bold text-[#1F2937] mb-2">
          Assignment Title
        </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="e.g. Advanced UX Research Methodologies"
          className="w-full bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg px-4 py-3 text-sm text-[#1F2937] outline-none"
        />
        {errors.title && (
          <p className="text-red-500 text-xs mt-11">{errors.title}</p>
        )}
      </div>

      <div className="mb-6">
        <label className="block text-sm font-bold text-[#1F2937] mb-2">
          Detailed Instructions
        </label>
        <textarea
          name="instructions"
          value={formData.instructions}
          onChange={handleChange}
          placeholder="Provide step-by-step instructions, learning objectives, and grading criteria..."
          className="w-full bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg px-4 py-3 text-sm text-[#1F2937] outline-none h-36 resize-none"
        />
        {errors.instructions && (
          <p className="text-red-500 text-xs mt-1">{errors.instructions}</p>
        )}
      </div>

      <div className="mb-6">
        <label className="block text-xs font-bold text-[#1F2937] uppercase tracking-wider mb-2">
          Due Date Selector
        </label>
        <input
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
          className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg px-4 py-3 text-sm text-[#1F2937] outline-none"
        />
        {errors.dueDate && (
          <p className="text-red-500 text-xs mt-1">{errors.dueDate}</p>
        )}
      </div>

      <div className="mb-8">
        <label className="block text-sm font-bold text-[#1F2937] mb-3">
          PDF Upload Zone
        </label>
        <div className="border-2 border-dashed border-[#E5E7EB] rounded-xl p-10 flex flex-col items-center justify-center bg-white">
          {/* Cloud upload icon */}
          <div className="bg-[#EDE9FE] p-4 rounded-xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-[#7C3AED]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
          </div>

          <p className="text-sm font-medium text-[#1F2937] mb-1">
            Drag and drop your PDF here
          </p>
          <p className="text-xs text-[#6B7280] mb-4">
            Support for assignment briefs, reading materials, or rubrics (Max
            25MB)
          </p>

          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            id="fileInput"
            className="hidden"
          />
          <button
            onClick={() => document.getElementById("fileInput").click()}
            className="border border-[#7C3AED] text-[#7C3AED] text-sm px-6 py-2 rounded-lg hover:bg-[#EDE9FE] transition-colors"
          >
            Select File
          </button>
          {errors.file && (
            <p className="text-red-500 text-xs mt-2">{errors.file}</p>
          )}
        </div>
      </div>

      <div className="flex justify-end gap-4 mt-6">
        <button className="text-[#7C3AED] text-sm font-medium px-6 py-3 rounded-lg hover:bg-[#EDE9FE] transition-colors cursor-pointer">
          Save Draft
        </button>
        <button
          onClick={handleSubmit}
          className="bg-[#0029F5] text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-[#1E3A5F] transition-colors cursor-pointer"
        >
          Publish Assignment
        </button>
      </div>
    </div>
  );
}

export default InstructorAssignmentForm;
