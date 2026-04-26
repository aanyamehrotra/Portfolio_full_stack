export const portfolioData = {
  name: "Aanya Mehrotra",
  role: "Full Stack Developer",
  subRole: "AI Engineer",
  folio: "Full Stack / 2024 — 2025",
  email: "aanya.mehrotra2024@nst.rishihood.edu.in",
  location: "New Delhi, India",
  summary:
    "2nd-year B.Tech student (AI) specializing in full-stack development and agentic AI systems, with production-level experience building real-time platforms, LLM pipelines, RAG systems, and multi-agent workflows. Focused on scalable architecture, clean APIs, and shipping products that work.",
  links: {
    linkedin: "https://www.linkedin.com/in/aanya-mehrotra-858567331/",
    github: "https://github.com/aanyamehrotra",
    leetcode: "https://leetcode.com/u/5znk78DMim/",
  },
  experience: [
    {
      role: "Software Development Engineer (Intern)",
      company: "Plugseal Innovations",
      duration: "May 2025 — July 2025",
      type: "Remote",
      bullets: [
        "Designed and shipped 3 end-to-end full-stack products (Dentaire, Groway, ScoreQuest) using React, Next.js, Node.js, and PostgreSQL, each with responsive UIs and structured backend APIs.",
        "Built and integrated RESTful APIs covering authentication flows, form submissions, and CRUD operations — maintaining clean data contracts between frontend and backend across all projects.",
        "Followed production-grade engineering practices: modular component architecture, Git-based version control, reusable service layers, and consistent code review cycles.",
      ],
    },
  ],
  projects: [
    {
      id: 1,
      title: "HireX — Real-Time Interview Platform",
      shortTitle: "HIREX",
      tag: "Full Stack / Real-Time Engineering",
      description:
        "End-to-end interview platform supporting real-time video calls, screen sharing, and collaborative coding using React, WebRTC, and Socket.io — designed for low-latency peer-to-peer sessions.",
      tech: ["React", "WebRTC", "Socket.io", "Node.js", "Express"],
      github: "https://github.com/aanyamehrotra/HireX",
      demo: "https://hire-x-pearl.vercel.app/",
      side: "right",
    },
    {
      id: 2,
      title: "Intelligent Credit Risk Scoring System",
      shortTitle: "CREDIT RISK AI",
      tag: "Agentic AI / LangGraph",
      description:
        "Production-level agentic AI lending system using LangGraph (8-node stateful workflow), Groq LLM (llama-3.3-70b), and RAG over RBI regulatory documents — delivering personalized, explainable credit decisions end-to-end.",
      tech: ["LangGraph", "Groq", "ChromaDB", "XGBoost", "Python", "Streamlit"],
      github: "https://github.com/aditya-1509/agentic_genai_capstone_main-",
      demo: "https://genainewcapstone-79qdf3zq3d63dses5njzru.streamlit.app/",
      side: "left",
    },
    {
      id: 3,
      title: "Sentinel — AI File Organization Agent",
      shortTitle: "SENTINEL",
      tag: "Agentic Systems / FastAPI",
      description:
        "Local-first agentic file cleanup system on a 4-layer N-tier architecture where a locally running LLM generates structured JSON cleanup plans processed through a deterministic safety validator before any filesystem action.",
      tech: ["FastAPI", "SQLite", "Next.js", "Tauri", "Python", "LLM"],
      github: "https://github.com/Mystic-commits/Sentinel",
      demo: null,
      side: "right",
    },
    {
      id: 4,
      title: "FitFusion — Full Stack Fitness App",
      shortTitle: "FITFUSION",
      tag: "Full Stack / MERN",
      description:
        "Full-stack fitness app where users can browse workout programs, set personal goals, and track progress — built with React, Node.js, Express, and MongoDB with JWT auth and personalized dashboards.",
      tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      github: "https://github.com/aanyamehrotra/FitFusion",
      demo: "https://fit-fusion-lac.vercel.app/",
      side: "left",
    },
    {
      id: 5,
      title: "Plugseal — Dentaire / Groway / ScoreQuest",
      shortTitle: "PLUGSEAL PRODUCTS",
      tag: "SDE Internship / Production",
      description:
        "Three end-to-end full-stack products shipped during internship at Plugseal Innovations — responsive UIs, structured backend APIs, auth flows, CRUD operations, and production-grade component architecture.",
      tech: ["React", "Next.js", "Node.js", "PostgreSQL", "REST APIs"],
      github: null,
      demo: null,
      side: "right",
    },
  ],
  skills: {
    frontend: ["React", "Next.js", "TypeScript", "HTML", "CSS", "Tailwind CSS", "Figma"],
    backend: ["Node.js", "Express.js", "Python", "FastAPI", "REST APIs", "WebSockets"],
    databases: ["MongoDB", "PostgreSQL", "MySQL", "SQLite", "ChromaDB"],
    ai: ["LangChain", "LangGraph", "Groq", "OpenAI API", "Hugging Face", "RAG", "XGBoost"],
    tools: ["Git", "GitHub Actions", "WebRTC", "Socket.io", "Prisma ORM", "Tauri", "Streamlit"],
  },
};
