import { useState } from "react";
import { getUsers } from "../../api/adminApi";

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await getUsers();
      setUsers(response.data);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return {
    users,
    loading,
    error,
    fetchUsers,
  };
};