import class1 from "../../assets/class1.png";
import class2 from "../../assets/class2.png";
import class3 from "../../assets/class3.png";
import topPick1 from "../../assets/topPick1.png";
import topPick2 from "../../assets/topPick2.png";
import topPick3 from "../../assets/topPick3.png";
import topPick4 from "../../assets/topPick4.png";
import topPick5 from "../../assets/topPick5.png";
import topPick6 from "../../assets/topPick6.png";



export const courses = [

    {
      id:1, 
      imgg: class3,
      title: "Frontend Development: HTML, CSS and JavaScript focus",
      percentage: "5",
      totalLessons: "20",
      completeLessons: "12",
      instructor: "Oscar Audu",
      tools:["VS CODE", "Intellij IDEA", "+5" ],
      rating: 4.2,
      students: "7.3k",
      duration: "4hr 24min",
      category: "Web Development",
      module: 'Module : Introduction to Front-end Development',
    },
    {
      id:2, 
      imgg: class2,
      title: "Machine Learning Engineering: Building models with Python...",
      instructor: "Austin Okoro",
      percentage: "48",
      totalLessons: "20",
      completeLessons: "1",
      tools: ["VS CODE", "Intellij IDEA", "+8"],
      rating: 4.0,
      students: "2.3k",
      duration: "8hr 24min",
      category: "Web Development",
      module: 'Module 4: Building models with Python',
    },

    { 
      id:3, 
      imgg: class1,
      title:"Natural Language Processing (NLP): Teaching computers to understand...",
      instructor: "Sola Afeni",
      percentage: "30",
      totalLessons: "10",
      completeLessons: "3",
      tools: ["VS CODE", "Intellij IDEA", "+5"],
      rating: 4.0,
      students: "2.3k",
      duration: "8hr 24min",
      category: "Web Development",
      module: 'Module 3: Language Processing ',
    },
    {
      id:4, 
      imgg: topPick1,
      category: "AI Automation",
      title: "Product Design: Beginner’s guide to UI/UX Fundamentals",
      instructor: "John Ameh",
      tools: ["Figma", "Adobe XD", "+5"],
      rating: 4.2,
      students: "7.3k",
      duration: "4hr 24min",
      percentage: "30",
      totalLessons: "10",
      completeLessons: "3",
      module: 'Module 3: UI/UX Fundamentals ',
    },
    { 
      id:5,
      imgg: topPick2,
      category: "Animation",
      title: "Social Media Content Creation: Be a Content Creator",
      instructor: "Bethel Adeusi",
      tools: ["Canva", "CapCut", "Inshot", "+11"],
      rating: 4.8,
      students: "22k",
      duration: "12hr 34min",
      percentage: "1",
      totalLessons: "20",
      completeLessons: "1",
       module: 'Module 1: Media Content ',
    },
    {
      id:6,
      imgg: topPick3,
      category: "Data Analytics",
      title: "Adobe Creative Cloud: Photoshop, Illustrator, Premiere Pro",
      instructor: "David Gbeyoga",
      tools: ["Photoshop", "Illustrator", "+14"],
      rating: 4.5,
      students: "114k",
      duration: "18hr 24min",
      percentage: "65",
      totalLessons: "20",
      completeLessons: "12",
      module: 'Module 8: Photoshop and Illustrator,',
    },
    {
      
      id:7,
      imgg: topPick4,
      category: "Design",
      title: "Professional Photography: All You Need To Know on Photography",
      instructor: "Muna Ejiro",
      tools: ["Photoshop", "Lightroom", "+8"],
      rating: 4.2,
      students: "7.3k",
      duration: "4hr 24min",
      percentage: "1",
      totalLessons: "20",
      completeLessons: "1",
      module: 'Module 8: Photoshop and Illustrator,',
    },
    {
      
      id:8,
      imgg: topPick5,
      category: "Marketing",
      title: "Digital Marketing: Become a Pro in Marketing",
      instructor: "Dani Oluwatosin",
      tools: ["Canva", "CapCut", "Inshot", "+5"],
      rating: 4.8,
      students: "22k",
      duration: "12hr 34min",
      percentage: "30",
      totalLessons: "10",
      completeLessons: "3",
       module: 'Module 8: Digital Presence',
    },
    {
      
      id:9,
      imgg: topPick6,
      category: "Virtual Assistance",
      title: "Virtual Assistance: Be an Asset for Top CEOs",
      instructor: "James Brown",
      tools: ["HubSpot", "Salesforce", "+9"],
      rating: 4.5,
      students: "114k",
      duration: "18hr 24min",
      percentage: "65",
      totalLessons: "20",
      completeLessons: "12",
      module: 'Module 8: Digital Presence,',
    },

    {
      
      id:10,
      imgg: topPick1,
      category: "Cyber Security",
      title: "Product Design: Beginner’s guide to UI/UX Fundamentals",
      instructor: "John Ameh",
      tools: ["Figma", "Adobe XD", "+5"],
      rating: 4.2,
      students: "7.3k",
      duration: "4hr 24min",
      percentage: "1",
      totalLessons: "20",
      completeLessons: "1",
      module: 'Module 8: XSS Security',
    },
    {
    
      id:11, 
      imgg: topPick2,
      category: "Illustration",
      title: "Social Media Content Creation: Be a Content Creator",
      instructor: "Bethel Adeusi",
      tools: ["Canva", "CapCut", "Inshot", "+11"],
      rating: 4.8,
      students: "22k",
      duration: "12hr 34min",
      percentage: "30",
      totalLessons: "10",
      completeLessons: "3",
       module: 'Module 8: XSS Security,',
    },
    {
      id:12,
      imgg: topPick3,
      category: "Production & Videography",
      title: "Adobe Creative Cloud: Photoshop, Illustrator, Premiere Pro",
      instructor: "David Gbeyoga",
      tools: ["Photoshop", "Illustrator", "+14"],
      rating: 4.5,
      students: "114k",
      duration: "18hr 24min",
      percentage: "1",
      totalLessons: "20",
      completeLessons: "1",
      module: 'Module 8: XSS Security,',
    },
    {
      id:13,
      imgg: topPick4,
      category: "Web Development",
      title: "Professional Photography: All You Need To Know on Photography",
      instructor: "Muna Ejiro",
      tools: ["Photoshop", "Lightroom", "+8"],
      rating: 4.2,
      students: "7.3k",
      duration: "4hr 24min",
      percentage: "30",
      totalLessons: "10",
      completeLessons: "3",
      module: 'Module 8: XSS Security,',
    },
    {
      
      id:14,
      imgg: topPick5,
      category: "Data Science",
      title: "Digital Marketing: Become a Pro in Marketing",
      instructor: "Dani Oluwatosin",
      tools: ["Canva", "CapCut", "Inshot", "+5"],
      rating: 4.8,
      students: "22k",
      duration: "12hr 34min",
      percentage: "65",
      totalLessons: "20",
      completeLessons: "12",
      module: 'Module 8: Data Exploration,',
    },
    {
      id:15,
      imgg: topPick6,
      category: "Data Analytics",
      title: "Virtual Assistance: Be an Asset for Top CEOs",
      instructor: "James Brown",
      tools: ["HubSpot", "Salesforce", "+9"],
      rating: 4.5,
      students: "114k",
      duration: "18hr 24min",
      percentage: "1",
      totalLessons: "20",
      completeLessons: "1",
      module: 'Module 8: Data Management,',
    },
];

