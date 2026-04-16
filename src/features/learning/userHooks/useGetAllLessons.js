import { getAllLessons } from "../../../globalApi/userApi";
import { useState, useEffect } from "react";

const useGetAllLessons = () => {
  const [lessons, setLessons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAllLessons = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await getAllLessons(2);
      console.log("RAW RESPONSE:", response);

      if (!response?.success) {
        setError(response.message || "Lessons Fetching Failed, Try Again.");
        return false;
      }

      const data = response?.data?.lessons;
      setLessons(data);

      return true;
    } catch (err) {
      const message =
        err?.response?.data?.message ||
        (err.message === "Network Error"
          ? "Check your network connection"
          : "Something went wrong");

      console.log("ERROR:", err);
      setError(message);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAllLessons();
  }, []);

  console.log("lesson:", lessons);

  return { lessons, isLoading, error };
};

export default useGetAllLessons;