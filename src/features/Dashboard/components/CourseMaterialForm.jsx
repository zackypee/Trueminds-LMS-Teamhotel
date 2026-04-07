import { useState } from "react";

function CourseMaterialForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
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
      newErrors.title = "Material title is required";
    }
    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
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
      <p className="text-[#7C3AED] text-sm cursor-pointer mb-6">
        ← Back to Dashboard
      </p>
      <h1 className="text-4xl font-bold text-[#1F2937] mb-2">
        Upload Course Material
      </h1>
      <p className="text-sm text-[#6B7280] mb-10">
        Provide new course with detailed insights, with materials and instruments for their reusal
      </p>

      <div className="mb-6">
        <label className="block text-sm font-bold text-[#1F2937] mb-2">
          Course Title
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
          Course Details/Outline
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Provide insights on the course, what the learner will be coming across by the end of the course study, as well as a listed out step by step curriculum of the course"
          className="w-full bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg px-4 py-3 text-sm text-[#1F2937] outline-none h-36 resize-none"
        />
        {errors.description && (
          <p className="text-red-500 text-xs mt-1">{errors.description}</p>
        )}
      </div>

      <div className="mb-8">
        <label className="block text-sm font-bold text-[#1F2937] mb-3">
          Material Upload Zone
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
            Course references, videos, reading materials e.t.c (Max
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
          className="bg-[#7C3AED] text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-[#6D28D9] transition-colors cursor-pointer"
        >
          Publish Assignment
        </button>
      </div>
    </div>
  );
}

export default CourseMaterialForm;
