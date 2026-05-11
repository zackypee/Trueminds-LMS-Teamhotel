import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useManageCourse from "../../hooks/instructorHooks/useManageCourse";
import { updateCourse } from "../../api/instructorApi";

function ManageCourse() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("lessons");
  const [isUpdatingPublish, setIsUpdatingPublish] = useState(false);
  const [courseDetails, setCourseDetails] = useState(null);
  const { course, lessons, assignments, loading, error } =
    useManageCourse(courseId);

  const defaultThumbnail =
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80";

  useEffect(() => {
    if (course) {
      setCourseDetails(course);
    }
  }, [course]);

  const handleTogglePublish = async () => {
    if (!courseDetails) return;

    try {
      setIsUpdatingPublish(true);
      const result = await updateCourse(courseId, {
        is_published: !courseDetails.is_published,
      });
      const updatedCourse = result?.data?.course || {
        ...courseDetails,
        is_published: !courseDetails.is_published,
      };
      setCourseDetails(updatedCourse);
    } catch (err) {
      console.error("Failed to update course publish status:", err);
    } finally {
      setIsUpdatingPublish(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-[#6B7280] text-sm">Loading course...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-600 text-sm">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 bg-white min-h-screen">
      {/* Back Button */}
      <button
        onClick={() => navigate("/instructor/courses")}
        className="text-[#0029FD] text-sm mb-6 flex items-center gap-1 hover:underline"
      >
        ← Back to My Courses
      </button>

      {/* Course Details */}
      <div className="flex gap-6 mb-8 p-6 border border-[#E5E7EB] rounded-2xl">
        {/* Thumbnail */}
        <div className="w-40 h-28 bg-[#F0F4FF] rounded-xl overflow-hidden shrink-0">
          <img
            src={
              courseDetails?.thumbnail
                ? courseDetails.thumbnail
                : defaultThumbnail
            }
            alt={courseDetails?.title || "Course thumbnail"}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = defaultThumbnail;
            }}
          />
        </div>
        {/* Info */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-2xl font-bold text-[#1E3A5F]">
              {courseDetails?.title}
            </h1>
            <div className="flex items-center gap-3">
              <span
                className={`text-xs font-medium px-3 py-1 rounded-full ${courseDetails?.is_published ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"}`}
              >
                {courseDetails?.is_published ? "Published" : "Draft"}
              </span>
              <button
                onClick={handleTogglePublish}
                disabled={isUpdatingPublish}
                className={`text-xs font-medium px-3 py-1 rounded-lg transition-colors ${courseDetails?.is_published ? "bg-red-50 text-red-500 hover:bg-red-100" : "bg-[#0029FD] text-white hover:bg-blue-800"} ${isUpdatingPublish ? "opacity-60 cursor-not-allowed" : ""}`}
              >
                {courseDetails?.is_published ? "Unpublish" : "Publish Course"}
              </button>
            </div>
          </div>
          <p className="text-sm text-[#6B7280] mb-3">
            {courseDetails?.description}
          </p>
          <p className="text-xs text-[#6B7280]">
            By {courseDetails?.instructor_name}
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-[#E5E7EB] mb-6">
        <button
          onClick={() => setActiveTab("lessons")}
          className={`pb-3 text-sm font-medium transition-colors ${activeTab === "lessons" ? "text-[#0029FD] border-b-2 border-[#0029FD]" : "text-[#6B7280] hover:text-[#0029FD]"}`}
        >
          Lessons ({lessons.length})
        </button>
        <button
          onClick={() => setActiveTab("assignments")}
          className={`pb-3 text-sm font-medium transition-colors ${activeTab === "assignments" ? "text-[#0029FD] border-b-2 border-[#0029FD]" : "text-[#6B7280] hover:text-[#0029FD]"}`}
        >
          Assignments ({assignments.length})
        </button>
      </div>

      {/* Lessons Tab */}
      {activeTab === "lessons" && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold text-[#1E3A5F]">
              Course Lessons
            </h2>
            <button
              onClick={() =>
                navigate(`/instructor/courses/${courseId}/add-lesson`)
              }
              className="bg-[#0029FD] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
            >
              + Add Lesson
            </button>
          </div>

          {lessons.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-40 border-2 border-dashed border-[#E5E7EB] rounded-2xl">
              <p className="text-sm font-bold text-[#1E3A5F] mb-1">
                No lessons yet
              </p>
              <p className="text-xs text-[#6B7280]">
                Add your first lesson to get started
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {lessons.map((lesson, index) => (
                <div
                  key={lesson.id}
                  className="flex items-center justify-between border border-[#E5E7EB] rounded-xl px-5 py-4"
                >
                  <div className="flex items-center gap-4">
                    <span className="w-8 h-8 bg-[#EEF2FF] text-[#0029FD] text-xs font-bold rounded-full flex items-center justify-center">
                      {index + 1}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-[#1E3A5F]">
                        {lesson.title}
                      </p>
                      <p className="text-xs text-[#6B7280]">
                        {lesson.content?.substring(0, 60)}...
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        navigate(
                          `/instructor/courses/${courseId}/lessons/${lesson.id}/edit`,
                        )
                      }
                      className="text-xs text-[#0029FD] border border-[#0029FD] px-3 py-1 rounded-lg hover:bg-[#EEF2FF] transition-colors"
                    >
                      Edit
                    </button>
                    <button className="text-xs text-red-500 border border-red-200 px-3 py-1 rounded-lg hover:bg-red-50 transition-colors">
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Assignments Tab */}
      {activeTab === "assignments" && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold text-[#1E3A5F]">
              Course Assignments
            </h2>
            <button
              onClick={() =>
                navigate(`/instructor/courses/${courseId}/add-assignment`)
              }
              className="bg-[#0029FD] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
            >
              + Add Assignment
            </button>
          </div>

          {assignments.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-40 border-2 border-dashed border-[#E5E7EB] rounded-2xl">
              <p className="text-sm font-bold text-[#1E3A5F] mb-1">
                No assignments yet
              </p>
              <p className="text-xs text-[#6B7280]">
                Add your first assignment to get started
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {assignments.map((assignment) => (
                <div
                  key={assignment.id}
                  className="flex items-center justify-between border border-[#E5E7EB] rounded-xl px-5 py-4"
                >
                  <div>
                    <p className="text-sm font-medium text-[#1E3A5F]">
                      {assignment.title}
                    </p>
                    <p className="text-xs text-[#6B7280]">
                      Due: {new Date(assignment.due_date).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        navigate(
                          `/instructor/courses/${courseId}/assignments/${assignment.id}/edit`,
                        )
                      }
                      className="text-xs text-[#0029FD] border border-[#0029FD] px-3 py-1 rounded-lg hover:bg-[#EEF2FF] transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() =>
                        navigate(
                          `/instructor/courses/${courseId}/assignments/${assignment.id}/submissions`,
                        )
                      }
                      className="text-xs text-green-600 border border-green-200 px-3 py-1 rounded-lg hover:bg-green-50 transition-colors"
                    >
                      Submissions
                    </button>
                    <button className="text-xs text-red-500 border border-red-200 px-3 py-1 rounded-lg hover:bg-red-50 transition-colors">
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ManageCourse;
