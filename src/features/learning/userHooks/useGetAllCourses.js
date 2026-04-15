import { useEffect, useState } from "react";
import { getAllCourses } from "../api/coursesApi";

const useGetAllCourses = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("")

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const res = await getAllCourses();
                setCourses(res.data.courses);
                setSuccess(res.message)
                return true
            } catch (err) {
                setError(err.response?.data?.message || "Failed to fetch courses");
                return false
            } finally {
                setLoading(false);
            }
        };
        fetchCourses();
    }, []);

    return { courses, loading, error, success };
};

export default useGetAllCourses;