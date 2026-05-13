import { useState, useEffect } from "react";
import {
  getCourseDetails,
  getCourseLessons,
  getCourseAssignments,
} from "../../api/instructorApi";

const useManageCourse = (courseId) => {
  const [course, setCourse] = useState(null);
  const [lessons, setLessons] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [courseRes, lessonsRes, assignmentsRes] = await Promise.all([
          getCourseDetails(courseId),
          getCourseLessons(courseId),
          getCourseAssignments(courseId),
        ]);
        setCourse(courseRes.data.course);
        setLessons(lessonsRes.data.lessons || []);
        setAssignments(assignmentsRes.data.assignments || []);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch course data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [courseId]);

  return { course, lessons, assignments, loading, error };
};

export default useManageCourse;
