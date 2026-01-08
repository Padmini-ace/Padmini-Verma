
export interface Project {
  id: string;
  title: string;
  subtitle: string;
  overview: string;
  problem: string[];
  solution: string[];
  role: {
    title: string;
    points: string[];
  };
  techStack: string[];
  decisions: string[];
  limitations: string[];
  outcome: string;
  context?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
  skills: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}
