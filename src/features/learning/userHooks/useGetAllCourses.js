import { useEffect, useState } from "react";
import { getAllCourses } from "../../Dashboard/api/coursesApi";
const useGetAllCourses = () => {
const [courses, setCourses] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");
useEffect(() => {
const fetchCourses = async () => {
try {
const res = await getAllCourses();
setCourses(res.data.courses);
} catch (err) {
setError(err.response?.data?.message || "Failed to fetch courses");
} finally {
setLoading(false);
}
};
fetchCourses();
}, []);
return { courses, loading, error };
};

export default useGetAllCourses;