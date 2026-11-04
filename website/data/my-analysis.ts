import type { GapEntry, LearningPlan } from "@/lib/types";

// ─────────────────────────────────────────────────────────────────────────────
//  YOUR FILE: gap analysis and 8-week learning plan.
//  The dev server reloads the page as you save. Everything else on the site updates by itself.
//  Job ids you can use in `jobs` / `linkedJobs`:
//    "nexorlio", "storyteller", "evotym", "soundsense", "provectus"
// ─────────────────────────────────────────────────────────────────────────────

// GAP ANALYSIS
// Only skills I still need to learn. Every other requirement in the postings is covered by my current skills.
// Fields:
//   skill     – name of the skill or technology
//   current   – 0 = none, 1 = basic, 2 = working, 3 = strong   (my level today)
//   target    – 0–3, the level the jobs need
//   jobs      – job ids that ask for it
//   action    – what I will do to close the gap ("" if no gap)
//   priority  – true to show it first with a "Top priority" tag (optional)
export const GAP_ANALYSIS: GapEntry[] = [
  {
    skill: "AWS",
    current: 1,
    target: 3,
    jobs: ["provectus"],
    action: "8-week plan, weeks 1–3: learn the AWS services my full-stack and AI projects need, and deploy a project on them.",
    priority: true
  },
  {
    skill: "Apache Spark, Airflow and Kafka",
    current: 0,
    target: 1,
    jobs: ["provectus"],
    action: "8-week plan, weeks 6–7: build a data pipeline with Airflow and Kafka that keeps a RAG knowledge base up to date."
  },
  {
    skill: "A2A (agent-to-agent interoperability)",
    current: 0,
    target: 1,
    jobs: ["provectus"],
    action: "8-week plan, weeks 4–5: connect two of my agents through the A2A protocol, then build a project with it."
  },
  {
    skill: "CMS",
    current: 1,
    target: 2,
    jobs: ["storyteller"],
    action: "Add later, after the 8-week plan."
  },
  {
    skill: "GitLab CI",
    current: 0,
    target: 1,
    jobs: ["provectus"],
    action: "Add later, after the 8-week plan."
  },
  {
    skill: "Rust",
    current: 0,
    target: 2,
    jobs: ["provectus"],
    action: "Add later, after the 8-week plan."
  },
  {
    skill: "Go",
    current: 0,
    target: 2,
    jobs: ["provectus"],
    action: "8-week plan, week 8: build, test and deploy a Go REST API connected to an LLM API or vector database."
  },
  {
    skill: "Other programming languages",
    current: 2,
    target: 1,
    jobs: ["evotym"],
    action: ""
  }
];

// 8-WEEK LEARNING PLAN
// Skills were prioritised by their relevance to the roles, their importance and how often they appear in the postings.
// Zero-cost resources only. The timeframe is an estimate, since some concepts take longer to grasp than others.
//   startDate          – "YYYY-MM-DD" of week 1 (optional, adds dates to each week)
//   totalWeeks         – length of the plan
//   hoursPerWeek       – hours I have for learning each week (1 h study + 1 h practice, 5 days a week)
//   weeks              – one entry per week. Fields:
//     week         – 1 to totalWeeks
//     skill        – skill name for the summary table (same name on consecutive weeks = one row)
//     focus        – the skill or topic of the week
//     linkedJobs   – job ids this week prepares me for
//     why          – why it matters for those jobs
//     activities   – list of tasks / exercises
//     hours        – planned hours
//     cost         – cost in EUR (0 if free)
//     resources    – list of { label: "...", url: "https://..." }
//     milestone    – what I will have finished by the end of the week
const AWS_WHY =
  "Practical AWS experience is required by Provectus, and nexorlio lists cloud as nice to have. Hosting my projects on AWS gives me hands-on production experience. AWS is broad, so I only learn the services I need to build and deploy my full-stack and AI projects.";
const AWS_TUTORIALS = { label: "AWS hands-on tutorials", url: "https://aws.amazon.com/getting-started/hands-on/" };
const A2A_WHY =
  "Provectus lists A2A as nice to have, and Evotym requires building AI agents. Connecting agents through a standard protocol builds on my existing LangGraph and Pydantic AI work.";
const A2A_DOCS = { label: "A2A protocol (official repo and docs)", url: "https://github.com/a2aproject/A2A" };
const DATA_WHY =
  "Provectus lists Apache Spark, Airflow and Kafka as nice to have, and data pipelines feed the RAG systems that Provectus requires.";
