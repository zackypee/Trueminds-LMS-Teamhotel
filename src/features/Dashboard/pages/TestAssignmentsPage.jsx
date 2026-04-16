import React from 'react';
import UserAssignmentList from '../components/userComponents/UserAssignmentList';

const TestAssignmentsPage = () => {
  // Use the course ID you created earlier
  const COURSE_ID = 'bd4b722a-0408-4a26-a5c0-abb5294dc9f0';

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Test Assignments Page</h1>
        <UserAssignmentList courseId={COURSE_ID} />
      </div>
    </div>
  );
};

export default TestAssignmentsPage;