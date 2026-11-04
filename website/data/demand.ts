import type { DemandItem, RankItem } from "@/lib/types";

// Generated from job_skills_frequency.xlsx and ai_fullstack_learning_priority_ranking(1).xlsx.
// levels order: nexorlio, Storyteller, Evotym, SoundSenseAI, Provectus. R = required, N = nice to have, L = listed without a label.
export const DEMAND: DemandItem[] = [
 {
  "name": "Collaboration / teamwork",
  "type": "Skill",
  "count": 5,
  "levels": [
   "R",
   "R",
   "L",
   "R",
   "R"
  ],
  "evidence": {
   "0": "Good communication and collaboration skills / Comfortable working remotely with an international team",
   "1": "working with others to ship it",
   "2": "Good communication and teamwork skills (listed under Key Soft Skills)",
   "3": "Work with engineers to turn requirements and product decisions into working software",
   "4": "Comfortable collaborating across distributed, multicultural teams"
  }
 },
 {
  "name": "Communication skills (written and/or spoken)",
  "type": "Skill",
  "count": 5,
  "levels": [
   "R",
   "R",
   "L",
   "R",
   "R"
  ],
  "evidence": {
   "0": "Excellent spoken and written communication skills / Good communication and collaboration skills",
   "1": "Clear written communication so your work is inspectable, reusable, and easy for others to pick up",
   "2": "Good communication and teamwork skills (listed under Key Soft Skills)",
   "3": "Clear communication",
   "4": "Excellent communication and problem-solving skills"
  }
 },
 {
  "name": "Self-direction / initiative / proactiveness",
  "type": "Skill",
  "count": 5,
  "levels": [
   "R",
   "R",
   "L",
   "R",
   "R"
  ],
  "evidence": {
   "0": "Ability to learn independently and apply feedback",
   "1": "High agency: you notice what is weak, unclear, or missing, form a view, and move things forward without waiting for everything to be pre-packaged",
   "2": "Proactive, self-motivated, and well-organized",
   "3": "Initiative and reliability",
   "4": "Proactive and self-directed; you push for clarity rather than waiting for a ticket"
  }
 },
 {
  "name": "AI tools / working with AI",
  "type": "Technology",
  "count": 5,
  "levels": [
   "N",
   "R",
   "R",
   "R",
   "R"
  ],
  "evidence": {
   "0": "AI APIs, LLMs, or AI-powered applications",
   "1": "AI (building and iterating on AI-powered automations, tools, checks, and workflows); Genuine AI fluency beyond surface-level use",
   "2": "AI tools; Practical experience working with AI tools, LLMs, and prompt engineering",
   "3": "Code and AI tools (no specific tools named); Use AI thoughtfully and check its output",
   "4": "Solid AI/ML foundations; LLM APIs (Anthropic, AWS Bedrock, or OpenAI)"
  }
 },
 {
  "name": "Automation (building automations / workflows)",
  "type": "Skill",
  "count": 3,
  "levels": [
   "",
   "R",
   "R",
   "R",
   ""
  ],
  "evidence": {
   "1": "used AI to investigate, build, automate, classify, transform, or meaningfully change a workflow",
   "2": "Experience building AI automations, AI agents, or AI-powered workflows",
   "3": "Build lightweight prototypes or automations to test ideas early"
  }
 },
 {
  "name": "Client / customer-facing work",
  "type": "Skill",
  "count": 3,
  "levels": [
   "",
   "N",
   "",
   "R",
   "N"
  ],
  "evidence": {
   "1": "Experience working with clients or client-facing teams",
   "3": "Work directly with clients through discovery and delivery",
   "4": "Consulting, professional services, or other embedded customer-facing delivery"
  }
 },
 {
  "name": "Portfolio / previously built and shipped projects",
  "type": "Skill",
  "count": 5,
  "levels": [
   "N",
   "R",
   "R",
   "R",
   "R"
  ],
  "evidence": {
   "0": "A GitHub profile or portfolio demonstrating previous work; Technical ability may be demonstrated through personal projects, freelance work, internships, university projects, or open-source contributions",
   "1": "Evidence that you have built, automated, improved, or run something real, even if it was scrappy; Side projects, experiments, prototypes (nice to have)",
   "3": "Have built and shipped at least one project far enough for someone else to use, test or review"
  }
 },
 {
  "name": "Problem-solving / debugging",
  "type": "Skill",
  "count": 4,
  "levels": [
   "R",
   "R",
   "L",
   "",
   "R"
  ],
  "evidence": {
   "0": "Ability to debug and solve technical problems",
   "2": "Strong problem-solving and creative thinking skills",
   "4": "Excellent communication and problem-solving skills"
  }
 },
 {
  "name": "AI agents",
  "type": "Technology",
  "count": 3,
  "levels": [
   "",
   "",
   "R",
   "R",
   "R"
  ],
  "evidence": {
   "2": "Experience building AI automations, AI agents, or AI-powered workflows",
   "3": "That project could be an application, website, automation, prototype, data project, agent, university project or small business",
   "4": "Basic working knowledge of model/agent monitoring concepts; A2A: interest in agent-to-agent interoperability concepts (nice to have)"
  }
 },
 {
  "name": "APIs (general)",
  "type": "Technology",
  "count": 3,
  "levels": [
   "R",
   "",
   "N",
   "",
   "R"
  ],
  "evidence": {
   "0": "Basic understanding of REST APIs; Authentication, payments, or third-party APIs (nice to have)",
   "2": "Experience with APIs, automation platforms, and no-code/low-code tools is a strong plus",
   "4": "RESTful APIs (help integrate AI components into backend services and RESTful APIs)"
  }
 },
 {
  "name": "LLMs",
  "type": "Technology",
  "count": 3,
  "levels": [
   "N",
   "",
   "R",
   "",
   "R"
  ],
  "evidence": {
   "0": "AI APIs, LLMs, or AI-powered applications",
   "2": "LLMs",
   "4": "LLM APIs (Anthropic, AWS Bedrock, or OpenAI); Awareness of cost and latency trade-offs when working with LLMs"
  }
 },
 {
  "name": "Python",
  "type": "Technology",
  "count": 3,
  "levels": [
   "R",
   "",
   "N",
   "",
   "R"
  ],
  "evidence": {
   "0": "Basic backend development with Node.js, Python, or similar technologies",
   "2": "Experience with Python or other programming languages is a plus",
   "4": "Python"
  }
 },
 {
  "name": "Applying / responding to feedback",
  "type": "Skill",
  "count": 2,
  "levels": [
   "R",
   "",
   "",
   "R",
   ""
  ],
  "evidence": {
   "0": "Ability to learn independently and apply feedback",
   "3": "Show your work regularly, respond to feedback, and document what you build and learn"
  }
 },
 {
  "name": "Documenting work and decisions",
  "type": "Skill",
  "count": 2,
  "levels": [
   "",
   "R",
   "",
   "R",
   ""
  ],
  "evidence": {
   "1": "Clear written communication so your work is inspectable, reusable, and easy for others to pick up",
   "3": "Document decisions, recommendations and next steps clearly; document what you build and learn"
  }
 },
 {
  "name": "English language proficiency",
  "type": "Skill",
  "count": 2,
  "levels": [
   "R",
   "",
   "",
   "",
   "R"
  ],
  "evidence": {
   "0": "C1-C2 level English proficiency",
   "4": "B2+ English"
  }
 },
 {
  "name": "Product judgment / requirements and prioritisation",
  "type": "Skill",
  "count": 2,
  "levels": [
   "",
   "R",
   "",
   "R",
   ""
  ],
  "evidence": {
   "1": "Enough product judgment to decide what matters, balance user needs with technical constraints, and avoid overbuilding",
   "3": "Translate that need into clear requirements and priorities"
  }
 },
 {
  "name": "Prototyping",
  "type": "Skill",
  "count": 2,
  "levels": [
   "",
   "R",
   "",
   "R",
   ""
  ],
  "evidence": {
   "1": "prototyping a solution, validating it; Side projects, experiments, prototypes (nice to have)",
   "3": "Build lightweight prototypes or automations to test ideas early; use code and AI tools to prototype"
  }
 },
 {
  "name": "Software / engineering fundamentals",
  "type": "Skill",
  "count": 2,
  "levels": [
   "",
   "",
   "",
   "R",
   "R"
  ],
  "evidence": {
   "3": "Understand software-engineering fundamentals",
   "4": "Solid engineering fundamentals"
  }
 },
 {
  "name": "AWS",
  "type": "Technology",
  "count": 2,
  "levels": [
   "N",
   "",
   "",
   "",
   "R"
  ],
  "evidence": {
   "0": "Cloud platforms such as AWS, Azure, or Google Cloud",
   "4": "AWS (Lambda, S3, ECS, or similar); Practical AWS experience"
  }
 },
 {
  "name": "Cloud platforms",
  "type": "Technology",
  "count": 2,
  "levels": [
   "N",
   "",
   "",
   "",
   "R"
  ],
  "evidence": {
   "0": "Cloud platforms such as AWS, Azure, or Google Cloud",
   "4": "AWS (Lambda, S3, ECS, or similar)"
  }
 },
 {
  "name": "REST / RESTful APIs",
  "type": "Technology",
  "count": 2,
  "levels": [
   "R",
   "",
   "",
   "",
   "R"
  ],
  "evidence": {
   "0": "Basic understanding of REST APIs; REST APIs",
   "4": "RESTful APIs (stated under Responsibilities)"
  }
 },
 {
  "name": "TypeScript",
  "type": "Technology",
  "count": 2,
  "levels": [
   "N",
   "",
   "",
   "",
   "N"
  ],
  "evidence": {
   "0": "TypeScript",
   "4": "An additional language: Go, TypeScript, or Rust"
  }
 },
 {
  "name": "AWS and Claude Code certifications",
  "type": "Skill",
  "count": 1,
  "levels": [
   "",
   "",
   "",
   "",
   "N"
  ],
  "evidence": {
   "4": "AWS and Claude Code Certifications (or actively pursuing them)"
  }
 },
 {
  "name": "Clear thinking about the problem and your choices",
  "type": "Skill",
  "count": 1,
  "levels": [
   "",
   "",
   "",
   "R",
   ""
  ],
  "evidence": {
   "3": "Clear thinking about the problem and your choices"
  }
 },
 {
  "name": "Comfort with ambiguity",
  "type": "Skill",
  "count": 1,
  "levels": [
   "",
   "",
   "",
   "",
   "R"
  ],
  "evidence": {
   "4": "Comfortable with some ambiguity, with support from senior team members as you take on more"
  }
 },
 {
  "name": "Comfortable working remotely",
  "type": "Skill",
  "count": 1,
  "levels": [
   "R",
   "",
   "",
   "",
   ""
  ],
  "evidence": {
   "0": "Comfortable working remotely with an international team"
  }
 },
 {
  "name": "Cost and latency trade-offs with LLMs",
  "type": "Skill",
  "count": 1,
  "levels": [
   "",
   "",
   "",
   "",
   "R"
  ],
  "evidence": {
   "4": "Awareness of cost and latency trade-offs when working with LLMs"
  }
 },
 {
  "name": "Creative thinking",
  "type": "Skill",
  "count": 1,
  "levels": [
   "",
   "",
   "L",
   "",
   ""
  ],
  "evidence": {
   "2": "Strong problem-solving and creative thinking skills"
  }
 },
 {
  "name": "Curiosity about users and business needs",
  "type": "Skill",
  "count": 1,
  "levels": [
   "",
   "",
   "",
   "R",
   ""
  ],
  "evidence": {
   "3": "Curiosity about users and business needs"
  }
 },
 {
  "name": "Deployment / DevOps",
  "type": "Skill",
  "count": 1,
  "levels": [
   "N",
   "",
   "",
   "",
   ""
  ],
  "evidence": {
   "0": "Basic deployment or DevOps experience"
  }
 },
 {
  "name": "End-to-end problem ownership",
  "type": "Skill",
  "count": 1,
  "levels": [
   "",
   "R",
   "",
   "",
   ""
  ],
  "evidence": {
   "1": "Comfort owning a problem end-to-end: spotting the issue, framing it, prototyping a solution, validating it, and working with others to ship it"
  }
 },
 {
  "name": "Evaluating non-deterministic systems (test/eval cycles)",
  "type": "Skill",
  "count": 1,
  "levels": [
   "",
   "",
   "",
   "",
   "R"
  ],
  "evidence": {
   "4": "Exposure to evaluating non-deterministic systems - contributed to or run test/eval cycles"
  }
 },
 {
  "name": "Identifying business processes that can be automated",
  "type": "Skill",
  "count": 1,
  "levels": [
   "",
   "",
   "R",
   "",
   ""
  ],
  "evidence": {
   "2": "Ability to independently identify business processes that can be automated and turn ideas into working AI solutions"
  }
 },
 {
  "name": "Model / agent monitoring",
  "type": "Skill",
  "count": 1,
  "levels": [
   "",
   "",
   "",
   "",
   "R"
  ],
  "evidence": {
   "4": "Basic working knowledge of model/agent monitoring concepts"
  }
 },
 {
  "name": "Outcome ownership",
  "type": "Skill",
  "count": 1,
  "levels": [
   "",
   "R",
   "",
   "",
   ""
  ],
  "evidence": {
   "1": "Outcome ownership: you care whether the thing worked in reality, not just whether your part was completed"
  }
 },
 {
  "name": "Productive in an unfamiliar codebase",
  "type": "Skill",
  "count": 1,
  "levels": [
   "",
   "",
   "",
   "",
   "R"
  ],
  "evidence": {
   "4": "Productive in an unfamiliar codebase with some ramp-up support"
  }
 },
 {
  "name": "Prompt engineering",
  "type": "Skill",
  "count": 1,
  "levels": [
   "",
   "",
   "R",
   "",
   ""
  ],
  "evidence": {
   "2": "Practical experience working with AI tools, LLMs, and prompt engineering"
  }
 },
 {
  "name": "Reliability",
  "type": "Skill",
  "count": 1,
  "levels": [
   "",
   "",
   "",
   "R",
   ""
  ],
  "evidence": {
   "3": "Initiative and reliability"
  }
 },
 {
  "name": "Reliable high-speed internet connection",
  "type": "Skill",
  "count": 1,
  "levels": [
   "R",
   "",
   "",
   "",
   ""
  ],
  "evidence": {
   "0": "Reliable high-speed internet connection"
  }
 },
 {
  "name": "Responsive web development",
  "type": "Skill",
  "count": 1,
  "levels": [
   "R",
   "",
   "",
   "",
   ""
  ],
  "evidence": {
   "0": "Understanding of responsive web development"
  }
 },
 {
  "name": "Spec-driven development",
  "type": "Skill",
  "count": 1,
  "levels": [
   "",
   "",
   "",
   "",
   "N"
  ],
  "evidence": {
   "4": "Spec-driven development - writing the intent, constraints, and acceptance criteria before you let an agent build"
  }
 },
 {
  "name": "Standards / quality judgment",
  "type": "Skill",
  "count": 1,
  "levels": [
   "",
   "R",
   "",
   "",
   ""
  ],
  "evidence": {
   "1": "Standards: you can tell when something is thin, fragile, under-thought, or not good enough"
  }
 },
 {
  "name": "Startup, freelance or remote work experience",
  "type": "Skill",
  "count": 1,
  "levels": [
   "N",
   "",
   "",
   "",
   ""
  ],
  "evidence": {
   "0": "Previous startup, freelance, or remote work experience"
  }
 },
 {
  "name": "Technical mindedness (tools, data, permissions, dependencies, failure modes)",
  "type": "Skill",
  "count": 1,
  "levels": [
   "",
   "R",
   "",
   "",
   ""
  ],
  "evidence": {
   "1": "Technical mindedness: wanting to understand tools, data, permissions, dependencies, and failure modes rather than staying at surface level"
  }
 },
 {
  "name": "Understanding how a customer or business works",
  "type": "Skill",
  "count": 1,
  "levels": [
   "",
   "",
   "",
   "R",
   ""
  ],
  "evidence": {
   "3": "Understand how a customer or business works and where the need sits"
  }
 },
 {
  "name": "Well-organized",
  "type": "Skill",
  "count": 1,
  "levels": [
   "",
   "",
   "L",
   "",
   ""
  ],
  "evidence": {
   "2": "Proactive, self-motivated, and well-organized"
  }
 },
 {
  "name": "A2A (agent-to-agent interoperability)",
  "type": "Technology",
  "count": 1,
  "levels": [
   "",
   "",
   "",
   "",
   "N"
  ],
  "evidence": {
   "4": "A2A: interest in agent-to-agent interoperability concepts"
  }
 },
 {
  "name": "Amazon Bedrock and Bedrock AgentCore",
  "type": "Technology",
  "count": 1,
  "levels": [
   "",
   "",
   "",
   "",
   "R"
  ],
  "evidence": {
   "4": "Bedrock and Bedrock AgentCore - ready to grow into"
  }
 },
 {
  "name": "Apache Airflow",
  "type": "Technology",
  "count": 1,
  "levels": [
   "",
   "",
   "",
   "",
   "N"
  ],
  "evidence": {
   "4": "Apache Spark, Apache Airflow, Kafka"
  }
 },
 {
  "name": "Apache Spark",
  "type": "Technology",
  "count": 1,
  "levels": [
   "",
   "",
   "",
   "",
   "N"
  ],
  "evidence": {
   "4": "Apache Spark, Apache Airflow, Kafka"
  }
 },
 {
  "name": "Authentication, payments or third-party APIs",
  "type": "Technology",
  "count": 1,
  "levels": [
   "N",
   "",
   "",
   "",
   ""
  ],
  "evidence": {
   "0": "Authentication, payments, or third-party APIs"
  }
 },
 {
  "name": "Automation platforms",
  "type": "Technology",
  "count": 1,
  "levels": [
   "",
   "",
   "N",
   "",
   ""
  ],
  "evidence": {
   "2": "Experience with APIs, automation platforms, and no-code/low-code tools is a strong plus"
  }
 },
 {
  "name": "AWS Lambda, S3, ECS or similar",
  "type": "Technology",
  "count": 1,
  "levels": [
   "",
   "",
   "",
   "",
   "R"
  ],
  "evidence": {
   "4": "AWS (Lambda, S3, ECS, or similar)"
  }
 },
 {
  "name": "CI/CD",
  "type": "Technology",
  "count": 1,
  "levels": [
   "",
   "",
   "",
   "",
   "R"
  ],
  "evidence": {
   "4": "CI/CD; CI/CD pipelines: GitHub Actions, GitLab CI (nice to have)"
  }
 },
 {
  "name": "Claude ecosystem (Claude Code, CLAUDE.md, hooks, skills files)",
  "type": "Technology",
  "count": 1,
  "levels": [
   "",
   "",
   "",
   "",
   "N"
  ],
  "evidence": {
   "4": "Claude ecosystem - Claude Code, CLAUDE.md, hooks, skills files"
  }
 },
 {
  "name": "CMS tools",
  "type": "Technology",
  "count": 1,
  "levels": [
   "",
   "N",
   "",
   "",
   ""
  ],
  "evidence": {
   "1": "CMS tools"
  }
 },
 {
  "name": "Code (used to prototype and work with engineering)",
  "type": "Technology",
  "count": 1,
  "levels": [
   "",
   "",
   "",
   "R",
   ""
  ],
  "evidence": {
   "3": "Be comfortable using code and AI tools to prototype, test ideas and work effectively with engineering"
  }
 },
 {
  "name": "Containers",
  "type": "Technology",
  "count": 1,
  "levels": [
   "",
   "",
   "",
   "",
   "R"
  ],
  "evidence": {
   "4": "Containers; Some experience with containers and CI/CD in real projects"
  }
 },
 {
  "name": "Content platforms",
  "type": "Technology",
  "count": 1,
  "levels": [
   "",
   "N",
   "",
   "",
   ""
  ],
  "evidence": {
   "1": "Familiarity with content platforms"
  }
 },
 {
  "name": "CSS",
  "type": "Technology",
  "count": 1,
  "levels": [
   "R",
   "",
   "",
   "",
   ""
  ],
  "evidence": {
   "0": "Frontend technologies such as React, Next.js, HTML, CSS, JavaScript"
  }
 },
 {
  "name": "Git",
  "type": "Technology",
  "count": 1,
  "levels": [
   "R",
   "",
   "",
   "",
   ""
  ],
  "evidence": {
   "0": "Git"
  }
 },
 {
  "name": "GitHub",
  "type": "Technology",
  "count": 1,
  "levels": [
   "R",
   "",
   "",
   "",
   ""
  ],
  "evidence": {
   "0": "GitHub; A GitHub profile or portfolio demonstrating previous work (nice to have)"
  }
 },
 {
  "name": "GitHub Actions",
  "type": "Technology",
  "count": 1,
  "levels": [
   "",
   "",
   "",
   "",
   "N"
  ],
  "evidence": {
   "4": "CI/CD pipelines: GitHub Actions, GitLab CI"
  }
 },
 {
  "name": "GitLab CI",
  "type": "Technology",
  "count": 1,
  "levels": [
   "",
   "",
   "",
   "",
   "N"
  ],
  "evidence": {
   "4": "CI/CD pipelines: GitHub Actions, GitLab CI"
  }
 },
 {
  "name": "Go",
  "type": "Technology",
  "count": 1,
  "levels": [
   "",
   "",
   "",
   "",
   "N"
  ],
  "evidence": {
   "4": "An additional language: Go, TypeScript, or Rust"
  }
 },
 {
  "name": "HTML",
  "type": "Technology",
  "count": 1,
  "levels": [
   "R",
   "",
   "",
   "",
   ""
  ],
  "evidence": {
   "0": "Frontend technologies such as React, Next.js, HTML, CSS, JavaScript"
  }
 },
 {
  "name": "Internal tools",
  "type": "Technology",
  "count": 1,
  "levels": [
   "",
   "R",
   "",
   "",
   ""
  ],
  "evidence": {
   "1": "Internal tools (to investigate product behavior, inspect structured data, debug issues, and test ideas)"
  }
 },
 {
  "name": "JavaScript",
  "type": "Technology",
  "count": 1,
  "levels": [
   "R",
   "",
   "",
   "",
   ""
  ],
  "evidence": {
   "0": "JavaScript; Good understanding of JavaScript and modern web development"
  }
 },
 {
  "name": "Kafka",
  "type": "Technology",
  "count": 1,
  "levels": [
   "",
   "",
   "",
   "",
   "N"
  ],
  "evidence": {
   "4": "Apache Spark, Apache Airflow, Kafka"
  }
 },
 {
  "name": "MCP (Model Context Protocol)",
  "type": "Technology",
  "count": 1,
  "levels": [
   "",
   "",
   "",
   "",
   "N"
  ],
  "evidence": {
   "4": "MCP: you can say why an agent would prefer it to a REST integration (having authored a server is an additional plus)"
  }
 },
 {
  "name": "Media workflows",
  "type": "Technology",
  "count": 1,
  "levels": [
   "",
   "N",
   "",
   "",
   ""
  ],
  "evidence": {
   "1": "Media workflows"
  }
 },
 {
  "name": "Next.js",
  "type": "Technology",
  "count": 1,
  "levels": [
   "R",
   "",
   "",
   "",
   ""
  ],
  "evidence": {
   "0": "Frontend technologies such as React, Next.js, HTML, CSS, JavaScript"
  }
 },
 {
  "name": "NLP",
  "type": "Technology",
  "count": 1,
  "levels": [
   "",
   "",
   "",
   "",
   "N"
  ],
  "evidence": {
   "4": "NLP, LLMs, and Recommendation engines - practical experience with one or more"
  }
 },
 {
  "name": "No-code / low-code tools",
  "type": "Technology",
  "count": 1,
  "levels": [
   "",
   "",
   "N",
   "",
   ""
  ],
  "evidence": {
   "2": "Experience with APIs, automation platforms, and no-code/low-code tools is a strong plus"
  }
 },
 {
  "name": "Node.js",
  "type": "Technology",
  "count": 1,
  "levels": [
   "R",
   "",
   "",
   "",
   ""
  ],
  "evidence": {
   "0": "Basic backend development with Node.js, Python, or similar technologies"
  }
 },
 {
  "name": "Other programming languages (unspecified)",
  "type": "Technology",
  "count": 1,
  "levels": [
   "",
   "",
   "N",
   "",
   ""
  ],
  "evidence": {
   "2": "Experience with Python or other programming languages is a plus"
  }
 },
 {
  "name": "PostgreSQL, MySQL, MongoDB or similar",
  "type": "Technology",
  "count": 1,
  "levels": [
   "N",
   "",
   "",
   "",
   ""
  ],
  "evidence": {
   "0": "PostgreSQL, MySQL, MongoDB, or similar databases"
  }
 },
 {
  "name": "RAG systems",
  "type": "Technology",
  "count": 1,
  "levels": [
   "",
   "",
   "",
   "",
   "R"
  ],
  "evidence": {
   "4": "RAG systems; Hands-on experience building or contributing to RAG systems"
  }
 },
 {
  "name": "React",
  "type": "Technology",
  "count": 1,
  "levels": [
   "R",
   "",
   "",
   "",
   ""
  ],
  "evidence": {
   "0": "Frontend technologies such as React, Next.js, HTML, CSS, JavaScript"
  }
 },
 {
  "name": "Recommendation engines",
  "type": "Technology",
  "count": 1,
  "levels": [
   "",
   "",
   "",
   "",
   "N"
  ],
  "evidence": {
   "4": "NLP, LLMs, and Recommendation engines - practical experience with one or more"
  }
 },
 {
  "name": "Relational or NoSQL databases",
  "type": "Technology",
  "count": 1,
  "levels": [
   "R",
   "",
   "",
   "",
   ""
  ],
  "evidence": {
   "0": "Relational or NoSQL databases (familiarity)"
  }
 },
 {
  "name": "Rust",
  "type": "Technology",
  "count": 1,
  "levels": [
   "",
   "",
   "",
   "",
   "N"
  ],
  "evidence": {
   "4": "An additional language: Go, TypeScript, or Rust"
  }
 },
 {
  "name": "Sports-tech products",
  "type": "Technology",
  "count": 1,
  "levels": [
   "",
   "N",
   "",
   "",
   ""
  ],
  "evidence": {
   "1": "Sports-tech products"
  }
 }
];

