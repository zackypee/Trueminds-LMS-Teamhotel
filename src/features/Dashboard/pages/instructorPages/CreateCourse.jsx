import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCourse } from "../../api/instructorApi";

function CreateCourse() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    thumbnail: "",
    category: "",
    level: "beginner",
  });

  const [tools, setTools] = useState([]);
  const [toolInput, setToolInput] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddTool = (e) => {
    if (e.key === "Enter" && toolInput.trim()) {
      e.preventDefault();
      if (!tools.includes(toolInput.trim())) {
        setTools([...tools, toolInput.trim()]);
      }
      setToolInput("");
    }
  };

  const handleRemoveTool = (index) => {
    setTools(tools.filter((_, i) => i !== index));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Course title is required";
    if (!formData.description.trim())
      newErrors.description = "Description is required";
    if (!formData.category.trim()) newErrors.category = "Category is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const response = await createCourse({
        title: formData.title.trim(),
        description: formData.description.trim(),
        thumbnail: formData.thumbnail.trim() || null,
        category: formData.category.trim(),
        level: formData.level,
      });
      navigate("/instructor/courses");
    } catch (err) {
      setErrors({
        submit: err.response?.data?.message || "Failed to create course",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 bg-white min-h-screen max-w-3xl">
      {/* Header */}
      <button
        onClick={() => navigate("/instructor/courses")}
        className="text-[#0029FD] text-sm mb-6 flex items-center gap-1 hover:underline"
      >
        ← Back to My Courses
      </button>
      <h1 className="text-3xl font-bold text-[#1E3A5F] mb-2">
        Create New Course
      </h1>
      <p className="text-sm text-[#6B7280] mb-10">
        Fill in the details below to create your course.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6">
          {/* Course Title */}
          <div>
            <label className="block text-sm font-bold text-[#1E3A5F] mb-2">
              Course Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g. Advanced UI Engineering"
              className="w-full bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg px-4 py-3 text-sm text-[#1E3A5F] outline-none"
            />
            {errors.title && (
              <p className="text-red-500 text-xs mt-1">{errors.title}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-bold text-[#1E3A5F] mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe what students will learn in this course..."
              className="w-full bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg px-4 py-3 text-sm text-[#1E3A5F] outline-none h-32 resize-none"
            />
            {errors.description && (
              <p className="text-red-500 text-xs mt-1">{errors.description}</p>
            )}
          </div>

          {/* Thumbnail URL */}
          <div>
            <label className="block text-sm font-bold text-[#1E3A5F] mb-2">
              Thumbnail URL
            </label>
            <input
              type="url"
              name="thumbnail"
              value={formData.thumbnail}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              className="w-full bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg px-4 py-3 text-sm text-[#1E3A5F] outline-none"
            />
          </div>

          {/* Category and Level side by side */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-[#1E3A5F] mb-2">
                Category
              </label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="e.g. Design, Development"
                className="w-full bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg px-4 py-3 text-sm text-[#1E3A5F] outline-none"
              />
              {errors.category && (
                <p className="text-red-500 text-xs mt-1">{errors.category}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-bold text-[#1E3A5F] mb-2">
                Level
              </label>
              <select
                name="level"
                value={formData.level}
                onChange={handleChange}
                className="w-full bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg px-4 py-3 text-sm text-[#1E3A5F] outline-none"
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
          </div>

          {/* Tools & Technologies */}
          <div>
            <label className="block text-sm font-bold text-[#1E3A5F] mb-2">
              Tools & Technologies
            </label>
            <div className="w-full bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg px-4 py-3 flex flex-wrap gap-2 min-h-[48px]">
              {tools.map((tool, index) => (
                <span
                  key={index}
                  className="flex items-center gap-1 bg-[#EEF2FF] text-[#0029FD] text-xs font-medium px-3 py-1 rounded-full"
                >
                  {tool}
                  <button
                    type="button"
                    onClick={() => handleRemoveTool(index)}
                    className="text-[#0029FD] hover:text-red-500 font-bold ml-1"
                  >
                    ×
                  </button>
                </span>
              ))}
              <input
                type="text"
                value={toolInput}
                onChange={(e) => setToolInput(e.target.value)}
                onKeyDown={handleAddTool}
                placeholder={
                  tools.length === 0
                    ? "Type a tool and press Enter e.g. VS Code"
                    : ""
                }
                className="flex-1 bg-transparent text-sm text-[#1E3A5F] outline-none min-w-[200px]"
              />
            </div>
            <p className="text-xs text-[#6B7280] mt-1">
              Press Enter to add each tool
            </p>
          </div>

          {errors.submit && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-600 text-sm">{errors.submit}</p>
            </div>
          )}

          {/* Buttons */}
          <div className="flex justify-end gap-4 mt-4">
            <button
              type="button"
              onClick={() => navigate("/instructor/courses")}
              className="text-[#0029FD] text-sm font-medium px-6 py-3 rounded-lg hover:bg-[#EEF2FF] transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="bg-[#0029FD] disabled:opacity-60 text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors"
            >
              {loading ? "Creating..." : "Create Course"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateCourse;
