export const profile = {
  name: "Jennifer Zheng",
  title: "Senior Software Engineer",
  location: "New York, NY",
  phone: "(347) 316-8436",
  email: "jenniferzheng2442@gmail.com",
  tagline:
    "Building scalable systems and developer platforms across cloud, social, and AI.",
  summary:
    "Senior software engineer with experience designing reliable distributed systems, leading technical design, and shipping production software at scale.",
  links: {
    github: "https://github.com/ZhengYingqian",
    linkedin: "https://www.linkedin.com/in/jennifer-zheng24",
  },
} as const;

export type Experience = {
  company: string;
  url?: string;
  role: string;
  period: string;
  industry: string;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    company: "Microsoft",
    url: "https://www.microsoft.com/",
    role: "Senior Software Engineer",
    period: "2025.10 — Present",
    industry: "Cloud computing, enterprise software, and developer platforms",
    highlights: [
      "Design and develop scalable, reliable software systems and services",
      "Solve complex technical challenges across projects and production systems",
      "Lead technical design and code reviews to maintain engineering quality",
      "Mentor engineers and provide technical guidance",
      "Architect cloud-native services for enterprise developer platforms",
      "Improve system reliability through observability and operational excellence",
      "Drive cross-team collaboration on platform APIs and shared infrastructure",
      "Optimize service performance, latency, and resource efficiency at scale",
      "Establish engineering standards and best practices across the team",
      "Deliver production features end-to-end from design through deployment",
    ],
  },
  {
    company: "Meta",
    role: "Software Development Engineer",
    period: "2020.6 — 2025.4",
    industry: "Social technology, distributed systems, and AI platforms",
    highlights: [
      "Design and develop scalable software systems and platform services",
      "Build and optimize distributed systems for performance and reliability",
      "Solve complex engineering challenges across production systems",
      "Collaborate on technical design, code reviews, and system improvements",
      "Ship high-impact features across social and AI platform surfaces",
      "Improve distributed data pipelines and service throughput",
      "Strengthen system resilience with fault-tolerant design patterns",
      "Partner with product and infrastructure teams on large-scale launches",
      "Reduce operational toil through automation and better tooling",
      "Contribute to long-term platform architecture and technical strategy",
    ],
  },
  {
    company: "Facebook",
    role: "Software Engineer Intern",
    period: "2019.8 — 2019.11",
    industry: "Social technology and internet platforms",
    highlights: [
      "Contributed to production features on social technology platforms",
      "Collaborated with engineers on design, implementation, and code review",
      "Diagnosed and resolved bugs across internet-scale services",
      "Applied large-company engineering practices to deliver quality work",
    ],
  },
  {
    company: "Google",
    role: "Software Engineer Intern",
    period: "2019.5 — 2019.8",
    industry: "Internet technology, cloud computing, and AI",
    highlights: [
      "Built and shipped software within cloud and AI-related product areas",
      "Collaborated on technical design and implementation with mentors",
      "Wrote tests and documentation to support maintainable code",
      "Participated in code reviews and iterative product development",
    ],
  },
  {
    company: "Amazon",
    role: "Software Engineer Intern",
    period: "2018.6 — 2018.8",
    industry: "E-commerce, cloud computing, and technology platforms",
    highlights: [
      "Developed features for e-commerce and technology platform services",
      "Worked with mentors on design, coding, and testing best practices",
      "Delivered production-ready code within a fast-paced engineering cycle",
    ],
  },
];

export const education = {
  school: "The University of Texas at Austin",
  url: "https://www.utexas.edu/",
  period: "2016 — 2020",
  location: "Austin, TX",
  degree: "Bachelor of Science in Computer Science",
} as const;
