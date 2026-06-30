export type ProjectCategory =
  | "Robotics"
  | "Control & Estimation"
  | "Fabrication"
  | "Research";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  category: ProjectCategory;
  summary: string;
  highlights: string[];
  tags: string[];
  featured: boolean;
  image: string;
  metrics?: { label: string; value: string }[];
}

export interface Experience {
  id: string;
  role: string;
  org: string;
  period: string;
  bullets: string[];
}

export interface Profile {
  name: string;
  tagline: string;
  email: string;
  github: string;
  githubUrl: string;
  linkedin: string;
  linkedinUrl: string;
  resumeUrl: string;
  location: string;
  availability: string;
  summary: string;
  education: {
    school: string;
    degrees: string;
    expected: string;
    coursework: string[];
  };
  skills: {
    category: string;
    items: string[];
  }[];
}

export const profile: Profile = {
  name: "Herron Hà-Vi Nguyen",
  tagline: "Mechanical engineer building robots that move people and data.",
  email: "herron@stanford.edu",
  github: "github.com/herronoui",
  githubUrl: "https://github.com/herronoui",
  linkedin: "LinkedIn",
  linkedinUrl: "https://www.linkedin.com/in/herronnguyen",
  resumeUrl: "/resume/Herron_Nguyen_Resume.pdf",
  location: "Stanford, CA",
  availability: "Available May–August 2026",
  summary:
    "B.S. Mechanical Engineering candidate at Stanford (Expected Winter 2027) with hands-on experience building and testing physical robotic systems: fabricating parts, integrating subassemblies, and validating experiments. Current research in the CHARM Lab (Prof. Okamura) on a soft pneumatic patient-transfer robot. Background in control systems, state estimation (AA 273), and mechatronics. High agency; I see what needs to be built and build it.",
  education: {
    school: "Stanford University",
    degrees: "B.S. Mechanical Engineering · B.A. French",
    expected: "Expected Winter 2027",
    coursework: [
      "Mechatronics",
      "Control Systems",
      "Advanced Haptics (ME 327)",
      "State Estimation & Kalman Filtering (AA 273)",
      "Mechanical Systems Design",
      "Circuits & Electronics",
    ],
  },
  skills: [
    {
      category: "Robotics & Control",
      items: [
        "State estimation",
        "UKF / EKF",
        "Motion planning",
        "Control theory",
        "Sensor integration",
        "Human-robot interaction",
        "Soft robotics",
        "Pneumatic actuation",
      ],
    },
    {
      category: "CAD & Fabrication",
      items: [
        "SolidWorks",
        "Onshape",
        "Fusion 360",
        "3D printing (CF-PLA, FDM)",
        "Machine shop",
        "GD&T",
        "Tolerance analysis",
        "DFM / DFA",
        "FEA",
      ],
    },
    {
      category: "Software",
      items: [
        "Python (NumPy, SciPy, Matplotlib)",
        "MATLAB",
        "C++",
        "Data collection & analysis",
        "Test automation",
      ],
    },
  ],
};

