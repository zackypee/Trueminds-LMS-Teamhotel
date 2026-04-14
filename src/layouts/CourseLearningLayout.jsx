import { useState, useEffect } from "react";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";

export default function CourseLearningLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [openModules, setOpenModules] = useState({ module1: true, module2: false });

  // Check if mobile on resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close sidebar when switching to desktop
  useEffect(() => {
    if (!isMobile) {
      setIsSidebarOpen(false);
    }
  }, [isMobile]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

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
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      {/* ========== NAVBAR / HEADER ========== */}
      <nav className="bg-white border-b border-gray-200 fixed w-full top-0 z-50">
        <div className="px-4 py-3 mx-auto flex items-center justify-between">
          {/* Logo Section with Hamburger Menu */}
          <div className="flex items-center gap-3">
            {/* Hamburger Menu Button - Only visible on mobile */}
            <button
              onClick={toggleSidebar}
              className="lg:hidden text-gray-600 hover:text-[#0029F5] focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
            
            <Link to="/user-dashboard" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#0029F5] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-bold text-[#1F2937] hidden sm:block">TalentFlow</span>
            </Link>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex items-center bg-gray-50 rounded-lg px-3 py-2 w-96">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <input
              type="text"
              placeholder="Search courses, assignments..."
              className="bg-transparent ml-2 outline-none text-sm w-full"
            />
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Notifications */}
            <button className="relative text-gray-600 hover:text-[#0029F5]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
            </button>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 focus:outline-none"
              >
                <div className="w-8 h-8 bg-[#7C3AED] rounded-full flex items-center justify-center text-white font-semibold">
                  CO
                </div>
                <span className="hidden md:block text-sm font-medium text-[#1F2937]">Chika Okafor</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <Link to="/dashboard/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    View Profile
                  </Link>
                  <Link to="/dashboard/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Settings
                  </Link>
                  <hr className="my-1" />
                  <button 
                    onClick={() => navigate('/login')}
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* ========== SIDEBAR ========== */}
      {/* Mobile Overlay */}
      {isSidebarOpen && isMobile && (
        <div 
          className="fixed inset-0 bg-opacity-50 z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar Content - Fixed positioning without pushing content */}
      <div className={`
        fixed lg:fixed top-16 left-0 z-40 bg-[#f8fafc] border-r border-gray-200 h-full overflow-y-auto transition-transform duration-300
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        w-80
      `}>
        <div className="p-4">
          {/* Close button for mobile */}
          {isMobile && (
            <div className="flex justify-end mb-4">
              <button onClick={closeSidebar} className="p-2 hover:bg-gray-100 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}

          <h2 className="text-[14px] font-semibold text-[#1F2937] mb-4">COURSE CONTENT</h2>
          
          {/* Module 1 */}
          <div className="mb-2">
            <button 
              onClick={() => toggleModule('module1')}
              className="w-full flex items-center gap-2 text-left py-2 hover:bg-gray-50 rounded-lg px-2"
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
              <span className="text-[14px] font-medium text-[#1F2937]">MODULE ONE</span>
            </button>
            
            {openModules.module1 && (
              <div className="ml-6 space-y-1 mt-1">
                {module1Items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      navigate(item.path);
                      if (isMobile) closeSidebar();
                    }}
                    className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left transition-colors ${
                      isActive(item.path) 
                        ? 'bg-gray-100 text-[#0f6cee]' 
                        : 'text-[#1F2937] hover:bg-gray-100'
                    }`}
                  >
                    <span className="text-[13px]">{item.icon}</span>
                    <span className="text-[13px]">{item.title}</span>
                    {item.type === 'assignment' && (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 ml-auto">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Module 2 */}
          <div className="mt-6">
            <button 
              onClick={() => toggleModule('module2')}
              className="w-full flex items-center gap-2 text-left py-2 hover:bg-gray-50 rounded-lg px-2"
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
              <span className="text-[14px] font-medium text-[#1F2937]">MODULE TWO</span>
            </button>
            
            {openModules.module2 && (
              <div className="ml-6 space-y-1 mt-1">
                <button className="w-full text-left px-3 py-2 text-[13px] text-gray-500 hover:bg-gray-100 rounded-lg">
                  📘 Coming Soon...
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ========== MAIN CONTENT ========== */}
      <div className="flex-1 lg:ml-80 bg-white">
        <div className="pt-16 lg:pt-20">
          <Outlet />
        </div>
      </div>
    </div>
  );
}