import { useState } from "react";
import { uploadCourseMaterial } from "../../api/instructorApi";

const useUploadCourseMaterial = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleUpload = async (courseId, lessonData) => {
    if (!courseId) {
      setLoading(false);
      setError("Course ID is required");
      return;
    }
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await uploadCourseMaterial(courseId, lessonData);
      setSuccess(true);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { handleUpload, loading, error, success };
};

export default useUploadCourseMaterial;