
//  Get all courses

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