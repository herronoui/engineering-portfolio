/** Embedded project content — edit files here; loaded by index.html */
window.PORTFOLIO_PROJECTS = [
  {
    id: "magic-chair",
    title: "Magic Chair",
    subtitle: "Soft growing pneumatic patient-transfer robot",
    period: "CHARM Lab · Winter 2026",
    category: "Robotics",
    image: "public/projects/magic-chair.svg",
    team: "Thu Shun Lei · Herron Ha-Vi Nguyen",
    summary:
      "A soft robotic transfer system built with the same care as a flight-critical mechanism: sealed pneumatic paths, a stable base station, and instrumentation precise enough to characterize pressure repeatably.",
    metrics: [
      { label: "Lab", value: "CHARM" },
      { label: "Craft", value: "Fabrication & test" },
    ],
    tags: ["Soft Robotics", "Pneumatics", "Welding", "CAD", "CHARM Lab"],
    sections: [
      {
        title: "Design intent",
        body: "Patient transfer demands reliability without rigidity. The Magic Chair uses a growing pneumatic structure—engineered for controlled deployment, clean force paths, and hardware that looks and behaves like a finished system, not a prototype.",
      },
      {
        title: "Magic Sheet fabrication",
        items: [
          "Concept sketches refined into manufacturable sheet geometry",
          "Fabrication workflow with attention to seal quality and repeatability",
          "Welding techniques tuned for pneumatic integrity",
        ],
      },
      {
        title: "Base station fabrication",
        items: [
          "CAD with deliberate mounting features and load paths",
          "Machined and assembled station for stable sheet deployment",
          "Design features that keep grow-and-lift cycles controlled and predictable",
        ],
      },
      {
        title: "Demo & validation",
        body: "End-to-end integration at the Stanford Robotics Center—actuation, growth, and base coordination validated as a single functional system.",
      },
      {
        title: "Next steps",
        items: [
          "Multi-layered magic sheets for higher load capacity",
          "Chair pressure characterization with rigorous, repeatable protocols",
        ],
      },
    ],
    embed: { type: "pdf", src: "public/docs/Magic-Chair.pdf", label: "Full project deck" },
  },
  {
    id: "touchworld",
    title: "TouchWorld",
    subtitle: "Haptic exploration of AI-generated 3D environments",
    period: "ME327 · CHARM Lab · Group 8 · 2026",
    category: "Robotics",
    image: "public/projects/touchworld.svg",
    team: "Aytan Sadirova · Herron Ha-Vi Nguyen · Marie Imad · Sukeerth Ramkumar",
    summary:
      "An elegant human–machine interface: generative worlds you can feel at 1 kHz. Dual-mesh architecture separates visual fidelity from stable haptic contact—the same discipline as separating display models from analysis meshes in aerospace tooling.",
    metrics: [
      { label: "Course", value: "ME327" },
      { label: "Loop", value: "1 kHz haptics" },
    ],
    tags: ["Haptics", "Unity", "Generative AI", "ME327", "Systems Integration"],
    sections: [
      {
        title: "Functional goal",
        body: "Let anyone feel AI-generated geometry without CAD expertise. Speech in, haptic-ready world out—every pipeline stage must be reliable enough for a public demo, not just a lab bench.",
      },
      {
        title: "Dual-mesh architecture",
        items: [
          "VisualMesh: full-resolution GLB at 60+ Hz — never queried by the haptic scheduler",
          "HapticProxy: ~8k triangles on HapticLayer — stable god-object contact at 1 kHz",
          "Decimation preserves perceptible structure; discards detail the device cannot resolve",
        ],
      },
      {
        title: "Detail in integration",
        items: [
          "Coordinate alignment and scale for every imported Marble asset",
          "Export-failure handling and prompt simplification for corrupt GLBs",
          "OpenHaptics + Unity 6 stack tuned for visitor-facing stability",
        ],
      },
      {
        title: "Environment library",
        body: "Ten curated worlds—each processed for alignment, proxy decimation, and force output you can trust during live exploration at the Haptics Open House (May 2026).",
      },
      {
        title: "My contribution",
        items: [
          "Geometry processing and Unity integration",
          "Mesh decimation workflow and haptic stability tuning",
          "Demo setup — function and presentation treated as one deliverable",
        ],
      },
    ],
    embed: {
      type: "html",
      label: "Technical write-up (embedded)",
      html: `<p class="embed-note">Condensed from the <a href="https://charm.stanford.edu/ME327/2026-Group8" target="_blank" rel="noopener">ME327 Group 8 project page</a>.</p>
        <h4>Systems thinking</h4>
        <p>TouchWorld connects generative 3D to real-time force control. Stiffness is bounded by loop rate (Z-width); 200k–500k triangle scenes require proxy meshes—an architectural choice, not a workaround.</p>
        <h4>Design principles</h4>
        <ul><li>Prioritize depth and z-extent users can feel</li><li>Maximize geometric contrast between surfaces</li><li>Prefer bounded spaces with clear haptic boundaries</li><li>Treat export reliability as a first-class requirement</li></ul>`,
    },
  },
  {
    id: "bayesian-tracking",
    title: "Bayesian Multi-Object Tracking",
    subtitle: "Autonomous systems under uncertainty",
    period: "AA 273 · Fall 2025",
    category: "Aerospace & Control",
    image: "public/projects/bayesian-tracking.svg",
    summary:
      "Aerospace-grade estimation mindset applied to autonomous racing: UKF state propagation, principled data association, and chance-constrained decisions when overtaking under uncertainty.",
    metrics: [
      { label: "Course", value: "AA 273" },
      { label: "Grade", value: "A (90.9%)" },
    ],
    tags: ["State Estimation", "UKF", "Monte Carlo", "Autonomous Systems"],
    sections: [
      {
        title: "Rigorous function",
        items: [
          "Singer UKF for dynamic multi-object state estimation",
          "Mahalanobis-gated Hungarian algorithm — association with statistical discipline",
          "Monte Carlo chance constraints for risk-aware overtaking",
        ],
      },
      {
        title: "Why it matters",
        body: "The same estimation and decision framework used in aerospace tracking and guidance appears here in miniature: correct states, correct pairings, and actions that respect uncertainty bounds.",
      },
    ],
  },
  {
    id: "leadscrew-lifter",
    title: "Motor-Driven Leadscrew Lifting Machine",
    subtitle: "Precision mechanical systems design",
    period: "ME Design · Fall 2024",
    category: "Mechanisms",
    image: "public/projects/leadscrew-lifter.svg",
    summary:
      "A lifting machine where every component is sized and validated: 275 N at 6 mm/s through a 150:1 drivetrain, with FEA backing the numbers—not just the appearance of strength.",
    metrics: [
      { label: "Load", value: "275 N" },
      { label: "Speed", value: "6 mm/s" },
    ],
    tags: ["Machine Design", "FEA", "Drivetrain", "CF-PLA"],
    sections: [
      {
        title: "Engineering detail",
        items: [
          "Tr8×8 leadscrew, bevel gears, and thrust bearing — selected and machined deliberately",
          "CF-PLA frame and 150:1 drivetrain with clean load paths",
          "First-principles FEA to validate capacity before claiming performance",
        ],
      },
    ],
  },
  {
    id: "gan-mems",
    title: "GaN MEMS Fabrication Characterization",
    subtitle: "Micro-scale process discipline",
    period: "ISEP Paris · Sep 2024 – Jan 2025",
    category: "Research",
    image: "public/projects/gan-mems.svg",
    summary:
      "Structured experiments on GaN MEMS fabrication—parameter sweeps, measured trade-offs, and documentation precise enough to capture nonlinear process behavior.",
    metrics: [{ label: "Location", value: "Paris" }],
    tags: ["MEMS", "GaN", "Process Control", "Research"],
    sections: [
      {
        title: "Methodical work",
        items: [
          "Varied process parameters with controlled measurement of signal/power",
          "Documented nonlinear fabrication effects with care",
          "Adapted quickly while maintaining experimental rigor in a new lab",
        ],
      },
    ],
  },
  {
    id: "tbrain-qc",
    title: "GD&T QC Inspection Pipeline",
    subtitle: "Manufacturing precision at scale",
    period: "TBrain AI · Jun 2025 – Present",
    category: "Mechanisms",
    image: "public/projects/leadscrew-lifter.svg",
    summary:
      "Quality systems built like metrology infrastructure: 550+ GD&T drawings inspected with failure-mode clarity, cutting misclassification 40% and eliminating nearly all manufacturing risk.",
    metrics: [
      { label: "Drawings", value: "550+" },
      { label: "Team", value: "5 engineers" },
    ],
    tags: ["GD&T", "Metrology", "QC", "DFM"],
    sections: [
      {
        title: "Attention to detail",
        items: [
          "QC process designed from scratch with mapped failure modes",
          "40% misclassification reduction; 98% manufacturing risk eliminated",
          "Led team to 10,000+ unit follow-on contract — function the customer could measure",
        ],
      },
    ],
  },
  {
    id: "charm-instrumentation",
    title: "Pneumatic Test Bed & Instrumentation",
    subtitle: "Publication-ready experimental infrastructure",
    period: "CHARM Lab · 2026",
    category: "Robotics",
    image: "public/projects/magic-chair.svg",
    summary:
      "Turned an unreliable pneumatic rig into a documented test bed—calibrated sensors, repeatable data, and an analysis pipeline worthy of publication.",
    metrics: [{ label: "Standard", value: "Repeatable data" }],
    tags: ["Instrumentation", "Experiment Design", "Soft Robotics"],
    sections: [
      {
        title: "Systems integrity",
        items: [
          "Sensor calibration and pneumatic integration done methodically",
          "Experiment design, instrumentation, and analysis owned end-to-end",
          "Non-functional hardware → stable, documented test infrastructure",
        ],
      },
    ],
  },
];
