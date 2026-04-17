import { useState, useEffect } from 'react';
import { getAssignmentDetails } from '../api/assignmentsApi';

const useGetAssignmentDetails = (assignmentId) => {
  const [assignment, setAssignment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAssignmentDetails = async () => {
      if (!assignmentId) {
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);
      
      try {
        const response = await getAssignmentDetails(assignmentId);
        if (response.success) {
          setAssignment(response.data);
        } else {
          setError(response.message);
        }
      } catch (err) {
        setError(err.message || 'An error occurred while fetching assignment details');
      } finally {
        setLoading(false);
      }
    };

    fetchAssignmentDetails();
  }, [assignmentId]);

  return { assignment, loading, error };
};

export default useGetAssignmentDetails;