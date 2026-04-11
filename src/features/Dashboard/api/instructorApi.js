import api from "../../../services/api";

export const uploadCourses = () => {
  return api.post("/courses");
};