import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useGetAssignmentDetails from '../../hooks/useGetAssignmentDetails';

const UserAssignmentDetails = ({ assignmentId }) => {
  const navigate = useNavigate();
  const { assignment, loading, error } = useGetAssignmentDetails(assignmentId);
  const [selectedFile, setSelectedFile] = useState(null);

  const formatDate = (dateString) => {
    if (!dateString) return 'No due date';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && (file.type === 'text/html' || file.name.endsWith('.zip'))) {
      setSelectedFile(file);
    }
  };

  const handleSubmit = async () => {
    if (selectedFile) {
      // TODO: Implement submission API call
      alert('Submission feature will be implemented soon');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0029F5]"></div>
        <span className="ml-2 text-gray-600">Loading assignment details...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
        <p className="text-red-600">{error}</p>
        <button 
          onClick={() => navigate(-1)}
          className="mt-2 text-[#0029F5] hover:underline text-sm"
        >
          Go Back
        </button>
      </div>
    );
  }

  if (!assignment) {
    return (
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
        <p className="text-gray-500">Assignment not found.</p>
        <button 
          onClick={() => navigate(-1)}
          className="mt-2 text-[#0029F5] hover:underline text-sm"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Back Button */}
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-600 hover:text-[#0029F5] mb-4"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        Back to Assignments
      </button>

      {/* Assignment Header */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
        <h1 className="text-2xl font-bold text-[#1F2937] mb-2">{assignment.title}</h1>
        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
          <span>📅 Due: {formatDate(assignment.due_date)}</span>
          <span>⭐ {assignment.points || 0} points</span>
        </div>
        <p className="text-gray-700 leading-relaxed">{assignment.description}</p>
      </div>

      {/* Assignment Instructions */}
      {assignment.instructions && (
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
          <h2 className="text-lg font-semibold text-[#1F2937] mb-3">Instructions</h2>
          <p className="text-gray-700 leading-relaxed">{assignment.instructions}</p>
        </div>
      )}

      {/* Submission Area */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h2 className="text-lg font-semibold text-[#1F2937] mb-3">Submit Your Work</h2>
        
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#0029F5] transition-colors">
          <input
            type="file"
            id="assignmentFile"
            accept=".html,.zip"
            className="hidden"
            onChange={handleFileUpload}
          />
          
          <label htmlFor="assignmentFile" className="cursor-pointer">
            <div className="flex flex-col items-center gap-3">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
              </svg>
              <p className="text-sm text-[#1F2937]">
                Drop your file here or <span className="text-[#0029F5] font-semibold">browse</span>
              </p>
              <p className="text-xs text-gray-500">Supports HTML, ZIP (Max 5mb)</p>
            </div>
          </label>
        </div>

        {selectedFile && (
          <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg flex justify-between items-center">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm text-gray-700">{selectedFile.name}</span>
            </div>
            <button 
              onClick={() => setSelectedFile(null)}
              className="text-red-500 hover:text-red-700"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}

        <button
          onClick={handleSubmit}
          disabled={!selectedFile}
          className={`w-full mt-4 py-2.5 rounded-md font-semibold transition-colors ${
            !selectedFile
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-[#7C3AED] text-white hover:bg-[#6D2ED9]'
          }`}
        >
          Submit Assignment
        </button>
      </div>
    </div>
  );
};

export default UserAssignmentDetails;