import { useState } from "react";
import { createUser } from "../../api/adminApi";

const useCreateUser = () => {
  const [createdUser, setCreatedUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCreateUser = async (data) => {
    setLoading(true);
    setError(null);

    try {
      const response = await createUser(data);
      setCreatedUser(response.data);
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || "Failed to create user");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { createdUser, handleCreateUser, loading, error };
};

export default useCreateUser;
