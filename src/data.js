export const siteMeta = {
  name: "Vikhas Somasundaram Giri",
  title: "Software Engineer | MS CS @ UC Davis (Incoming)",
  email: "vsgiri@ucdavis.edu",
  location: "Davis, CA",
  phone: "(341) 732-8313",
  linkedin: "https://www.linkedin.com/in/vikhassg/"
};

export const skills = {
  certifications: ["CCNA", "Web Development - Verzeo"],
  tech: ["UNIX", "Windows", "Docker", "Kubernetes", "Telegraf", "JTIMON", "Git", "Postman", "Prometheus", "VictoriaMetrics"],
  programming: ["Python", "C++", "HTML", "CSS", "SQL", "MySQL", "MongoDB"]
};

export const experience = [
  {
    company: "Juniper Networks",
    location: "Bangalore, India",
    periods: [
      { title: "Software Engineer-3", range: "Jul 2025 – Aug 2025" },
      { title: "Software Engineer-2", range: "Jul 2024 – Jun 2025" },
      { title: "Software Engineer-1", range: "Jul 2023 – Jun 2024" },
      { title: "Software Engineering Intern", range: "Jan 2023 – Jun 2023" }
    ],
    bullets: [
      "Built G2 integration tests to validate igp-insights with tsingest, api-server, and Kafka.",
      "Optimized tsingest scalability from 20 → 1000 state devices and 2 → 20 LSDB devices.",
      "Designed Kafka-based request–response correlation and caching for Routing Bot, reducing issue resolution time by 30%.",
      "Integrated Routing Bot into Paragon ecosystem, containerized microservices on Kubernetes, and automated G1 tests in CI/CD."
    ]
  },
  {
    company: "Kaar Technologies",
    location: "Chennai, India",
    periods: [ { title: "Product Developer Intern", range: "Aug 2021 – Feb 2022" } ],
    bullets: ["Designed and deployed an onboarding web app with RESTful APIs, Node.js backend, and frontend with HTML/CSS."]
  }
];

export const education = [
  {
    school: "University of California, Davis",
    degree: "Master of Science in Computer Science",
    range: "Sep 2025 – Jun 2027 (Expected)",
    location: "Davis, CA"
  },
  {
    school: "PSG Institute of Technology and Applied Research",
    degree: "Bachelor of Engineering in Computer Science and Engineering",
    range: "Jun 2023",
    note: "GPA: 9.47/10.00",
    location: "Coimbatore, India"
  }
];

export const projects = [
  {
    title: "Routing Bot — IGP Routing Analytics",
    desc: "Developed anomaly detection with Dijkstra and dynamic thresholds; built end-to-end pipeline with Kafka, tsingest, igp-insights, and API Server.",
    tags: ["Kafka", "Kubernetes", "Microservices"]
  },
  {
    title: "Pattern Recognition for Suspicious Activities",
    desc: "Deep learning pipeline comparing MobileNetV2 and CNN; CNN achieved 95% accuracy.",
    tags: ["Python", "Deep Learning", "Computer Vision"]
  },
  {
    title: "Itech Expo Application",
    desc: "Real-time crowd updates & event details web app used by 500+ users (Node.js, MongoDB, HTML/CSS/JS).",
    tags: ["Node.js", "MongoDB", "Realtime"]
  }
];

export const publications = [
  { title: "Pattern Recognition Algorithm to Detect Suspicious Activities", venue: "ICSCSS-2023" },
  { title: "Effective Marine Animal Detection and Rare Species Classification Using Autonomous Drones", venue: "ICNGCS-2023" },
  { title: "Standalone Chatbot Application in Python", venue: "IJRASET-2022" }
];
