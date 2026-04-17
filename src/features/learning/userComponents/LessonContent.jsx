import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LessonContent = ({currentLesson, completedLessons, totalLessons,activeLessonIndex, handleNextLesson, handleCompleteLesson, progress, currentLessonNumber }) => {
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
  
 

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 md:py-8 bg-white w-full mt-25 ">
      {/* Course Title */}
      <h1 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-[#1F2937] text-center mb-8">
        {currentLesson.title}
      </h1>
      {currentLesson.content.map((item, index) => (
      < div
        key={index}
      >
        {/* Lesson Overview */}
        <div className="mb-6">
          <h2 className="text-[18px] font-semibold text-[#1F2937] mb-2">{item.topic}</h2>
          <p className="text-[14px] text-gray-600 leading-relaxed">
            {item.content}
          </p>
        </div>

        

        {/* Video Placeholder */}
        {item.img.length > 0 && (
          <div className="bg-gray-200 rounded-lg aspect-video mb-6 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-gray-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.986V5.653z" />
          </svg>
        </div>)
        }

    

        {/* Image Placeholder */}
        {item.img.length > 0 &&
        <div className="bg-gray-200 rounded-lg h-48 mb-6 flex items-center justify-center">
          <span className="text-gray-400">HTML Structure Diagram</span>
        </div>
        }
      </div>
      ))}

      {/* Pro Tip Box */}

      {currentLesson.tips && 
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xl">💡</span>
          <span className="text-[14px] font-semibold text-[#1F2937]">Pro Tip</span>
        </div>
        <p className="text-[13px] text-gray-600">
          {currentLesson.tips}
        </p>
      </div>}

      {/* Best Practices Box */}

      {currentLesson.bestPractice &&
      <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg mb-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <span className="text-[12px] font-semibold text-[#1F2937]">Best Practices: Separation of Concerns</span>
        </div>
        <p className="text-[12px] text-gray-600">
          {currentLesson.bestPractice}
        </p>
      </div>
      }

      {/* Conclusion */}
      <p className="text-[13px] text-gray-500 leading-relaxed mb-8">
        {currentLesson.conclusion}
      </p>

      {/* Lesson Progress */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
        
        <span className="text-[13px] text-gray-500">
          Lesson {currentLessonNumber} of {totalLessons}
        </span>

        <div className="flex-1 w-full sm:w-auto">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="h-2 rounded-full transition-all duration-500 bg-[#0D9488]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
        <button 
          onClick={handleCompleteLesson}
          disabled={completedLessons.includes(activeLessonIndex)}
          className={`px-6 py-2 rounded-md font-bold transition-colors ${
            completedLessons.includes(activeLessonIndex)
           
            ? 'bg-gray-400 text-white cursor-not-allowed' 
            : 'bg-[#7C3AED] text-white hover:bg-[#6D2ED9]'
          }`}
        >
          {completedLessons.includes(activeLessonIndex)? '✓ Completed' : 'Mark as Complete'}
        </button>
        <button 
         onClick={handleNextLesson}
         disabled={!completedLessons.includes(activeLessonIndex)}
         className={`${!completedLessons.includes(activeLessonIndex)? `bg-[#AC7BFF]`:`bg-[#7C3AED]`} text-white font-semibold px-6 py-2 rounded-md hover:bg-[#9966E6] transition-colors`}
        > 
           Next Lesson →
        </button>

      </div>
      
      {/* Assignment Section */}
      { currentLesson.id === "assignment" &&
      <div className="border-t border-gray-200 pt-6">
        <div className="flex items-center gap-2 mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
          </svg>
          <h3 className="text-[16px] font-semibold text-[#1F2937]">Submission: Submit Your Task Here</h3>
        </div>
        <p className="text-[14px] text-gray-600 leading-relaxed mb-4">
          Upload a clean file
        </p>

        {/* File Upload */}
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
                onClick={() => navigate('../dashboard')}
                className="mt-3 text-[#0029F5] hover:underline text-sm font-medium"
              >
                Back to Dashboard
              </button>
            </div>
          )}
      </div>
      }
    </div>
  );
};

export default LessonContent;