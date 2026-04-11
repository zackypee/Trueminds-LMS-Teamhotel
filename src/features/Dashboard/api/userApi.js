import api from "../../../services/api";

export const getUser = () => {
  return api.get("/user");
};

