import { useEffect, useState } from "react";
import { getCourseDetails } from "../api/coursesApi";

const useGetCourseDetails = (courseId) => {
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [success, setSuccess]= useState("")

    useEffect(() => {
        if (!courseId) {
            setLoading(false);
            return;
        }
        const fetchCourse = async () => {
        try {
            const res = await getCourseDetails(courseId);
            setCourse(res.data);
            setSuccess(res.message)
            return true;
        } catch (err) {
            setError(err.response?.data?.message || "Failed to fetch course details");
            return false;
        } finally {
            setLoading(false);
        }
        };
        fetchCourse();
    }, [courseId]);

    return { course, loading, error, success };
};
export default useGetCourseDetails;