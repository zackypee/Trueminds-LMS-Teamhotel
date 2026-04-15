import React from 'react';
import { useNavigate } from 'react-router-dom';
import useGetCourseAssignments from '../../hooks/useGetCourseAssignments';

const UserAssignmentList = ({ courseId }) => {
  const navigate = useNavigate();
  const { assignments, loading, error } = useGetCourseAssignments(courseId);

  const formatDate = (dateString) => {
    if (!dateString) return 'No due date';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'submitted': return 'text-green-600 bg-green-50';
      case 'graded': return 'text-blue-600 bg-blue-50';
      default: return 'text-yellow-600 bg-yellow-50';
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0029F5]"></div>
        <span className="ml-2 text-gray-600">Loading assignments...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
        <p className="text-red-600">{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="mt-2 text-[#0029F5] hover:underline text-sm"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (!assignments.length) {
    return (
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
        <svg className="w-12 h-12 text-gray-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
        </svg>
        <p className="text-gray-500">No assignments found for this course.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-[#1F2937] mb-4">Course Assignments</h2>
      {assignments.map((assignment) => (
        <div 
          key={assignment.id}
          onClick={() => navigate(`/assignments/${assignment.id}`)}
          className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
        >
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-[#1F2937]">{assignment.title}</h3>
            <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(assignment.status)}`}>
              {assignment.status || 'pending'}
            </span>
          </div>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{assignment.description}</p>
          <div className="flex justify-between items-center text-sm text-gray-500">
            <div className="flex items-center gap-4">
              <span>📅 Due: {formatDate(assignment.due_date)}</span>
              <span>⭐ {assignment.points || 0} points</span>
            </div>
            <button className="text-[#0029F5] hover:underline text-sm">
              View Details →
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserAssignmentList;