import api from "../../../services/api";

export const getAllCourses = async () => {
  const response = await api.get("/courses");
  return response.data;
};
//  Get single course details
export const getCourseDetails = async (courseId) => {
  const response = await api.get(`/courses/${courseId}`);
  return response.data;
};

// Enroll in course
export const enrollInCourse = async (courseId) => {
  const response = await api.post(`/courses/${courseId}/enroll`);
  return response.data;
};

// discussion APIs
export const getDiscussions = async (courseId) => {
  const res = await api.get(`/courses/${courseId}/discussions`);
  return res.data;
};

export const createDiscussion = async (courseId, message) => {
  const res = await api.post(`/courses/${courseId}/discussions`, {
    content: message,
  });
  return res.data;
};

export const replyToDiscussion = async (courseId, postId, message) => {
  const res = await api.post(
    `/courses/${courseId}/discussions/${postId}/reply`,
    { content: message },
  );
  return res.data;
};

export const deleteDiscussion = async (courseId, postId) => {
  const res = await api.delete(`/courses/${courseId}/discussions/${postId}`);
  return res.data;
};
