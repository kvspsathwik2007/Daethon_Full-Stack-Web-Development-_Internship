export const personal = {
  name: "KONIJETI VENKATA SAI PAVAN SATHWIK",
  displayName: "Sathwik",
  title: "AI & Full Stack Developer",
  headline: "Building intelligent applications and meaningful digital experiences.",
  email: "kvspsathwik2007@gmail.com",
  phone: "7995370122",
  linkedin: "https://linkedin.com/in/konijeti-sathwik-1b8361335",
  github: "https://github.com/kvspsathwik2007",
  location: "Andhra Pradesh, India",
  status: "B.Tech AIML Student · Available for internships",
};

export const about = {
  summary:
    "Ambitious B.Tech Computer Science (AI & ML) student with an 8.56/10 CGPA and skills in Python, Java, Kotlin, HTML/CSS, and React. I build practical software projects and have participated in entrepreneurship initiatives through E-Cell, IIT Bombay. Interested in AI/ML and full-stack development, with a commitment to continuous learning and project development on GitHub.",
  highlights: [
    "B.Tech Computer Science — AI & ML",
    "CGPA 8.56/10",
    "Practical AI & full-stack projects",
    "E-Cell, IIT Bombay involvement",
  ],
};

export const skills = {
  programming: ["Python", "Java", "Kotlin"],
  frontend: ["HTML5", "CSS3", "JavaScript", "React"],
  backend: ["Python", "FastAPI", "Flask", "REST APIs"],
  mobile: ["Android Studio", "XML", "Kotlin"],
  database: ["SQL", "PostgreSQL"],
  ai_ml: ["LLM APIs", "OpenRouter", "FAISS", "Sentence Transformers", "Streamlit"],
  tools: ["Git", "GitHub", "VS Code", "Android Studio"],
};

export const projects = [
  {
    id: "careerpilot",
    name: "CareerPilot AI",
    category: "AI Career Intelligence Platform",
    description:
      "AI-powered career platform featuring resume analysis, ATS keyword checks, LinkedIn profile guidance, GitHub project insights, and personalized career roadmap recommendations.",
    longDescription:
      "Built and deployed an AI-powered career platform that helps users optimize their professional profiles. It performs resume analysis, ATS keyword matching, LinkedIn guidance, GitHub project insights, and generates personalized career roadmaps using LLM APIs.",
    technologies: ["Python", "Streamlit", "LLM APIs", "OpenRouter"],
    github: null,
    live: null,
  },
  {
    id: "docassistant",
    name: "Mobile Document Assistant",
    category: "AI & Vector Search",
    description:
      "Mobile-to-backend PDF question-answering system using document extraction, chunking, embeddings, FAISS similarity search, and LLM-generated responses.",
    longDescription:
      "Developed a complete mobile-to-backend workflow for PDF question answering. Documents are extracted and chunked, embeddings are generated, FAISS handles similarity search, and responses are produced via LLM APIs (Groq).",
    technologies: ["Kotlin", "Python", "Flask", "FAISS", "Sentence Transformers", "Groq API"],
    github: null,
    live: null,
  },
  {
    id: "parksense",
    name: "ParkSense / ParkMind",
    category: "Smart Parking System",
    description:
      "Software-based smart parking demo integrating a React dashboard with FastAPI and PostgreSQL to display parking slot status and simulate occupancy updates.",
    longDescription:
      "Built a software demo connecting a React dashboard with a FastAPI backend and PostgreSQL database. It displays parking-slot status and simulates occupancy updates through API events, demonstrating real-time data flow.",
    technologies: ["React", "FastAPI", "PostgreSQL", "REST APIs"],
    github: null,
    live: null,
  },
  {
    id: "aiagent",
    name: "AI Agent Workflow Prototype",
    category: "Android & AI Agents",
    description:
      "Android prototype implementing a rule-based perception, reasoning, and response workflow for processing user intent.",
    longDescription:
      "Created an Android prototype that identifies user intent and routes requests through a rule-based perception, reasoning, and response workflow. Demonstrates foundational agent architecture on mobile.",
    technologies: ["Kotlin", "Android Studio", "XML"],
    github: null,
    live: null,
  },
];

export const experience = [
  {
    role: "Python Full Stack Development Intern",
    organization: "EduSkills Academy",
    duration: "8-week internship",
    description:
      "Completed an 8-week internship program covering Python full-stack setup, FastAPI, Pydantic, React fundamentals, state management, REST API design, SQLAlchemy, and database integration. Worked on a Text Search Indexer project as part of the internship.",
    project: "Text Search Indexer",
  },
  {
    role: "Frontend Development Intern",
    organization: "CodeAlpha",
    duration: "1 August – 30 August 2026",
    description:
      "Completed a virtual internship program in frontend development. Gained practical experience with frontend development tasks and user-facing web interfaces.",
    project: null,
  },
];

export const education = [
  {
    degree: "B.Tech (Computer Science — AI & ML)",
    institution: "QIS College of Engineering and Technology",
    duration: "2024–2028",
    score: "CGPA: 8.56/10",
  },
  {
    degree: "Class XII (Intermediate — MPC)",
    institution: "Sri Pratibha Junior College",
    duration: "2022–2024",
    score: "96.7%",
  },
  {
    degree: "Class X (SSC)",
    institution: "Sri Gurudatta High School",
    duration: "2021–2022",
    score: "94.7%",
  },
];

export const certifications = [
  {
    title: "Python Foundation",
    issuer: "HackerRank / Code With Swaroop",
  },
  {
    title: "Web Development Foundation",
    issuer: "Code With Swaroop",
  },
  {
    title: "Android App Development (Kotlin)",
    issuer: "Self-paced",
  },
  {
    title: "Entrepreneurship Training",
    issuer: "E-Cell, IIT Bombay",
  },
  {
    title: "E-Cell Executive Member",
    issuer: "IIT Bombay — on-campus entrepreneurship events & workshop coordination",
  },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];
