import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import chika from '../../../assets/chika.jpg'; 
import ejike from '../../../assets/ejike.jpg';
import frontend from '../../../assets/frontend.jpg';
import languages from '../../../assets/languages.jpg';


const UserDashboardContent = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: 'Chika Okafor',
    email: 'chika@example.com',
    progress: 62
  });
  const [loading, setLoading] = useState(true);
  const [activeCourses, setActiveCourses] = useState([
    {
      id: 1,
      title: 'Natural Language Processing (NLP): Teaching computers to understand...',
      module: 'Module 4: User Research Methods',
      progress: 30,
      image: languages,
      color: '#0D9488'
    },
    {
      id: 2,
      title: 'Frontend Development: HTML, CSS and JavaScript focus',
      module: 'Module 2: Editorial Layouts',
      progress: 65,
      image: frontend,
      color: '#0D9488'
    }
  ]);
  const [upcomingTasks, setUpcomingTasks] = useState([
    {
      id: 1,
      label: 'DUE TOMORROW',
      title: 'Case Study: Mental Health App Discovery',
      dueDate: '2026-04-12T23:50:00',
      priority: 'high',
      type: 'assignment'
    },
    {
      id: 2,
      label: 'IN 3 DAYS',
      title: 'Interaction Design Quiz #2',
      dueDate: '2026-04-14T23:59:00',
      priority: 'medium',
      type: 'quiz',
      questions: 15
    },
    {
      id: 3,
      title: 'Final Project: Portfolio Structure',
      dueDate: '2024-03-28T23:59:00',
      priority: 'low',
      type: 'project'
    }
  ]);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      user: 'Eze Chika',
      action: 'sent a quick message',
      time: '2024-03-19T10:00:00',
      avatar: chika
    },
    {
      id: 2,
      user: 'Ejike Micheal',
      action: 'shared a new resource:',
      resource: 'Auto-Layout Cheat Sheet',
      time: '2024-03-19T15:00:00',
      avatar: ejike
    }
  ]);

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      try {
        // TODO: Replace with actual API call when ready
        setTimeout(() => {
          setLoading(false);
        }, 500);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const formatDueDate = (dateString) => {
    const dueDate = new Date(dateString);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    if (dueDate.toDateString() === tomorrow.toDateString()) {
      return { label: 'DUE TOMORROW', color: '#0029F5' };
    }
    
    const daysDiff = Math.ceil((dueDate - today) / (1000 * 60 * 60 * 24));
    if (daysDiff <= 3) {
      return { label: `IN ${daysDiff} DAYS`, color: '#455F87' };
    }
    
    return { label: 'NEXT WEEK', color: '#94A3B8' };
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  const formatRelativeTime = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const hoursDiff = Math.floor((now - date) / (1000 * 60 * 60));
    
    if (hoursDiff < 1) return 'Just now';
    if (hoursDiff < 24) return `${hoursDiff} hours ago`;
    return `${Math.floor(hoursDiff / 24)} days ago`;
  };

  const getPendingCount = () => {
    return upcomingTasks.filter(task => {
      const dueDate = new Date(task.dueDate);
      return dueDate > new Date();
    }).length;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full bg-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0029F5] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
  <div className="bg-white min-h-full p-4 sm:p-6 md:p-8">
    {/* Welcome Section */}
    <div className="mb-6 sm:mb-8">
      <h1 className="text-[28px] sm:text-[32px] md:text-[36px] font-bold leading-tight mt-16 sm:mt-18 md:mt-20">
        <span className="text-[#1F2937]">Welcome back, </span>
        <span className="text-[#0029F5] block inline">{userData.name}</span>
        <span className="text-[#1F2937] hidden sm:inline">!</span>
      </h1>
      <p className="text-[14px] font-normal text-[#6B7280] mt-2">
        Your "Modern Mentor" journey is {userData.progress}% complete for this month. You're doing great!
      </p>
    </div>

    {/* Two Column Layout */}
    <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
      {/* Left Column - Active Learning */}
      <div className="w-full lg:w-[60%]">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
          <h2 className="text-[20px] sm:text-[22px] md:text-[24px] font-semibold text-[#1F2937]">Active Learning</h2>
          <button 
            onClick={() => navigate('/courses')}
            className="text-[14px] font-semibold text-[#0029F5] hover:underline cursor-pointer"
          >
            View All Courses
          </button>
        </div>

        {/* Course Cards */}
        <div className="space-y-4">
          {activeCourses.map((course) => (
            <div 
              key={course.id}
              className="border border-gray-200 rounded-[10px] bg-[#F0F3FF] p-3 sm:p-4 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => navigate(`../course`)}
            >
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                {/* Course Image */}
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full sm:w-[108px] h-[98px] object-cover rounded"
                />
                
                {/* Course Details */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                    <h3 className="text-[14px] sm:text-[16px] font-normal text-[#1F2937] leading-[28.8px] flex-1">
                      {course.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-[14px] font-extrabold text-[#001C3B]">
                        {course.progress}%
                      </span>
                      <button 
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                          course.id === 1 
                            ? 'text-[#630ED4] hover:bg-[#4a0aa3] bg-white' 
                            : 'text-[#455F87] hover:bg-[#2d4a6e] bg-white'
                        }`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                          <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <p className="text-[12px] sm:text-[14px] font-normal text-[#455F87] leading-[20px] mt-1">
                    {course.module}
                  </p>
                  {/* Progress Bar */}
                  <div className="mt-3">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full transition-all duration-500"
                        style={{ 
                          width: `${course.progress}%`,
                          backgroundColor: course.color 
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ready for More Box */}
        <div className="mt-6 sm:mt-8 md:mt-12 bg-gradient-to-r from-[#455F87] to-[#0D9488] rounded-[8px] p-4 sm:p-6 text-white md:w-xs">
          <h3 className="text-[16px] sm:text-[18px] font-extrabold leading-[28px]">Ready for more?</h3>
          <p className="text-[10px] sm:text-[14px] font-normal mt-1">Explore 50+ new specialized tracks released today.</p>
          <button 
            onClick={() => navigate('/catalogue')}
            className="mt-4 bg-white text-[#1F2937] w-full sm:w-auto px-6 sm:px-16 py-2 rounded-[6px] cursor-pointer font-semibold text-[14px] hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
          >
            Browse Courses
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Right Column - Upcoming Tasks */}
      <div className="w-full lg:w-[30%] lg:ml-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
          <h2 className="text-[20px] sm:text-[22px] md:text-[24px] font-bold text-[#001C3B]">Upcoming Tasks</h2>
          <div className="bg-[#D97706] rounded-[2px] px-2 py-1">
            <span className="text-white text-[12px] sm:text-[14px] font-semibold">{getPendingCount()} Pending</span>
          </div>
        </div>

        {/* Tasks List */}
        <div className="space-y-3 sm:space-y-4">
          {upcomingTasks.map((task) => {
            const dueInfo = formatDueDate(task.dueDate);
            
            // Different border colors based on priority
            const getBorderColor = () => {
              if (task.priority === 'high') return 'border-[#630ED4]'; 
              if (task.priority === 'medium') return 'border-brown'; 
              return 'border-[#CCC3D84D]'; 
            };
            return (
              <div 
                key={task.id}
                className={`border-l-2 ${getBorderColor()} pl-3 sm:pl-4 py-2 hover:bg-gray-50 transition-colors cursor-pointer`}
                onClick={() => navigate(`/assignments/${task.id}`)}
              >
                <div className="text-[10px] font-bold" style={{ color: dueInfo.color }}>
                  {dueInfo.label}
                </div>
                <h3 className="text-[13px] sm:text-[14px] font-bold text-[#001C3B] mt-1">{task.title}</h3>
                {task.type === 'quiz' && (
                  <div className="text-[11px] sm:text-[12px] font-normal text-[#455F87] mt-1">
                    {task.questions} Questions
                  </div>
                )}
                {task.type === 'assignment' && (
                  <div className="flex items-center gap-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 sm:w-4 sm:h-4 text-[#455F87]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[12px] sm:text-[14px] font-normal text-[#455F87]">{formatTime(task.dueDate)}</span>
                  </div>
                )}
                {task.type === 'project' && (
                  <div className="text-[11px] sm:text-[12px] font-normal text-[#455F87] mt-1">
                    Due {new Date(task.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* All Assignments Link */}
        <div className="mt-4 text-center">
          <button 
            onClick={() => navigate('/assignments')}
            className="w-full border border-[#E5E7EB] rounded-[6px] py-2.5 sm:py-3 text-[13px] sm:text-[14px] font-semibold text-[#4A4455] hover:bg-gray-50 transition-colors"
          >
            All Assignments
          </button>
        </div>

        {/* Collaboration Hub */}
        <div className="mt-6 bg-[#F0F3FF] rounded-[6px] p-4 sm:p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[16px] sm:text-[18px] font-extrabold text-[#001C3B]">Collaboration Hub</h3>
            <button className="border-2 border-[#0029F5] rounded-full p-1 hover:bg-[#0029F5] hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 sm:w-4 sm:h-4 text-[#0029F5] hover:text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
          
          {/* Notifications */}
          <div className="space-y-3 sm:space-y-4">
            {notifications.map((notification) => (
              <div key={notification.id} className="flex gap-2 sm:gap-3">
                <img 
                  src={notification.avatar} 
                  alt={notification.user}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#0029F5] object-cover"
                />
                <div className="flex-1">
                  <p className="text-[11px] sm:text-[12px] leading-[14px] sm:leading-[16px]">
                    <span className="font-bold text-[#001C3B]">{notification.user}</span>
                    <span className="font-normal text-[#001C3B]"> {notification.action}</span>
                    {notification.resource && (
                      <span className="font-medium text-[#630ED4]"> {notification.resource}</span>
                    )}
                  </p>
                  <p className="text-[9px] sm:text-[10px] font-normal text-[#455F87] mt-1">
                    {formatRelativeTime(notification.time)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>

  );
};

export default UserDashboardContent;