export const lessons = [
  {
    id: 'intro',
    title: 'Introduction to HTML',
    path: '/course/module1/intro',
    type: 'lesson',
    icon: '📄',
    content: [
      {
        topic: "Lessons Overview",
        content: "In this lesson, you will learn the fundamentals of Frontend Development, focusing on HTML (structure) and JavaScript (interactivity). By the end you will understand how websites are built and how users interact with them.",
        img: [],
      },
      {
        topic: "HTML Structure",
        content: "Every web page starts with HTML. HTML uses elements (tags) to define different types of content like headings, paragraphs, links, and images. These elements are nested into each other to create a document structure that browsers can understand and render.",
        img: [],
        
      },
      {
        topic: "Interactivity With JavaScript",
        content: "JavaScript brings your pages to life by adding interactivity. It allows you to respond to user actions, update content dynamically, and communicate with servers without reloading the page.",
        img: [],

      }
    ],
    tips: "Using semantic HTML tags like <header>, <nav>, <article>, and <footer>instead of generic <div> tags improves accessibility, SEO, and code maintainability. These meaningful tags help screen readers, search engines, and other developers understand your page structure.",
    bestPractice: "Keep your HTML, CSS, and JavaScript separate and focused on their individual responsibilities. HTML handles structure, CSS handles presentation, JavaScript handles behavior. This makes your code more maintainable, reusable, and easier to debug.y.",
    conclusion:"As you practice these fundamental concepts, you'll develop the skills needed to build increasingly complex interactive web applications. The key is to start simple, experiment often, and gradually build your understanding through hands-on coding."

   
  },

  {
    id: 'internet',
    title: 'How the Internet Works',
    path: '/course/module1/internet',
    type: 'lesson',
    icon: '🌐',
    content: [
      {
        topic: "What is the Internet?",
        content: "The internet is a global network of computers that communicate with each other. It allows users to access websites, send messages, and share information across the world.",
        img: [],
        
      },
      {
        topic: "How Websites are Accessed",
        content: "When you type a URL into your browser, a request is sent to a server. The server responds by sending back HTML, CSS, and JavaScript files which the browser renders into a webpage.",
        img: [],
    
      },
      {
        topic: "HTTP & HTTPS",
        content: "HTTP is the protocol used to transfer data between the browser and server. HTTPS is the secure version that encrypts data to protect users.",
        img: [],
      }
    ],
    tips: "Think of the browser as a client and the server as the provider.",
    bestPractice: "Always optimize your files to reduce load time, and Always use HTTPS for secure communication.",
    conclusion:"As you practice these fundamental concepts, you'll develop the skills needed to build increasingly complex interactive web applications. The key is to start simple, experiment often, and gradually build your understanding through hands-on coding."

  },

  {
    id: 'devtools',
    title: 'DevTools Basics',
    path: '/course/module1/devtools',
    type: 'lesson',
    icon: '🛠️',
    content: [
      {
        topic: "Introduction to DevTools",
        content: "DevTools are built-in tools in browsers that help developers inspect, debug, and test web applications in real time.",
        img: [],
      },
      {
        topic: "Inspecting Elements",
        content: "You can inspect HTML elements to see their structure, styles, and layout. This helps you understand how a webpage is built.",
        img: [],
    
      },
      {
        topic: "Console & Debugging",
        content: "The console allows you to run JavaScript code and view errors. It is essential for debugging your applications.",
        img: [],
        
      }
    ],

    tips: "Right-click any element and click 'Inspect'. Use console.log() to track values.",
    bestPractice: "Use this tool to debug layout and styling issues.Always fix console errors before deploying.",
    conclusion:"As you practice these fundamental concepts, you'll develop the skills needed to build increasingly complex interactive web applications. The key is to start simple, experiment often, and gradually build your understanding through hands-on coding."
  },

  {
    id: 'assignment',
    title: 'Assignment',
    path: '/course/module1/assignment',
    type: 'assignment',
    icon: '📝',
    content: [
      {
        topic: "Assignment: Build Your First Interactive Page",
        content: "Create a simple webpage with proper HTML structure that includes a heading, paragraph, button, and div for displaying messages. Write the JavaScript code that changes the message text and colour when the button is clicked. Use semantic HTML tags and demonstrate at least 3 different DOM manipulation methods. Submit your HTML with embedded JavaScript.",
        img: [],
      },
      {
        topic: "Submission Guide",
        content: "Ensure your code is properly structured and readable. Submit your project using the provided submission link.",
        img: [],
      }
    ],
    tips: "Test your page in the browser before submitting.",
    bestPractice: "Write clean and well-indented code."
  }
];

