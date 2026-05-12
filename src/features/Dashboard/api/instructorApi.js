import api from "../../../services/api";

// Upload Course Material (Lesson)
export const uploadCourseMaterial = async (courseId, lessonData) => {
  const response = await api.post(`/courses/${courseId}/lessons`, lessonData);
  return response.data;
};

// Create Assignment
export const createAssignment = async (courseId, assignmentData) => {
  const response = await api.post(`/assignments/courses/${courseId}/assignments`, assignmentData);
  return response.data;
};

// Get all courses
export const getCourses = async () => {
  const response = await api.get("/courses");
  console.log("LIST OF COURSES", response.data)
  return response.data;
};

// Create Course
export const createCourse = async (courseData) => {
  const response = await api.post("/courses", courseData);
  return response.data;
};

// Get course details
export const getCourseDetails = async (courseId) => {
  const response = await api.get(`/courses/${courseId}`);
  return response.data;
};

// Get course lessons
export const getCourseLessons = async (courseId) => {
  const response = await api.get(`/courses/${courseId}/lessons`);
  return response.data;
};

// Update course (publish / unpublish / edit)
export const updateCourse = async (courseId, courseData) => {
  const response = await api.patch(`/courses/${courseId}`, courseData);
  return response.data;
};

// Get course assignments
export const getCourseAssignments = async (courseId) => {
  const response = await api.get(`/assignments/courses/${courseId}/assignments`);
  return response.data;
};