export const projects: Project[] = [
  {
    id: "magic-chair",
    title: "Magic Chair",
    subtitle: "Soft growing pneumatic patient-transfer robot",
    period: "CHARM Lab · Winter 2026",
    category: "Robotics",
    summary:
      "Designed and integrated the pressure characterization system for a soft growing pneumatic robot used for patient lifting and transfer at the Stanford Robotics Center.",
    highlights: [
      "Designed pressure characterization protocol for a growing pneumatic robot.",
      "Integrated full hardware stack and iterated until data was repeatable.",
      "Turned a non-functional system into a reliable, documented test bed.",
      "Full fabrication and integration cycle from raw materials to deployed system.",
    ],
    tags: ["Soft Robotics", "Pneumatics", "Instrumentation", "CHARM Lab"],
    featured: true,
    image: "/projects/magic-chair.svg",
    metrics: [
      { label: "Lab", value: "CHARM" },
      { label: "Focus", value: "Patient transfer" },
    ],
  },
  {
    id: "bayesian-tracking",
    title: "Bayesian Multi-Object Tracking",
    subtitle: "Autonomous racing under uncertainty",
    period: "AA 273 · Fall 2025",
    category: "Control & Estimation",
    summary:
      "Implemented Singer UKF and Mahalanobis-gated Hungarian algorithm for multi-object tracking of F1 cars, with a Monte Carlo chance-constraint framework for risk-aware overtaking.",
    highlights: [
      "Singer UKF for dynamic object state estimation.",
      "Mahalanobis-gated Hungarian algorithm for data association.",
      "Monte Carlo chance-constraint framework for risk-aware overtaking under uncertainty.",
    ],
    tags: ["UKF", "Hungarian Algorithm", "Monte Carlo", "Autonomous Racing"],
    featured: true,
    image: "/projects/bayesian-tracking.svg",
    metrics: [
      { label: "Course", value: "AA 273" },
      { label: "Grade", value: "A (90.9%)" },
    ],
  },
  {
    id: "leadscrew-lifter",
    title: "Motor-Driven Leadscrew Lifting Machine",
    subtitle: "Mechanical systems design project",
    period: "ME Design · Fall 2024",
    category: "Fabrication",
    summary:
      "Designed and built a motorized lifting machine rated for 275 N at 6 mm/s, with a 150:1 drivetrain validated through first-principles FEA.",
    highlights: [
      "Selected and machined Tr8×8 leadscrew, bevel gears, and thrust bearing.",
      "Built CF-PLA frame and 150:1 drivetrain.",
      "Validated load capacity through first-principles FEA.",
    ],
    tags: ["Leadscrew", "FEA", "CF-PLA", "Machine Design"],
    featured: true,
    image: "/projects/leadscrew-lifter.svg",
    metrics: [
      { label: "Load", value: "275 N" },
      { label: "Speed", value: "6 mm/s" },
    ],
  },
  {
    id: "gan-mems",
    title: "GaN MEMS Fabrication Characterization",
    subtitle: "International research internship",
    period: "ISEP Paris · Sep 2024 – Jan 2025",
    category: "Research",
    summary:
      "Ran structured experiments characterizing GaN MEMS fabrication behavior in an unfamiliar international lab environment.",
    highlights: [
      "Varied process parameters and measured signal/power trade-offs.",
      "Documented nonlinear fabrication effects.",
      "Adapted quickly to an international research setting.",
    ],
    tags: ["MEMS", "GaN", "Process Characterization", "Research"],
    featured: false,
    image: "/projects/gan-mems.svg",
  },
];

export const experience: Experience[] = [
  {
    id: "charm",
    role: "ME Research Rotator",
    org: "Stanford CHARM Lab · Prof. Allison Okamura",
    period: "Jan 2026 – Present",
    bullets: [
      "Builds and validates a soft growing pneumatic robot for patient lifting and transfer (Magic Chair): full fabrication and integration cycle from raw materials to deployed system at Stanford Robotics Center.",
      "Designed and executed pressure characterization experiments; integrated pneumatic hardware and calibrated sensors until data was repeatable.",
      "Developing experimental protocol for upcoming research publication; owns experiment design, instrumentation, and analysis pipeline.",
    ],
  },
  {
    id: "tbrain",
    role: "QC Lead Engineer & Project Manager",
    org: "TBrain AI",
    period: "Jun 2025 – Present",
    bullets: [
      "Designed QC inspection process from scratch for 550+ GD&T production drawings: mapped failure modes, cut misclassification by 40%, eliminated 98% of manufacturing risks.",
      "Led 5-person team to secure 10,000+ unit follow-on contract.",
    ],
  },
  {
    id: "isep",
    role: "ME Research Intern",
    org: "Institut Supérieur d'Électronique de Paris",
    period: "Sep 2024 – Jan 2025",
    bullets: [
      "Ran structured experiments characterizing GaN MEMS fabrication behavior; varied process parameters, measured signal/power trade-offs, and documented nonlinear effects.",
    ],
  },
];

export const projectCategories: ProjectCategory[] = [
  "Robotics",
  "Control & Estimation",
  "Fabrication",
  "Research",
];
