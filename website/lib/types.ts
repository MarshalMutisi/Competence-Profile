export type JobId = "nexorlio" | "storyteller" | "evotym" | "soundsense" | "provectus";

/** R = required, N = nice to have, L = listed without a level, "" = not mentioned */
export type Level = "R" | "N" | "L" | "";

export interface DemandItem {
  name: string;
  type: "Skill" | "Technology";
  count: number;
  /** Same order as JOBS */
  levels: Level[];
  /** Verbatim quote keyed by job index ("0"–"4") */
  evidence: Record<string, string>;
}

export interface RankItem {
  rank: number;
  skill: string;
  band: "A" | "B" | "C" | "D" | "E";
  docs: string;
  tutorial: string;
  inPostings: string;
}

export interface Job {
  id: JobId;
  short: string;
  company: string;
  title: string;
  track: string;
  eligibility: "eligible" | "unconfirmed";
  eligibilityNote: string;
  location: string;
  hours: string;
  pay: string;
  language: string;
  experience: string[];
  required: string[];
  nice: string[];
  url: string;
}

/** 0 = none, 1 = basic, 2 = working, 3 = strong */
export type SkillLevel = 0 | 1 | 2 | 3;

export interface GapEntry {
  skill: string;
  current: SkillLevel;
  target: SkillLevel;
  jobs: JobId[];
  evidence?: string;
  action: string;
  /** Shown first, with a "Top priority" tag */
  priority?: boolean;
}

export interface PlanWeek {
  week: number;
  /** Skill this week belongs to; consecutive weeks with the same skill form one row in the summary table */
  skill: string;
  focus: string;
  linkedJobs: JobId[];
  why: string;
  activities: string[];
  hours: number;
  cost: number;
  resources: { label: string; url: string }[];
  milestone: string;
}

export interface LearningPlan {
  /** "YYYY-MM-DD" of week 1, or "" */
  startDate: string;
  totalWeeks: number;
  hoursPerWeek: number;
  weeks: PlanWeek[];
}
