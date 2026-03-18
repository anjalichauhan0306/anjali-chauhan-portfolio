export const projects = [
  {
    id: 1,
    type: "Full Stack Auth System",
    name: "SecureAuth — JWT Auth Platform",
    description:
      "Production-level authentication system with role-based access control, refresh tokens, and password hashing.",
    features: [
      "JWT access + refresh token flow",
      "Role-based access (Admin / User)",
      "bcrypt password hashing",
      "Email verification via Nodemailer",
    ],
    stack: ["Node.js", "Express", "MongoDB", "JWT", "React"],
    github: "https://github.com/anjali-chauhan",
    live: "#",
  },
  {
    id: 2,
    type: "Full Stack E-commerce System",
    name: "ShopForge — Scalable E-commerce Platform",
    description:
      "Production-ready e-commerce platform with product management, cart & checkout, Stripe payments, role-based access, real-time order tracking, notifications, and admin analytics.",
    features: [
      "Product CRUD with filtering & search",
      "Cart, order & checkout workflow",
      "Stripe payments & role-based access",
      "Real-time tracking, notifications & admin analytics",
    ],
    stack: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Redux",
      "Stripe",
      "Tailwind",
    ],
    github: "https://github.com/anjali-chauhan/shopforge",
    live: "#",
  },
  {
    id: 3,
    type: "Full Stack Application",
    name: "DevTrack — AI Powered LMS Platform",
    description:
      "Scalable LMS platform with role-based dashboards, secure authentication, AI-powered quizzes, course management, analytics, dynamic certificates, and voice interaction.",
    features: [
      "Role-based dashboards (Student, Educator, Admin)",
      "JWT authentication & authorization",
      "AI-powered quiz & exam generation",
      "Course management, analytics, certificates & voice interaction",
    ],
    stack: ["Node.js", "Express", "MongoDB", "React", "JWT"],
    github: "https://github.com/anjalichauhan0306/DevTrack-Learning-Platfrom",
    live: "https://devtrack-topaz.vercel.app/",
  },
  {
    id: 4,
    type: "Production-Level REST API",
    name: "CoreAPI — Production REST API",
    description:
      "Fully-documented REST API with pagination, filtering, rate limiting, caching, and Swagger docs.",
    features: [
      "Pagination + filtering + sorting",
      "Rate limiting + helmet security",
      "Swagger / Postman documentation",
      "Redis caching for performance",
    ],
    stack: ["Node.js", "Express", "MongoDB", "Redis", "Swagger"],
    github: "https://github.com/anjali-chauhan",
    live: "#",
    liveLabel: "Docs",
  },
  {
    id: 5,
    type: "SaaS Dashboard App",
    name: "Dashify — SaaS Admin Platform",
    description:
      "Multi-tenant SaaS dashboard with admin panel, user management, analytics charts, and subscription system.",
    features: [
      "Multi-tenant architecture",
      "Admin panel + user roles",
      "Analytics with Chart.js",
      "Subscription billing (Stripe)",
    ],
    stack: ["MERN", "Chart.js", "Stripe", "Tailwind"],
    github: "https://github.com/anjali-chauhan",
    live: "#",
  },
  {
    id: 6,
    type: "Full Stack Wellness Platform",
    name: "Sarthi — Mental Health and Wellness Webapp",
    description:
      "Full-stack wellness platform with emotion-based content recommendations, secure data handling, chatbot guidance, progress tracking, and daily spiritual content.",
    features: [
      "Emotion-based content recommendation",
      "Secure authentication & encrypted data",
      "Chatbot for wellness guidance",
      "Progress tracking & daily Gita shlok module",
    ],
    stack: ["MongoDB", "Express", "React", "Node.js", "MERN"],
    github: "#",
    live: "#",
  },
  {
    id: 7,
    type: "Full Stack AI Application",
    name: "AI Thumbnail Generator — YouTube Thumbnail Creator",
    description:
      "Full-stack AI application to generate YouTube thumbnails with user authentication, database storage, and deployment like a production project.",
    features: [
      "AI-powered thumbnail generation",
      "User signup & login authentication",
      "Save thumbnails to database",
      "Deploy as a production-ready app",
    ],
    stack: ["Node.js", "Express", "React", "MongoDB", "AI APIs"],
    github: "#",
    live: "#",
  },
];
