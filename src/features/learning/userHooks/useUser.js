import { useState } from "react";
import { getUser } from "../../api/userApi";

export const useUser = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await getUser();
      setUser(response.data);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    loading,
    error,
    fetchUsers,
  };
};