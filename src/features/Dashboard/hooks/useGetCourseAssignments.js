import { useState, useEffect } from 'react';
import { getCourseAssignments } from '../api/assignmentsApi';

const useGetCourseAssignments = (courseId) => {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAssignments = async () => {
      if (!courseId) {
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);
      
      try {
        const response = await getCourseAssignments(courseId);
        if (response.success) {
          setAssignments(response.data || []);
        } else {
          setError(response.message);
        }
      } catch (err) {
        setError(err.message || 'An error occurred while fetching assignments');
      } finally {
        setLoading(false);
      }
    };

    fetchAssignments();
  }, [courseId]);

  return { assignments, loading, error };
};

export default useGetCourseAssignments;