import { useEffect, useState } from "react";
import { getCourseDetails } from "../../Dashboard/api/coursesApi";
const useGetCourseDetails = (courseId) => {
const [course, setCourse] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

useEffect(() => {
if (!courseId) {
    setLoading(false);
    return;
}
const fetchCourse = async () => {
try {
const res = await getCourseDetails(courseId);
setCourse(res.data);
} catch (err) {
setError(err.response?.data?.message || "Failed to fetch course details");
} finally {
setLoading(false);
}
};
fetchCourse();
}, [courseId]);
return { course, loading, error };
};
export default useGetCourseDetails;