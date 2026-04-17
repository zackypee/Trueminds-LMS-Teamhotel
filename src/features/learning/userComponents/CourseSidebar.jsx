import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const CourseSidebar = ({ onClose, activeLessonIndex, setActiveLessonIndex, lessons, completedLessons}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openModules, setOpenModules] = useState({ module1: true, module2: false });
  
  const toggleModule = (module) => {
    setOpenModules(prev => ({ ...prev, [module]: !prev[module] }));
  };

  const isActive = (path) => location.pathname === path;

  const module1Items = [
    { id: 'intro', title: 'Introduction to HTML', path: '/course/module1/intro', type: 'lesson', icon: '📄' },
    { id: 'internet', title: 'How the Internet Works', path: '/course/module1/internet', type: 'lesson', icon: '🌐' },
    { id: 'devtools', title: 'DevTools Basics', path: '/course/module1/devtools', type: 'lesson', icon: '🛠️' },
    { id: 'assignment', title: 'Assignment', path: '/course/module1/assignment', type: 'assignment', icon: '📝' },
  ];

  return (
    
    <aside className={`bg-[#F0F3FF] border-r border-gray-200 h-screen pt-20 fixed top-0 left-0 transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'}`}>
      <div className="flex flex-col h-full">
        {/* Toggle Button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-20 bg-white border border-gray-200 rounded-full p-1.5 shadow-md hover:bg-gray-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-4 h-4 transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        {/* Close button for mobile - X icon */}
        <div className="flex justify-end lg:hidden px-4 pt-4">
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Course Content Header */}
        {!isCollapsed && (
          <div className="px-4 mb-4 mt-4">
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider">
              COURSE CONTENT
            </h3>
          </div>
        )}

        {/* Menu Items */}
        <nav className="flex-1 py-6">
          <ul className="space-y-1">
            {/* Module 1 */}
            <li>
              <button 
                onClick={() => toggleModule('module1')}
                className={`w-full flex items-center gap-3 px-4 py-3 mx-2 rounded-lg transition-colors hover:bg-gray-100 ${
                  isCollapsed ? 'justify-center' : ''
                }`}
                title={isCollapsed ? 'MODULE ONE' : ''}
              >
                {openModules.module1 ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                )}
                {!isCollapsed && <span className="text-sm font-medium text-gray-700">MODULE ONE</span>}
              </button>
              
              {openModules.module1 && !isCollapsed && (
                <ul className="ml-6 space-y-1 mt-1">
                  {lessons.map((item, index) => (
                    <li key={item.id}>
                      <button
                        onClick={() => {
                          setActiveLessonIndex(index);
                        
                        }}
                        className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left transition-colors ${
                          activeLessonIndex === index 
                            ? 'text-[#0029F5] bg-blue-50' 
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        <span className="text-[13px]">{item.icon}</span>
                        <span className="text-[13px]">{item.title}</span>
                        <span>{completedLessons.includes(index) && " ✅"}</span>
                        {item.type === 'assignment' && (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 ml-auto">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
                          </svg>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Module 2 */}
            <li>
              <button 
                onClick={() => toggleModule('module2')}
                className={`w-full flex items-center gap-3 px-4 py-3 mx-2 rounded-lg transition-colors hover:bg-gray-100 ${
                  isCollapsed ? 'justify-center' : ''
                }`}
                title={isCollapsed ? 'MODULE TWO' : ''}
              >
                {openModules.module2 ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                )}
                {!isCollapsed && <span className="text-sm font-medium text-gray-700">MODULE TWO</span>}
              </button>
              
              {openModules.module2 && !isCollapsed && (
                <ul className="ml-6 space-y-1 mt-1">
                  <li>
                    <button className="w-full text-left px-3 py-2 text-[13px] text-gray-500 hover:bg-gray-100 rounded-lg">
                      📘 Coming Soon...
                    </button>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>

        {/* Footer Section */}
        <div className="p-4 border-t border-gray-200">
          <div className={`flex items-center gap-3 ${isCollapsed ? 'justify-center' : ''}`}>
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 0 1 0 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.87l-.213 1.28c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.49l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.87l.214-1.281Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </div>
            {!isCollapsed && (
              <div className="flex-1">
                <p className="text-xs text-gray-500">Settings</p>
                <p className="text-xs font-medium text-gray-700">Preferences</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
   
  );
};

export default CourseSidebar;