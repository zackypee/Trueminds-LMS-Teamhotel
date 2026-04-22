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