export const RANKING: RankItem[] = [
 {
  "skill": "Building and shipping a portfolio project end to end",
  "band": "A",
  "docs": "https://docs.github.com/en/pages/quickstart",
  "tutorial": "https://github.com/skills/introduction-to-github",
  "inPostings": "Yes (merged rows)",
  "rank": 1
 },
 {
  "skill": "Python",
  "band": "A",
  "docs": "https://docs.python.org/3/tutorial/",
  "tutorial": "https://www.py4e.com/",
  "inPostings": "Yes",
  "rank": 2
 },
 {
  "skill": "LLM API integration (messages, tokens, streaming, rate limits)",
  "band": "A",
  "docs": "https://platform.claude.com/docs/en/api/overview",
  "tutorial": "https://github.com/anthropics/courses",
  "inPostings": "Yes (merged rows)",
  "rank": 3
 },
 {
  "skill": "Prompt engineering",
  "band": "A",
  "docs": "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview",
  "tutorial": "https://github.com/anthropics/prompt-eng-interactive-tutorial",
  "inPostings": "Yes",
  "rank": 4
 },
 {
  "skill": "AI agents, tool calling and structured outputs",
  "band": "A",
  "docs": "https://code.claude.com/docs/en/agent-sdk/overview",
  "tutorial": "https://huggingface.co/learn/agents-course",
  "inPostings": "Yes (merged rows)",
  "rank": 5
 },
 {
  "skill": "REST APIs: consuming and building them",
  "band": "A",
  "docs": "https://developer.mozilla.org/en-US/docs/Web/HTTP",
  "tutorial": "https://fastapi.tiangolo.com/tutorial/",
  "inPostings": "Yes (merged rows)",
  "rank": 6
 },
 {
  "skill": "Git and GitHub",
  "band": "A",
  "docs": "https://git-scm.com/docs",
  "tutorial": "https://learngitbranching.js.org/",
  "inPostings": "Yes (merged rows)",
  "rank": 7
 },
 {
  "skill": "Debugging and systematic problem-solving",
  "band": "A",
  "docs": "https://docs.python.org/3/library/pdb.html",
  "tutorial": "https://missing.csail.mit.edu/2020/debugging-profiling/",
  "inPostings": "Yes",
  "rank": 8
 },
 {
  "skill": "AI workflow automation",
  "band": "A",
  "docs": "https://docs.n8n.io/",
  "tutorial": "https://docs.n8n.io/try-it-out/",
  "inPostings": "Yes (merged rows)",
  "rank": 9
 },
 {
  "skill": "Evaluating non-deterministic systems (LLM evals, test cycles)",
  "band": "A",
  "docs": "https://platform.claude.com/docs/en/test-and-evaluate/develop-tests",
  "tutorial": "https://www.promptfoo.dev/docs/getting-started/",
  "inPostings": "Yes",
  "rank": 10
 },
 {
  "skill": "RAG, embeddings and vector search",
  "band": "B",
  "docs": "https://docs.langchain.com/oss/python/langchain/overview",
  "tutorial": "https://huggingface.co/learn/cookbook/advanced_rag",
  "inPostings": "Yes (merged rows)",
  "rank": 11
 },
 {
  "skill": "Automated testing (unit and integration)",
  "band": "B",
  "docs": "https://docs.python.org/3/library/unittest.html",
  "tutorial": "https://docs.pytest.org/en/stable/getting-started.html",
  "inPostings": "No - added by review",
  "rank": 12
 },
 {
  "skill": "JavaScript",
  "band": "B",
  "docs": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  "tutorial": "https://javascript.info/",
  "inPostings": "Yes",
  "rank": 13
 },
 {
  "skill": "TypeScript",
  "band": "B",
  "docs": "https://www.typescriptlang.org/docs/handbook/intro.html",
  "tutorial": "https://exercism.org/tracks/typescript",
  "inPostings": "Yes",
  "rank": 14
 },
 {
  "skill": "React and Next.js",
  "band": "B",
  "docs": "https://react.dev/learn",
  "tutorial": "https://nextjs.org/learn",
  "inPostings": "Yes (merged rows)",
  "rank": 15
 },
 {
  "skill": "HTML, CSS and responsive web development",
  "band": "B",
  "docs": "https://developer.mozilla.org/en-US/docs/Learn_web_development",
  "tutorial": "https://www.freecodecamp.org/learn/responsive-web-design/",
  "inPostings": "Yes (merged rows)",
  "rank": 16
 },
 {
  "skill": "Node.js",
  "band": "B",
  "docs": "https://nodejs.org/docs/latest/api/",
  "tutorial": "https://nodejs.org/en/learn/getting-started/introduction-to-nodejs",
  "inPostings": "Yes",
  "rank": 17
 },
 {
  "skill": "SQL and databases (relational and NoSQL)",
  "band": "B",
  "docs": "https://www.postgresql.org/docs/current/",
  "tutorial": "https://pgexercises.com/",
  "inPostings": "Yes (merged rows)",
  "rank": 18
 },
 {
  "skill": "AWS core services (Lambda, S3, ECS) and Bedrock",
  "band": "B",
  "docs": "https://docs.aws.amazon.com/",
  "tutorial": "https://aws.amazon.com/getting-started/hands-on/",
  "inPostings": "Yes (merged rows)",
  "rank": 19
 },
 {
  "skill": "Containers (Docker)",
  "band": "B",
  "docs": "https://docs.docker.com/",
  "tutorial": "https://docs.docker.com/get-started/introduction/",
  "inPostings": "Yes",
  "rank": 20
 },
 {
  "skill": "CI/CD pipelines (GitHub Actions)",
  "band": "B",
  "docs": "https://docs.github.com/en/actions",
  "tutorial": "https://docs.github.com/en/actions/get-started/quickstart",
  "inPostings": "Yes (merged rows)",
  "rank": 21
 },
 {
  "skill": "Command line, Linux and environment management",
  "band": "B",
  "docs": "https://www.gnu.org/software/bash/manual/bash.html",
  "tutorial": "https://missing.csail.mit.edu/",
  "inPostings": "No - added by review",
  "rank": 22
 },
 {
  "skill": "LLM cost, latency and observability",
  "band": "B",
  "docs": "https://platform.claude.com/docs/en/build-with-claude/token-counting",
  "tutorial": "https://langfuse.com/docs",
  "inPostings": "Yes (merged rows)",
  "rank": 23
 },
 {
  "skill": "Secrets handling and API security",
  "band": "B",
  "docs": "https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html",
  "tutorial": "https://portswigger.net/web-security",
  "inPostings": "No - added by review",
  "rank": 24
 },
 {
  "skill": "MCP (Model Context Protocol)",
  "band": "B",
  "docs": "https://modelcontextprotocol.io/",
  "tutorial": "https://modelcontextprotocol.io/docs/develop/build-server",
  "inPostings": "Yes",
  "rank": 25
 },
 {
  "skill": "Data wrangling (pandas)",
  "band": "B",
  "docs": "https://pandas.pydata.org/docs/",
  "tutorial": "https://pandas.pydata.org/docs/getting_started/intro_tutorials/index.html",
  "inPostings": "No - added by review",
  "rank": 26
 },
 {
  "skill": "Deployment and DevOps basics",
  "band": "B",
  "docs": "",
  "tutorial": "",
  "inPostings": "Yes (merged rows)",
  "rank": 27
 },
 {
  "skill": "No-code and low-code automation platforms",
  "band": "B",
  "docs": "https://www.classcentral.com/subject/no-code-development",
  "tutorial": "https://www.classcentral.com/subject/no-code-development",
  "inPostings": "Yes",
  "rank": 28
 },
 {
  "skill": "Technical writing: documenting work and decisions",
  "band": "C",
  "docs": "",
  "tutorial": "",
  "inPostings": "Yes",
  "rank": 29
 },
 {
  "skill": "Software and engineering fundamentals (sum of the rows above)",
  "band": "C",
  "docs": "",
  "tutorial": "",
  "inPostings": "Yes",
  "rank": 30
 },
 {
  "skill": "Prototyping quickly to test an idea",
  "band": "C",
  "docs": "",
  "tutorial": "",
  "inPostings": "Yes",
  "rank": 31
 },
 {
  "skill": "Authentication, payments and third-party API integration",
  "band": "C",
  "docs": "",
  "tutorial": "",
  "inPostings": "Yes (merged rows)",
  "rank": 32
 },
 {
  "skill": "Spec-driven development and working with coding agents (Claude Code, CLAUDE.md, hooks, skills)",
  "band": "C",
  "docs": "",
  "tutorial": "",
  "inPostings": "Yes (merged rows)",
  "rank": 33
 },
 {
  "skill": "Cloud platforms beyond AWS (Azure, Google Cloud)",
  "band": "C",
  "docs": "",
  "tutorial": "",
  "inPostings": "Yes (merged rows)",
  "rank": 34
 },
 {
  "skill": "Data pipelines (Apache Spark, Airflow, Kafka)",
  "band": "C",
  "docs": "",
  "tutorial": "",
  "inPostings": "Yes (merged rows)",
  "rank": 35
 },
 {
  "skill": "NLP and recommendation engines",
  "band": "C",
  "docs": "",
  "tutorial": "",
  "inPostings": "Yes",
  "rank": 36
 },
 {
  "skill": "An additional language (Go or Rust)",
  "band": "C",
  "docs": "",
  "tutorial": "",
  "inPostings": "Yes",
  "rank": 37
 },
 {
  "skill": "GitLab CI",
  "band": "C",
  "docs": "",
  "tutorial": "",
  "inPostings": "Yes",
  "rank": 38
 },
 {
  "skill": "A2A (agent-to-agent interoperability)",
  "band": "C",
  "docs": "",
  "tutorial": "",
  "inPostings": "Yes (merged rows)",
  "rank": 39
 },
 {
  "skill": "Internal tools development",
  "band": "C",
  "docs": "",
  "tutorial": "",
  "inPostings": "Yes",
  "rank": 40
 },
 {
  "skill": "CMS, content and media platforms",
  "band": "C",
  "docs": "",
  "tutorial": "",
  "inPostings": "Yes",
  "rank": 41
 },
 {
  "skill": "AWS and Claude Code certifications",
  "band": "D",
  "docs": "",
  "tutorial": "",
  "inPostings": "Yes",
  "rank": 42
 },
 {
  "skill": "Collaboration and teamwork",
  "band": "D",
  "docs": "",
  "tutorial": "",
  "inPostings": "Yes",
  "rank": 43
 },
 {
  "skill": "Communication, written and spoken",
  "band": "D",
  "docs": "",
  "tutorial": "",
  "inPostings": "Yes",
  "rank": 44
 },
 {
  "skill": "Self-direction, initiative and proactiveness",
  "band": "D",
  "docs": "",
  "tutorial": "",
  "inPostings": "Yes",
  "rank": 45
 },
 {
  "skill": "Product judgment: requirements and prioritisation",
  "band": "D",
  "docs": "",
  "tutorial": "",
  "inPostings": "Yes (merged rows)",
  "rank": 46
 },
 {
  "skill": "Client and customer-facing delivery",
  "band": "D",
  "docs": "",
  "tutorial": "",
  "inPostings": "Yes",
  "rank": 47
 },
 {
  "skill": "End-to-end and outcome ownership",
  "band": "D",
  "docs": "",
  "tutorial": "",
  "inPostings": "Yes",
  "rank": 48
 },
 {
  "skill": "Clear thinking about the problem and the choices made",
  "band": "D",
  "docs": "",
  "tutorial": "",
  "inPostings": "Yes",
  "rank": 49
 },
 {
  "skill": "Applying and responding to feedback",
  "band": "D",
  "docs": "",
  "tutorial": "",
  "inPostings": "Yes",
  "rank": 50
 },
 {
  "skill": "Standards and quality judgment",
  "band": "D",
  "docs": "",
  "tutorial": "",
  "inPostings": "Yes",
  "rank": 51
 },
 {
  "skill": "Technical mindedness (tools, data, permissions, dependencies, failure modes)",
  "band": "D",
  "docs": "",
  "tutorial": "",
  "inPostings": "Yes",
  "rank": 52
 },
 {
  "skill": "Comfort with ambiguity",
  "band": "D",
  "docs": "",
  "tutorial": "",
  "inPostings": "Yes",
  "rank": 53
 },
 {
  "skill": "Becoming productive in an unfamiliar codebase",
  "band": "D",
  "docs": "",
  "tutorial": "",
  "inPostings": "Yes (merged rows)",
  "rank": 54
 },
 {
  "skill": "Identifying business processes worth automating",
  "band": "D",
  "docs": "",
  "tutorial": "",
  "inPostings": "Yes",
  "rank": 55
 },
 {
  "skill": "Understanding how a customer or business works",
  "band": "D",
  "docs": "",
  "tutorial": "",
  "inPostings": "Yes",
  "rank": 56
 },
 {
  "skill": "Curiosity about users and business needs",
  "band": "D",
  "docs": "",
  "tutorial": "",
  "inPostings": "Yes",
  "rank": 57
 },
 {
  "skill": "Reliability",
  "band": "D",
  "docs": "",
  "tutorial": "",
  "inPostings": "Yes",
  "rank": 58
 },
 {
  "skill": "Being well-organised",
  "band": "D",
  "docs": "",
  "tutorial": "",
  "inPostings": "Yes",
  "rank": 59
 },
 {
  "skill": "Creative thinking",
  "band": "D",
  "docs": "",
  "tutorial": "",
  "inPostings": "Yes",
  "rank": 60
 },
 {
  "skill": "English language proficiency",
  "band": "E",
  "docs": "",
  "tutorial": "",
  "inPostings": "Yes",
  "rank": 61
 },
 {
  "skill": "Startup, freelance or remote work experience",
  "band": "E",
  "docs": "",
  "tutorial": "",
  "inPostings": "Yes",
  "rank": 62
 },
 {
  "skill": "Comfortable working remotely",
  "band": "E",
  "docs": "",
  "tutorial": "",
  "inPostings": "Yes",
  "rank": 63
 },
 {
  "skill": "Reliable high-speed internet connection",
  "band": "E",
  "docs": "",
  "tutorial": "",
  "inPostings": "Yes",
  "rank": 64
 },
 {
  "skill": "Sports-tech product domain",
  "band": "E",
  "docs": "",
  "tutorial": "",
  "inPostings": "",
  "rank": 65
 }
];
