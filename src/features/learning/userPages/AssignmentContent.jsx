import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AssignmentContent = () => {
  const navigate = useNavigate();
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    const validFiles = files.filter(file => 
      file.type === 'text/html' || file.name.endsWith('.zip')
    );
    setUploadedFiles(prev => [...prev, ...validFiles]);
    setIsSubmitted(false);
  };

  const handleSubmit = () => {
    if (uploadedFiles.length > 0) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 1500);
    }
  };

  const handlePreview = (file) => {
    if (file && file.type === 'text/html') {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newWindow = window.open();
        newWindow.document.write(e.target.result);
        newWindow.document.close();
      };
      reader.readAsText(file);
    }
  };

  const removeFile = (indexToRemove) => {
    setUploadedFiles(uploadedFiles.filter((_, index) => index !== indexToRemove));
  };

  const rubricItems = [
    { name: 'HTML Structure and Semantics', points: 30 },
    { name: 'JavaScript Functionality', points: 30 },
    { name: 'Event Handling and Interactivity', points: 20 },
    { name: 'Code Quality and Comments', points: 10 },
    { name: 'CSS Styling & Responsiveness', points: 10 },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 md:py-12 md:-mt-4 md:pt-30  bg-white">
      {/* Two Column Layout */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column - Main Content */}
        <div className="flex-1">
          <h1 className="text-[24px] md:text-[28px] font-bold text-[#1F2937] mb-6">
            Assignment: Build Your First Interactive Page
          </h1>

          {/* Due Date and Points */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#D97706]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-[#1F2937]">Due: <span className="font-semibold">Apr 10, 2026, 11:59pm</span></span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#D97706]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
              </svg>
              <span className="text-[#1F2937]">Points: <span className="font-semibold">100</span></span>
            </div>
          </div>

          {/* Assignment Requirements */}
          <div className="mb-8">
            <h2 className="text-[18px] font-bold text-[#1F2937] mb-3">Assignment Requirements</h2>
            <p className="text-[14px] text-gray-600 leading-relaxed">
              Create a simple webpage with proper HTML structure that includes a heading, paragraph, button, 
              and div for displaying messages. Write the JavaScript code that changes the message text and 
              colour when the button is clicked. Use semantic HTML tags and demonstrate at least 3 different 
              DOM manipulation methods. Submit your HTML with embedded JavaScript.
            </p>
          </div>

          {/* Submission Checklist */}
          <div className="bg-[#F0F3FF] rounded-lg p-5 mb-8">
            <h3 className="text-[16px] font-bold text-[#1F2937] mb-3">Submission Checklist</h3>
            <ul className="space-y-2">
              {[
                'HTML file includes proper DOCTYPE and meta tags',
                'Use semantic HTML elements throughout',
                'JavaScript file is properly linked and functional',
                'All interactive elements work as expected',
                'Code is well organized'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-[13px] text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-green-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Submission Area */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#0029F5] transition-colors">
            <input
              type="file"
              id="fileUpload"
              accept=".html,.zip"
              multiple
              className="hidden"
              onChange={handleFileUpload}
            />
            
            <label htmlFor="fileUpload" className="cursor-pointer">
              <div className="flex flex-col items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                </svg>
                <p className="text-[14px] text-[#1F2937]">
                  Drop your file here or <span className="text-[#0029F5] font-semibold">browse</span>
                </p>
                <p className="text-[12px] text-[#6B7280]">Supports HTML, ZIP (Max 5mb per file, multiple files allowed)</p>
              </div>
            </label>
          </div>

          {/* Show uploaded files list */}
          {uploadedFiles.length > 0 && !isSubmitted && (
            <div className="mt-4 space-y-3">
              <h4 className="text-[14px] font-semibold text-[#1F2937]">Uploaded Files ({uploadedFiles.length}):</h4>
              {uploadedFiles.map((file, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-[14px] font-medium text-gray-700">{file.name}</p>
                      <p className="text-[12px] text-gray-500">
                        {(file.size / 1024).toFixed(2)} KB
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {file.type === 'text/html' && (
                      <button 
                        onClick={() => handlePreview(file)}
                        className="text-[#0029F5] hover:text-[#001Fc5] text-sm font-medium"
                      >
                        Preview
                      </button>
                    )}
                    <button 
                      onClick={() => removeFile(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
              
              {/* Submit Button */}
              <button 
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full py-2.5 rounded-md font-semibold transition-colors ${
                  isSubmitting
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-[#7C3AED] text-white hover:bg-[#6D2ED9]'
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Assignment'}
              </button>
            </div>
          )}

          {/* Success Message */}
          {isSubmitted && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[14px] font-semibold text-green-700">
                  Assignment Submitted Successfully!
                </p>
              </div>
              <p className="text-[13px] text-green-600">
                Your instructor will review your work and provide feedback.
              </p>
              <button 
                onClick={() => navigate('/dashboard')}
                className="mt-3 text-[#0029F5] hover:underline text-sm font-medium"
              >
                Back to Dashboard
              </button>
            </div>
          )}
        </div>

        {/* Right Column - Grading Rubric & Info */}
        <div className="lg:w-80">
          {/* Grading Rubric */}
          <div className="bg-white p-5 mb-6">
            <div className="flex items-center gap-2 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#D97706]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0l-4.725 2.885a.562.562 0 0 1-.84-.61l1.285-5.385a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>
              <h3 className="text-[16px] font-bold text-[#1F2937]">Grading Rubric</h3>
            </div>
            <div className="space-y-3">
              {rubricItems.map((item, index) => (
                <div key={index} className="flex justify-between flex-col ">
                  <span className="text-[13px] text-gray-700">{item.name}</span>
                  <span className="text-[13px] text-[#787a7c]">{item.points} points</span>
                </div>
              ))}
              <div className="border-t border-gray-200 pt-2 mt-2">
                <div className="flex justify-between items-center">
                  <span className="text-[14px] font-bold text-[#1F2937]">Total</span>
                  <span className="text-[14px] font-bold text-[#1F2937]">100 points</span>
                </div>
              </div>
            </div>
          </div>

          {/* Submission Guidelines Box */}
          <div className="border-l-4 border-gray-600 bg-pink-50 rounded-r-lg p-4 mb-4">
            <div className="flex items-center gap-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m-6 3.75 3 3m0 0 3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75" />
              </svg>
              <h3 className="text-[14px] font-bold text-[#1F2937]">Submission Guidelines</h3>
            </div>
            <p className="text-[12px] text-gray-600 leading-relaxed">
              Submit all files together in a single ZIP file, or upload individual HTML, CSS, and JS files. 
              Make sure your code is properly formatted and includes clear comments explaining your implementation.
            </p>
          </div>

          {/* Late Submission Policy Box */}
          <div className="border-l-4 border-gray-600 bg-red-100 rounded-r-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <h3 className="text-[14px] font-bold text-[#1F2937]">Late Submission Policy</h3>
            </div>
            <p className="text-[12px] text-gray-600 leading-relaxed">
              Late submissions will receive a 10% deduction per day. Assignments submitted more than 3 days 
              late will not be accepted unless prior arrangements have been made with your instructor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentContent;