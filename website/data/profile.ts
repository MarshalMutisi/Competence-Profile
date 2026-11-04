import type { Job } from "@/lib/types";

// Profile, job postings and method notes.
// Job details come from the five job-extract spreadsheets; method notes from the AI Fluency report (Phase 1 and 2).

export const PROFILE = {
  name: "Marshal Mutisi",
  headline: "Final-year BSc Computer Science student and full-stack / AI developer",
  location: "Zimbabwe (CAT, GMT+2)",
  summary:
    "Final-year BSc Computer Science student and software developer who ships full-stack, AI-powered systems end to end, from system design and implementation through testing, evaluation, deployment and monitoring. Builds production LLM agents and automated workflows, backed by six months of professional full-stack experience on live client projects.",
  goal:
    "Find paid remote work of 20 to 40 hours per week in AI automation, generative AI or full-stack development, ideally with European companies whose time zones are close to Zimbabwe.",
  education: [
    { title: "BSc Computer Science", org: "IU International University of Applied Sciences, Germany", period: "2023 – 2026" }
  ],
  experience: [
    {
      title: "Full Stack Development Intern",
      org: "Landsiedel NLP Training (Remote), Germany",
      period: "Jan 2025 – Jun 2025",
      points: [
        "Built responsive web interfaces in HTML/CSS and dynamic PHP/MySQL applications across several projects.",
        "Turned business requirements into technical solutions, working with cross-departmental teams.",
        "Improved online visibility by producing SEO-optimised content with AI tools."
      ]
    }
  ],
  languages: [{ name: "English", level: "Proficient (C2)" }],
  hobbies: ["Coding", "Gaming"]
};

