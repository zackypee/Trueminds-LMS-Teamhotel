import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LessonContent = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(50);
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 md:py-8 bg-white">
      {/* Course Title */}
      <h1 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-[#1F2937] text-center mb-8">
        Frontend Development: HTML, CSS and JavaScript
      </h1>

      {/* Lesson Overview */}
      <div className="mb-6">
        <h2 className="text-[18px] font-semibold text-[#1F2937] mb-2">Lesson Overview</h2>
        <p className="text-[14px] text-gray-600 leading-relaxed">
          In this lesson, you will learn the fundamentals of Frontend Development,
          focusing on HTML (structure) and JavaScript (interactivity). By the end you will
          understand how websites are built and how users interact with them.
        </p>
      </div>

      {/* Build Your First Page */}
      <div className="mb-6">
        <h3 className="text-[16px] font-bold text-[#1F2937] mb-3">Build Your First Page</h3>
        <p className="text-[14px] text-gray-600 leading-relaxed mb-3">
          Every web page starts with HTML. HTML uses elements (tags) to define
          different types of content like headings, paragraphs, links, and images.
          These elements are nested into each other to create a document structure
          that browsers can understand and render.
        </p>
        <p className="text-[14px] text-gray-600 leading-relaxed">
          The basic structure of an HTML document includes a DOCTYPE declaration,
          an HTML element containing head and body structure. The head contains 
          metadata and links to resources, while the body contains visible content
          users can interact with.
        </p>
      </div>

      {/* Video Placeholder */}
      <div className="bg-gray-200 rounded-lg aspect-video mb-6 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-gray-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.986V5.653z" />
        </svg>
      </div>

      {/* Pro Tip Box */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xl">💡</span>
          <span className="text-[14px] font-semibold text-[#1F2937]">Pro Tip</span>
        </div>
        <p className="text-[13px] text-gray-600">
          Using semantic HTML tags like {'<header>'}, {'<nav>'}, {'<article>'}, and {'<footer>'}
          instead of generic {'<div>'} tags improves accessibility, SEO, and code
          maintainability. These meaningful tags help screen readers, search 
          engines, and other developers understand your page structure.
        </p>
      </div>

      {/* Image Placeholder */}
      <div className="bg-gray-200 rounded-lg h-48 mb-6 flex items-center justify-center">
        <span className="text-gray-400">HTML Structure Diagram</span>
      </div>

      {/* Add Interactivity */}
      <div className="mb-6">
        <h3 className="text-[16px] font-bold text-[#1F2937] mb-3">Add Interactivity with JavaScript</h3>
        <p className="text-[14px] text-gray-600 leading-relaxed mb-3">
          While HTML provides structure, JavaScript brings your pages to life with
          interactivity. JavaScript can respond to user actions (like clicks and keyboard
          input), manipulate page content, validate form data, and communicate with 
          servers — all without requiring a page reload.
        </p>
        <p className="text-[14px] text-gray-600 leading-relaxed">
          JavaScript works by manipulating the Document Object Model (DOM), which
          is a programming interface that represents your HTML as a tree of objects.
          Every HTML element becomes a JavaScript object that you can select, 
          modify, create, or remove using JavaScript code.
        </p>
      </div>

      {/* Best Practices Box */}
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
          Keep your HTML, CSS, and JavaScript separate and focused on their
          individual responsibilities. HTML handles structure, CSS handles
          presentation, JavaScript handles behavior. This makes your code
          more maintainable, reusable, and easier to debug.
        </p>
      </div>

      {/* Conclusion */}
      <p className="text-[13px] text-gray-500 leading-relaxed mb-8">
        As you practice these fundamental concepts, you'll develop the skills needed
        to build increasingly complex interactive web applications. The key is to
        start simple, experiment often, and gradually build your understanding 
        through hands-on coding.
      </p>

      {/* Lesson Progress */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
        <span className="text-[13px] text-gray-500">Lesson 6 of 12</span>
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
          onClick={() => setIsCompleted(true)}
          disabled={isCompleted}
          className={`px-6 py-2 rounded-md font-bold transition-colors ${
            isCompleted 
              ? 'bg-gray-400 text-white cursor-not-allowed' 
              : 'bg-[#7C3AED] text-white hover:bg-[#6D2ED9]'
          }`}
        >
          {isCompleted ? '✓ Completed' : 'Mark as Complete'}
        </button>
        <button className="bg-[#AC7BFF] text-white font-semibold px-6 py-2 rounded-md hover:bg-[#9966E6] transition-colors">
          Next Lesson →
        </button>
      </div>

      {/* Assignment Section */}
      <div className="border-t border-gray-200 pt-6">
        <div className="flex items-center gap-2 mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
          </svg>
          <h3 className="text-[16px] font-semibold text-[#1F2937]">Assignment: Build Your First Interactive Page</h3>
        </div>
        <p className="text-[14px] text-gray-600 leading-relaxed mb-4">
          Create a simple webpage with proper HTML structure that includes a heading,
          paragraph, button, and div for displaying messages. Write the JavaScript code
          that changes the message text and colour when the button is clicked. Use semantic HTML
          tags and demonstrate at least 3 different DOM manipulation methods. Submit your 
          HTML with embedded JavaScript.
        </p>

        {/* File Upload */}
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#0029F5] transition-colors cursor-pointer">
          <div className="flex flex-col items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
            </svg>
            <p className="text-[14px] text-[#1F2937]">
              Drop your HTML file here or <span className="text-[#0029F5] font-semibold">browse</span>
            </p>
            <p className="text-[12px] text-[#6B7280]">Supports HTML, ZIP (Max 5mb)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonContent;