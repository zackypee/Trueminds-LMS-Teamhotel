import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useUploadCourseMaterial from "../../hooks/instructorHooks/useUploadCourseMaterial";

function InstructorCourseMaterialForm({ courseId = "" }) {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    videoUrl: "",
    documentUrl: "",
    orderNumber: "1",
  });
  const [errors, setErrors] = useState({});

  const { handleUpload, loading, error, success } = useUploadCourseMaterial();

  const isValidUrl = (value) => {
    try {
      new URL(value);
      return true;
    } catch {
      return false;
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Material title is required";
    }
    if (!formData.content.trim()) {
      newErrors.content = "Lesson content is required";
    }
    if (!formData.videoUrl.trim()) {
      newErrors.videoUrl = "Video URL is required";
    } else if (!isValidUrl(formData.videoUrl.trim())) {
      newErrors.videoUrl = "Please enter a valid video URL";
    }
    if (!formData.documentUrl.trim()) {
      newErrors.documentUrl = "Document URL is required";
    } else if (!isValidUrl(formData.documentUrl.trim())) {
      newErrors.documentUrl = "Please enter a valid document URL";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    await handleUpload(courseId, {
      title: formData.title.trim(),
      content: formData.content.trim(),
      video_url: formData.videoUrl.trim(),
      document_url: formData.documentUrl.trim(),
      order_number: parseInt(formData.orderNumber),
    });
  };

  useEffect(() => {
    if (success) {
      setFormData((prev) => ({
        ...prev,
        title: "",
        content: "",
        videoUrl: "",
        documentUrl: "",
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
        Upload Course Material
      </h1>
      <p className="text-sm text-[#6B7280] mb-10">
        Add lesson resources with URLs for video and document content.
      </p>

      {success && (
        <div className="mb-6 rounded-lg bg-emerald-50 border border-emerald-200 p-4 text-emerald-700">
          Course material uploaded successfully.
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
              Lesson Title
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
              <p className="text-red-500 text-xs mt-1">{errors.title}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-bold text-[#1F2937] mb-2">
              Lesson Content
            </label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Enter the lesson summary or notes for students."
              className="w-full bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg px-4 py-3 text-sm text-[#1F2937] outline-none h-36 resize-none"
            />
            {errors.content && (
              <p className="text-red-500 text-xs mt-1">{errors.content}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-bold text-[#1F2937] mb-2">
              Video URL
            </label>
            <input
              type="url"
              name="videoUrl"
              value={formData.videoUrl}
              onChange={handleChange}
              placeholder="https://example.com/course-video"
              className="w-full bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg px-4 py-3 text-sm text-[#1F2937] outline-none"
            />
            {errors.videoUrl && (
              <p className="text-red-500 text-xs mt-1">{errors.videoUrl}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-bold text-[#1F2937] mb-2">
              Document URL
            </label>
            <input
              type="url"
              name="documentUrl"
              value={formData.documentUrl}
              onChange={handleChange}
              placeholder="https://example.com/lesson-document.pdf"
              className="w-full bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg px-4 py-3 text-sm text-[#1F2937] outline-none"
            />
            {errors.documentUrl && (
              <p className="text-red-500 text-xs mt-1">{errors.documentUrl}</p>
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
              {loading ? "Publishing..." : "Publish Material"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default InstructorCourseMaterialForm;