// My current skills, grouped as on my CV.
export const MY_SKILLS: { group: string; items: string[] }[] = [
  { group: "Programming languages", items: ["JavaScript", "TypeScript", "Python", "Java", "SQL"] },
  { group: "AI automation & evaluation", items: ["LangChain", "LangGraph", "Pydantic AI", "n8n", "LangSmith", "OpenAI API", "Anthropic API"] },
  { group: "Frontend", items: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"] },
  { group: "Backend", items: ["Node.js", "Express.js", "FastAPI", "Spring Boot", "PHP"] },
  { group: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Supabase (pgvector)", "ChromaDB", "Qdrant"] },
  { group: "Cloud & DevOps", items: ["Git", "GitHub Actions", "Docker", "Linux", "AWS (basic)"] },
  { group: "Testing", items: ["Jest", "Vitest", "Pytest", "React Testing Library"] },
  { group: "Languages", items: ["English (C2)"] }
];

// Which demand items (names from data/demand.ts) each of my tools relates to.
// This only links names. It says nothing about how strong I am in each one; that is the gap analysis.
export const SKILL_LINKS: Record<string, string[]> = {
  "JavaScript": ["JavaScript"],
  "TypeScript": ["TypeScript"],
  "Python": ["Python"],
  "SQL": ["Relational or NoSQL databases", "PostgreSQL, MySQL, MongoDB or similar"],
  "LangChain": ["AI agents", "RAG systems", "LLMs"],
  "LangGraph": ["AI agents"],
  "Pydantic AI": ["AI agents"],
  "n8n": ["Automation platforms", "No-code / low-code tools", "Automation (building automations / workflows)"],
  "LangSmith": ["Model / agent monitoring", "Evaluating non-deterministic systems (test/eval cycles)"],
  "OpenAI API": ["LLMs", "AI tools / working with AI"],
  "Anthropic API": ["LLMs", "AI tools / working with AI"],
  "React": ["React"],
  "Next.js": ["Next.js"],
  "HTML": ["HTML", "Responsive web development"],
  "CSS": ["CSS", "Responsive web development"],
  "Node.js": ["Node.js"],
  "Express.js": ["REST / RESTful APIs", "APIs (general)"],
  "FastAPI": ["REST / RESTful APIs", "APIs (general)"],
  "PostgreSQL": ["PostgreSQL, MySQL, MongoDB or similar", "Relational or NoSQL databases"],
  "MySQL": ["PostgreSQL, MySQL, MongoDB or similar", "Relational or NoSQL databases"],
  "MongoDB": ["PostgreSQL, MySQL, MongoDB or similar", "Relational or NoSQL databases"],
  "Supabase (pgvector)": ["RAG systems", "Relational or NoSQL databases"],
  "ChromaDB": ["RAG systems"],
  "Qdrant": ["RAG systems"],
  "Git": ["Git"],
  "GitHub Actions": ["GitHub Actions", "CI/CD", "GitHub"],
  "Docker": ["Containers"],
  "AWS (basic)": ["AWS", "Cloud platforms", "AWS Lambda, S3, ECS or similar"],
  "English (C2)": ["English language proficiency"]
};

// Order matches the levels array in data/demand.ts.
export const JOBS: Job[] = [
  {
    id: "nexorlio",
    short: "NX",
    company: "nexorlio",
    title: "Junior Full-Stack Developer",
    track: "Full-stack",
    eligibility: "eligible",
    eligibilityNote: "Fully remote and open worldwide, so I can apply from Zimbabwe.",
    location: "Fully remote, worldwide",
    hours: "Not stated",
    pay: "Not stated",
    language: "C1–C2 English (required)",
    experience: [
      "Previous professional experience is helpful but not required.",
      "Technical ability may be shown through personal projects, freelance work, internships, university projects or open-source contributions."
    ],
    required: [
      "Good understanding of JavaScript and modern web development",
      "Frontend: React, Next.js, HTML, CSS, JavaScript",
      "Basic backend development with Node.js, Python or similar",
      "Basic understanding of REST APIs",
      "Relational or NoSQL databases (familiarity)",
      "Git and GitHub",
      "Responsive web development",
      "Ability to debug and solve technical problems",
      "Ability to learn independently and apply feedback",
      "Excellent spoken and written communication; good collaboration",
      "Comfortable working remotely with an international team",
      "Reliable high-speed internet connection"
    ],
    nice: [
      "TypeScript",
      "PostgreSQL, MySQL, MongoDB or similar",
      "Cloud platforms such as AWS, Azure or Google Cloud",
      "AI APIs, LLMs or AI-powered applications",
      "Authentication, payments or third-party APIs",
      "Basic deployment or DevOps experience",
      "Previous startup, freelance or remote work experience",
      "A GitHub profile or portfolio of previous work"
    ],
    url: ""
  },
  {
    id: "storyteller",
    short: "ST",
    company: "Storyteller",
    title: "AI Product Builder",
    track: "AI product & automation",
    eligibility: "eligible",
    eligibilityNote:
      "The posting says fully remote within Romania, but during my interview for this role earlier in 2026 the company said my location in Zimbabwe was not a problem.",
    location: "Fully remote (posting says Romania; Zimbabwe accepted by the company)",
    hours: "Full-time contract; flexible, mainly aligned with UK weekday hours",
    pay: "Up to EUR 32,500 per year",
    language: "Not stated",
    experience: [
      "No experience requirement stated.",
      "Nice to have: SaaS, product operations, technical operations, automation or a similar environment.",
      "Nice to have: working with clients or client-facing teams."
    ],
    required: [
      "Evidence of having built, automated, improved or run something real",
      "Genuine AI fluency: used AI to investigate, build, automate, classify, transform or change a workflow",
      "Building and iterating on AI-powered automations, tools, checks and workflows",
      "Internal tools to investigate product behaviour, inspect data, debug issues and test ideas",
      "High agency and outcome ownership",
      "Product judgment: decide what matters and avoid overbuilding",
      "Technical mindedness: tools, data, permissions, dependencies, failure modes",
      "Owning a problem end to end: spot, frame, prototype, validate, ship",
      "Clear written communication and documentation",
      "Standards: recognise when work is thin, fragile or under-thought"
    ],
    nice: [
      "Experience working with clients or client-facing teams",
      "Side projects, experiments and prototypes",
      "Content platforms, CMS tools, media workflows",
      "Sports-tech products"
    ],
    url: ""
  },
  {
    id: "evotym",
    short: "EV",
    company: "Evotym",
    title: "AI Prompt Engineer",
    track: "AI automation & prompting",
    eligibility: "unconfirmed",
    eligibilityNote: "Listed as remote, but I could not confirm that applicants in Zimbabwe are accepted.",
    location: "Remote (Zimbabwe eligibility unconfirmed)",
    hours: "Not stated",
    pay: "Competitive salary aligned with experience, plus social benefits",
    language: "Not stated",
    experience: ["2+ years of practical experience in AI, prompt engineering, AI automation or a related technical field."],
    required: [
      "Practical experience with AI tools, LLMs and prompt engineering",
      "Building AI automations, AI agents or AI-powered workflows",
      "Independently identifying business processes that can be automated and turning them into working AI solutions"
    ],
    nice: [
      "APIs, automation platforms and no-code/low-code tools (a strong plus)",
      "Python or other programming languages",
      "Soft skills listed without a level: problem-solving, creative thinking, communication, teamwork, proactive, self-motivated, well-organised"
    ],
    url: "https://www.linkedin.com/company/evotym/life/"
  },
  {
    id: "soundsense",
    short: "SS",
    company: "SoundSenseAI",
    title: "Product Manager Intern (AI Consulting)",
    track: "AI product & consulting",
    eligibility: "eligible",
    eligibilityNote: "Open to applicants in any country within two hours of GMT. Zimbabwe is GMT+2, so it qualifies.",
    location: "Remote-first; within two hours of GMT; travel agreed in advance",
    hours: "Full-time placement of 8–12 weeks or 9–12 months; start by agreement",
    pay: "Paid placement, structured as a freelance engagement; competitive internship pay",
    language: "Not stated",
    experience: [
      "Built and shipped at least one project far enough for someone else to use, test or review.",
      "That can be an application, website, automation, prototype, data project, agent, university project or small business.",
      "Not required: a particular degree, a polished commercial product, or consulting experience."
    ],
    required: [
      "Understand how a customer or business works and where the need sits",
      "Translate needs into clear requirements and priorities",
      "Work directly with clients through discovery and delivery",
      "Build lightweight prototypes or automations to test ideas early",
      "Work with engineers to turn requirements into working software",
      "Software-engineering fundamentals",
      "Use code and AI tools to prototype; use AI thoughtfully and check its output",
      "Document decisions and what you build; respond to feedback",
      "Clear thinking, clear communication, initiative and reliability"
    ],
    nice: [],
    url: ""
  },
  {
    id: "provectus",
    short: "PV",
    company: "Provectus",
    title: "Junior AI/ML Engineer",
    track: "AI/ML engineering",
    eligibility: "unconfirmed",
    eligibilityNote: "Remote-friendly culture, but I could not confirm that applicants in Zimbabwe are accepted.",
    location: "Remote-friendly (Zimbabwe eligibility unconfirmed)",
    hours: "Not stated",
    pay: "Long-term B2B collaboration; medical cover, paid leave, equipment, certification and training budget",
    language: "B2+ English (required)",
    experience: [
      "2+ years of software or ML engineering, with some exposure to production systems.",
      "Hands-on experience building or contributing to RAG systems.",
      "Practical AWS experience (Lambda, S3, ECS or similar).",
      "Some experience with containers and CI/CD in real projects.",
      "Practical experience with LLM APIs (Anthropic, AWS Bedrock or OpenAI)."
    ],
    required: [
      "Python",
      "AWS (Lambda, S3, ECS or similar); Bedrock and Bedrock AgentCore",
      "RAG systems",
      "Containers and CI/CD",
      "LLM APIs (Anthropic, AWS Bedrock or OpenAI)",
      "Integrating AI components into backend services and RESTful APIs",
      "Evaluating non-deterministic systems (test/eval cycles)",
      "Model and agent monitoring; cost and latency trade-offs with LLMs",
      "Solid AI/ML and engineering fundamentals",
      "Productive in an unfamiliar codebase; comfortable with ambiguity",
      "Proactive, self-directed; strong communication and problem-solving"
    ],
    nice: [
      "Spec-driven development",
      "MCP (authoring a server is a plus) and A2A concepts",
      "Claude ecosystem: Claude Code, CLAUDE.md, hooks, skills",
      "GitHub Actions or GitLab CI",
      "NLP, LLMs or recommendation engines",
      "Go, TypeScript or Rust",
      "Apache Spark, Airflow, Kafka",
      "AWS and Claude Code certifications",
      "Financial services, insurance or healthcare industry experience",
      "Consulting or customer-facing delivery"
    ],
    url: ""
  }
];

export const METHOD = {
  tools: [
    { name: "Claude (paid)", use: "Extracting requirements from the five postings into one structure, comparing them and counting overlapping skills." },
    { name: "ChatGPT (free)", use: "Explaining unfamiliar requirements and suggesting learning resources, which I checked against non-AI sources." },
    { name: "LinkedIn and Remote Rocketship", use: "Finding the job postings." },
    { name: "Official documentation, my projects and degree materials", use: "Verifying technologies and assessing my own skills." }
  ],
  mine: [
    "Selecting the five job postings",
    "Assessing my skill level against each requirement",
    "Checking every extracted requirement against the original posting",
    "Final ranking of learning priorities",
    "Estimating learning time",
    "Deciding whether to apply, what I can afford and what personal data goes into a prompt"
  ],
  corrections: [
    {
      title: "Experience marked as required",
      where: "Storyteller · AI Product Builder",
      what: "Claude listed experience as required, but the posting never states an experience requirement.",
      fix: "Changed it to “Not mentioned”."
    },
    {
      title: "Debugging left blank",
      where: "Storyteller · skills comparison",
      what: "Claude left debugging blank, although the role requires investigating product behaviour, inspecting data and debugging issues.",
      fix: "Marked problem-solving and debugging as required."
    },
    {
      title: "Weak resource and wrong priority",
      where: "Learning priority ranking",
      what: "Claude suggested an unhelpful resource for no-code/low-code platforms and ranked deployment as a later topic.",
      fix: "Replaced the resource and moved building and deploying projects up to a foundational, high-priority skill."
    },
    {
      title: "TypeScript marked as required",
      where: "nexorlio · Junior Full-Stack Developer",
      what: "Claude classified TypeScript as required; the posting lists it as nice to have.",
      fix: "Changed it to nice to have, matching the original wording."
    }
  ]
};
