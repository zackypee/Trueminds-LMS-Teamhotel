import api from "../../services/api";

export const getCourse = () => {
  return api.get("/courses");
};