const DATA_DOCS = [
  { label: "Airflow tutorial", url: "https://airflow.apache.org/docs/apache-airflow/stable/tutorial/fundamentals.html" },
  { label: "Kafka quickstart", url: "https://kafka.apache.org/quickstart" }
];

export const LEARNING_PLAN: LearningPlan = {
  startDate: "",
  totalWeeks: 8,
  hoursPerWeek: 10,
  weeks: [
    {
      week: 1,
      skill: "AWS",
      focus: "AWS core services",
      linkedJobs: ["provectus", "nexorlio"],
      why: AWS_WHY,
      activities: ["Study IAM, VPC, EC2 and S3 (1 h a day)", "Practise each service hands-on (1 h a day)"],
      hours: 10,
      cost: 0,
      resources: [AWS_TUTORIALS],
      milestone: "A project running on EC2 with S3 storage and IAM roles"
    },
    {
      week: 2,
      skill: "AWS",
      focus: "Serverless APIs and Bedrock on AWS",
      linkedJobs: ["provectus", "nexorlio"],
      why: AWS_WHY,
      activities: ["Deploy serverless APIs with Lambda", "Call models through the Bedrock API"],
      hours: 10,
      cost: 0,
      resources: [AWS_TUTORIALS],
      milestone: "An AI project served by Lambda and the Bedrock API"
    },
    {
      week: 3,
      skill: "AWS",
      focus: "AWS project",
      linkedJobs: ["provectus", "nexorlio"],
      why: AWS_WHY,
      activities: ["Build and deploy a full-stack AI project on AWS to prove I can apply what I learned"],
      hours: 10,
      cost: 0,
      resources: [AWS_TUTORIALS],
      milestone: "A full-stack AI project deployed on AWS"
    },
    {
      week: 4,
      skill: "A2A",
      focus: "A2A specification",
      linkedJobs: ["provectus", "evotym"],
      why: A2A_WHY,
      activities: ["Read the A2A specification: agent cards, tasks and messages", "Expose one of my existing agents as an A2A server"],
      hours: 10,
      cost: 0,
      resources: [A2A_DOCS],
      milestone: "One of my agents running as an A2A server"
    },
    {
      week: 5,
      skill: "A2A",
      focus: "A2A agents working together",
      linkedJobs: ["provectus", "evotym"],
      why: A2A_WHY,
      activities: ["Have a second agent discover the first and delegate a task to it", "Build a small project on top of it"],
      hours: 10,
      cost: 0,
      resources: [A2A_DOCS],
      milestone: "Two agents working together through A2A in a project"
    },
    {
      week: 6,
      skill: "Kafka and Spark",
      focus: "Airflow and Kafka setup",
      linkedJobs: ["provectus"],
      why: DATA_WHY,
      activities: [
        "Run Airflow and Kafka locally with Docker",
        "Write an Airflow DAG that collects documents, embeds them and loads them into my vector database"
      ],
      hours: 10,
      cost: 0,
      resources: DATA_DOCS,
      milestone: "An Airflow DAG that loads embedded documents into my vector database"
    },
    {
      week: 7,
      skill: "Kafka and Spark",
      focus: "Streaming RAG pipeline",
      linkedJobs: ["provectus"],
      why: DATA_WHY,
      activities: ["Stream new documents through a Kafka topic", "Schedule the pipeline end to end"],
      hours: 10,
      cost: 0,
      resources: DATA_DOCS,
      milestone: "A scheduled pipeline that keeps a RAG knowledge base continuously up to date"
    },
    {
      week: 8,
      skill: "Go",
      focus: "Go (Golang) fundamentals",
      linkedJobs: ["provectus"],
      why: "Provectus lists Go, TypeScript or Rust as desirable languages. I chose Go for its strength in backend development, concurrency, microservices and distributed systems.",
      activities: [
        "Study the official Go material: syntax, structs, interfaces, pointers, error handling, goroutines, channels and HTTP servers",
        "Build a REST API connected to an LLM API or vector database, with basic database operations",
        "Write tests, containerise it with Docker and deploy it to my AWS environment"
      ],
      hours: 10,
      cost: 0,
      resources: [
        { label: "A Tour of Go", url: "https://go.dev/tour/" },
        { label: "Go documentation", url: "https://go.dev/doc/" }
      ],
      milestone: "A tested Go REST API running on AWS"
    }
  ]
};
