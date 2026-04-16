const lessons = [
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

export default lessons;