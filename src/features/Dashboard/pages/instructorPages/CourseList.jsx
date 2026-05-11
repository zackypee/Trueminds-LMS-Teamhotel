import { useNavigate } from "react-router-dom";
import useGetCourses from "../../hooks/instructorHooks/useGetCourses";

function CourseList() {
  const navigate = useNavigate();
  const { courses, loading, error } = useGetCourses();

  const defaultThumbnail =
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80";

  const getThumbnailSrc = (thumbnail) => {
    const normalized = thumbnail && String(thumbnail).trim();
    if (
      !normalized ||
      normalized.toLowerCase() === "null" ||
      normalized.toLowerCase() === "undefined"
    ) {
      return defaultThumbnail;
    }
    return normalized;
  };

  return (
    <div className="p-8 bg-white min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[#1E3A5F]">My Courses</h1>
          <p className="text-sm text-[#6B7280] mt-1">
            Manage and track all your courses
          </p>
        </div>
        <button
          onClick={() => navigate("/instructor/courses/create")}
          className="bg-[#0029FD] text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors"
        >
          + Create Course
        </button>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="flex items-center justify-center h-64">
          <p className="text-[#6B7280] text-sm">Loading courses...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <p className="text-red-600 text-sm">{error}</p>
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && courses.length === 0 && (
        <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-[#E5E7EB] rounded-2xl">
          <p className="text-lg font-bold text-[#1E3A5F] mb-2">
            No courses yet
          </p>
          <p className="text-sm text-[#6B7280] mb-6">
            Create your first course to get started
          </p>
          <button
            onClick={() => navigate("/instructor/courses/create")}
            className="bg-[#0029FD] text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors"
          >
            + Create Course
          </button>
        </div>
      )}

      {/* Course Cards Grid */}
      {!loading && !error && courses.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="border border-[#E5E7EB] rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Thumbnail */}
              <div className="w-full h-40 bg-[#F0F4FF] flex items-center justify-center">
                <img
                  src={getThumbnailSrc(course.thumbnail)}
                  alt={course.title || "Course thumbnail"}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = defaultThumbnail;
                  }}
                />
              </div>

              {/* Card Content */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full ${course.is_published ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"}`}
                  >
                    {course.is_published ? "Published" : "Draft"}
                  </span>
                  <span className="text-xs text-[#6B7280]">
                    {course.total_enrollments} enrolled
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#1E3A5F] mb-2 line-clamp-1">
                  {course.title}
                </h3>
                <p className="text-xs text-[#6B7280] mb-4 line-clamp-2">
                  {course.description}
                </p>

                <div className="flex items-center justify-between">
                  <p className="text-xs text-[#6B7280]">
                    By {course.instructor_name}
                  </p>
                  <button
                    onClick={() =>
                      navigate(`/instructor/courses/${course.id}/manage`)
                    }
                    className="bg-[#0029FD] text-white text-xs font-medium px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
                  >
                    Manage
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CourseList;
