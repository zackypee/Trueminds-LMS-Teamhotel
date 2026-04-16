import { useState } from "react";
import { enrollInCourse } from "../api/coursesApi";


const useEnrollInCourse = () => {
    const [isEnrolling, setIsEnrolling] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const handleEnroll = async (courseId) => {
        setIsEnrolling(true);
        setError("");
        setSuccess("");

        try {
            const res = await enrollInCourse(courseId);
            setSuccess(res.message || "Enrolled successfully");
            return true
        } catch (err) {
            setError(err.response?.data?.message || "Failed to enroll in course");
            return false
        } finally {
            setIsEnrolling(false);
        }
    };

    return { handleEnroll, isEnrolling, success, error };
};

export default useEnrollInCourse;