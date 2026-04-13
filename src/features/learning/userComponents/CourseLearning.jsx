import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CourseLearning = () => {
  const navigate = useNavigate();
  const [openModule, setOpenModule] = useState('module1');
  const [activeLesson, setActiveLesson] = useState('intro');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [progress, setProgress] = useState(50);


  const toggleModule = (module) => {
    setOpenModule(openModule === module ? null : module);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const lessons = [
    { id: 'intro', title: 'Introduction to HTML', type: 'lesson', icon: '📄' },
    { id: 'internet', title: 'How the Internet Works', type: 'lesson', icon: '🌐' },
    { id: 'devtools', title: 'DevTools Basics', type: 'lesson', icon: '🛠️' },
    { id: 'assignment', title: 'Assignment', type: 'assignment', icon: '📝' },
  ];

  const moduleTwoLessons = [
    { id: 'css', title: 'CSS Fundamentals', type: 'lesson', icon: '🎨' },
    { id: 'flexbox', title: 'Flexbox Layout', type: 'lesson', icon: '📐' },
    { id: 'project', title: 'Mini Project', type: 'assignment', icon: '📝' },
  ];

  return (
    <div className="flex flex-col bg-white">
      {/* Mobile Header with Hamburger */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50 px-4 py-3 flex items-center justify-between">
        <button onClick={toggleSidebar} className="text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        <h1 className="text-lg font-semibold text-[#1F2937]">Course Learning</h1>
        <div className="w-6"></div>
      </div>

      {/* Sidebar Overlay for Mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-[#1F2937] bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static top-0 left-0 h-full w-80 bg-white border-r border-gray-200 z-50 transition-transform duration-300 overflow-y-auto
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Mobile Sidebar Header with X icon */}
        <div className="lg:hidden flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-[#1F2937]">Course Content</h2>
          <button onClick={toggleSidebar} className="text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-4">
          <h3 className="text-[14px] font-semibold text-[#1F2937] mb-4">COURSE CONTENT</h3>
          
          {/* Module One */}
          <div className="mb-2">
            <button 
              onClick={() => toggleModule('module1')}
              className="w-full flex items-center gap-2 text-left text-[14px] font-medium text-[#1F2937] py-2"
            >
              {openModule === 'module1' ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              )}
              MODULE ONE: HTML & JavaScript Basics
            </button>
            
            {openModule === 'module1' && (
              <div className="ml-6 space-y-1">
                {lessons.map((lesson) => (
                  <button
                    key={lesson.id}
                    onClick={() => setActiveLesson(lesson.id)}
                    className={`w-full flex items-center gap-2 px-3 py-2 rounded text-[13px] transition-colors ${
                      activeLesson === lesson.id 
                       ? 'text-[#0029F5]' 
                      : 'text-gray-600 hover:bg-gray-100'
                    }
                    ${isCollapsed ? 'justify-center' : ''}
                    }`}
                  >
                    <span>{lesson.icon}</span>
                    <span>{lesson.title}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Module Two */}
          <div className="mt-6">
            <button 
              onClick={() => toggleModule('module2')}
              className="w-full flex items-center gap-2 text-left text-[14px] font-medium text-[#1F2937] py-2"
            >
              {openModule === 'module2' ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              )}
              MODULE TWO: CSS & Styling
            </button>
            
            {openModule === 'module2' && (
              <div className="ml-6 space-y-1 mt-1">
                {moduleTwoLessons.map((lesson) => (
                  <button
                    key={lesson.id}
                    onClick={() => setActiveLesson(lesson.id)}
                    className={`w-full flex items-center gap-2 px-3 py-2 rounded text-[13px] transition-colors ${
                      activeLesson === lesson.id 
                        ? 'bg-[#64748B] text-white' 
                        : 'text-[#1F2937] hover:bg-gray-100'
                    }`}
                  >
                    <span>{lesson.icon}</span>
                    <span>{lesson.title}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-80 lg:-mt-300 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 lg:py-8 lg:-mb-750 bg-white">
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
            <p className="text-[14px] text-gray-600 leading-relaxed">
              While HTML provides structure, JavaScript brings your pages to life with
              interactivity. JavaScript can respond to user actions (like clicks and keyboard
              input), manipulate page content, validate form data, and communicate with 
              servers — all without requiring a page reload.
            </p>
            <p className="text-[14px] text-gray-600 leading-relaxed mt-3">
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
          <p className="text-[13px] text-gray-500 mb-8">
            As you practice these fundamental concepts, you'll develop the skills needed
            to build increasingly complex interactive web applications. The key is to
            start simple, experiment often, and gradually build your understanding 
            through hands-on coding.
          </p>

          {/* Lesson Progress */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-8">
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
            <button className="bg-[#7C3AED] text-white font-bold px-6 py-2 rounded-md hover:bg-[#6D2ED9] transition-colors">
              Mark as Complete
            </button>
            <button className="bg-[#AC7BFF] text-white font-semibold px-6 py-2 rounded-md hover:bg-[#9966E6] transition-colors">
              Next Lesson
            </button>
          </div>

          {/* Assignment Section */}
       
        </div>
      </div>
    </div>
  );
};

export default CourseLearning;