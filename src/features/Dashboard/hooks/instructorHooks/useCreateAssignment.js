import { useState } from "react";
import { createAssignment } from "../../api/instructorApi";

const useCreateAssignment = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleCreateAssignment = async (courseId, assignmentData) => {
    if (!courseId) {
      setLoading(false);
      setError("Course ID is required");
      return;
    }
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await createAssignment(courseId, assignmentData);
      setSuccess(true);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { handleCreateAssignment, loading, error, success };
};

export default useCreateAssignment;