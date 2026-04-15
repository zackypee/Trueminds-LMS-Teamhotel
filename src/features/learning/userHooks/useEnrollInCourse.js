import { useState } from "react";
import { enrollInCourse } from "../../Dashboard/api/coursesApi";
const useEnrollInCourse = () => {
const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState("");
const [error, setError] = useState("");
const enroll = async (courseId) => {
setLoading(true);
setError("");
setSuccess("");
try {
const res = await enrollInCourse(courseId);
setSuccess(res.message || "Enrolled successfully");
} catch (err) {
setError(err.response?.data?.message || "Failed to enroll in course");
} finally {
setLoading(false);
}
};
return { enroll, loading, success, error };
};

export default useEnrollInCourse;