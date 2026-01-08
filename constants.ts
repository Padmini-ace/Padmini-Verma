
import { Project, Experience, SkillGroup } from './types';

export const SKILLS: SkillGroup[] = [
  {
    category: "Programming Languages",
    items: ["JavaScript", "TypeScript", "Python", "SQL", "C++"]
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "Next.js", "Tailwind CSS", "Pandas", "NumPy"]
  },
  {
    category: "Data & AI",
    items: ["Custom NLP", "Sentiment Analysis", "ML Modeling", "Feature Engineering"]
  },
  {
    category: "Tools & Platforms",
    items: ["Supabase", "Git", "GitHub", "Streamlit", "WordPress", "Framer Motion"]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "WordPress Developer Intern",
    company: "ReadyCoder Ventures Pvt. Ltd.",
    period: "Aug – Dec 2025",
    location: "Remote",
    points: [
      "Built and maintained client websites using WordPress, ensuring responsive design and performance optimization.",
      "Customized themes and plugins to meet specific functional requirements.",
      "Collaborated with cross-functional teams to translate UI designs into interactive web experiences."
    ],
    skills: ["WordPress", "UI Implementation", "Client Management"]
  },
  {
    role: "Data Analyst Intern",
    company: "EvoAstra Ventures Pvt. Ltd.",
    period: "Sep – Oct 2025",
    location: "Remote",
    points: [
      "Conducted exploratory data analysis to identify trends and patterns in business operations.",
      "Developed visualization dashboards to communicate insights to stakeholders.",
      "Assisted in refining data cleaning processes to improve pipeline reliability."
    ],
    skills: ["Data Visualization", "Pandas", "Operational Analytics"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "vibeguard",
    title: "VibeGuard",
    subtitle: "AI-Enabled Public Grievance Redressal System",
    context: "Byte Quest – AI Vibe Coding Challenge 2026, PS 12, Team CTRL//CHAOS",
    overview: "VibeGuard is an AI-powered public grievance redressal prototype designed to improve how public governance bodies handle unstructured citizen complaints by automating classification, prioritization, and routing.",
    problem: [
      "Unstructured complaint text written in natural language is hard to process.",
      "Manual routing to departments causes significant delays.",
      "Lack of clear prioritization for urgent or safety-critical issues.",
      "Poor transparency for citizens after submission."
    ],
    solution: [
      "Uses NLP to classify complaints into relevant departments (Infrastructure, Sanitation, Utilities).",
      "Assigns urgency scores based on sentiment and severity indicators.",
      "Routes complaints to the appropriate authority automatically.",
      "Provides real-time status tracking via an admin dashboard."
    ],
    role: {
      title: "Lead Full-Stack Architect",
      points: [
        "Designed the overall system architecture.",
        "Built the frontend using Next.js 15 (App Router).",
        "Implemented grievance storage and status management using Supabase.",
        "Designed custom NLP logic for categorization and urgency scoring.",
        "Created a protected admin dashboard for monitoring."
      ]
    },
    techStack: ["Next.js 15", "Tailwind CSS", "Supabase", "Custom NLP", "Lucide React"],
    decisions: [
      "Treated all user input as unstructured data to reflect real-world conditions.",
      "Prioritized transparency in UI to build citizen trust.",
      "Designed modular routing logic to allow future department expansion."
    ],
    limitations: [
      "Prototype uses logic-based NLP, not fine-tuned LLMs.",
      "Security routes are mocked, not production-authenticated.",
      "Not currently deployed for real government use."
    ],
    outcome: "Delivered a competition-ready prototype demonstrating how AI can reduce administrative delays and improve accountability in public governance."
  },
  {
    id: "quant-strategy",
    title: "Quant-Strategy-Prototype",
    subtitle: "Quantitative Trading Research Pipeline",
    overview: "A research-focused quantitative trading pipeline built to explore market signal generation, ML-based prediction, and backtesting. Explicitly a research tool, not a live trading system.",
    problem: [
      "Retail signals are often not validated through structured backtesting.",
      "ML models applied without proper feature engineering lead to poor results.",
      "Results are rarely tracked or visualized systematically."
    ],
    solution: [
      "Ingests historical market data reliably.",
      "Generates signals using a variety of technical indicators.",
      "Applies experimental ML models for direction prediction.",
      "Backtests strategies under defined constraints.",
      "Visualizes results through a Streamlit dashboard."
    ],
    role: {
      title: "Sole Developer",
      points: [
        "Designed the end-to-end research pipeline.",
        "Implemented data ingestion and preprocessing routines.",
        "Engineered technical indicator features.",
        "Built experimental ML prediction logic.",
        "Created backtesting and result visualization workflows."
      ]
    },
    techStack: ["Python", "Pandas", "NumPy", "Technical Indicators", "ML Models", "Streamlit"],
    decisions: [
      "Kept system modular to allow swapping indicators and models.",
      "Explicitly avoided live trading to focus on research validity.",
      "Logged results for comparison instead of chasing raw accuracy."
    ],
    limitations: [
      "Not connected to real-time data.",
      "ML models are experimental, not production-tuned.",
      "Results depend heavily on historical assumptions."
    ],
    outcome: "A reproducible research environment for testing and comparing quantitative trading ideas with transparency and discipline."
  },
  {
    id: "de-still",
    title: "De-Still",
    subtitle: "Strategic AI Decision Engine Prototype",
    context: "Google for Startups × Scaler – Startup School: Prompt to Prototype (Dec 2025)",
    overview: "De-Still focuses on reducing decision paralysis by converting unstructured, messy inputs into one clear priority and one actionable next step.",
    problem: [
      "Inputs are often scattered and unstructured.",
      "Too many options compete for immediate attention.",
      "AI tools generate long outputs instead of clear direction."
    ],
    solution: [
      "Analyzes unstructured user inputs using logic-based constraints.",
      "Identifies the dominant constraint or priority.",
      "Outputs a single clear decision focus.",
      "Suggests one concrete next action."
    ],
    role: {
      title: "Product Designer & Prototype Developer",
      points: [
        "Defined the decision logic and system behavior.",
        "Designed constraint-based prompting strategies.",
        "Built the working AI prototype.",
        "Focused on clarity over verbosity in outputs."
      ]
    },
    techStack: ["AI Prompting Logic", "Structured System Behavior", "Prototype Implementation Tools"],
    decisions: [
      "Forced single-output behavior to avoid information overload.",
      "Prioritized actionability over detailed explanation.",
      "Designed as a decision aid, not a general chatbot."
    ],
    limitations: [
      "Prototype-level AI logic.",
      "No long-term memory or personalization features.",
      "Not integrated into a larger platform."
    ],
    outcome: "A functional prototype demonstrating AI used as a decision compression tool rather than an information generator."
  }
];
