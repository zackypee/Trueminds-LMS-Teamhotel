import api from '../../../services/api';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://talentflow-backend-4dd1.onrender.com/api';

// Get all assignments for a specific course
export const getCourseAssignments = async (courseId) => {
  try {
    // ✅ CORRECT: matches the working GET endpoint
    const response = await api.get(`${API_BASE_URL}/assignments/courses/${courseId}/assignments`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { success: false, message: 'Failed to fetch assignments' };
  }
};

// Get single assignment details by ID
export const getAssignmentDetails = async (assignmentId) => {
  try {
    // ✅ This one is correct (matches your documentation)
    const response = await api.get(`${API_BASE_URL}/assignments/${assignmentId}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { success: false, message: 'Failed to fetch assignment details' };
  }
};