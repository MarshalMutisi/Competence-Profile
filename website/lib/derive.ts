import { DEMAND } from "@/data/demand";
import { JOBS, SKILL_LINKS } from "@/data/profile";
import type { JobId, PlanWeek } from "@/lib/types";

/** Demand item name → my tools that relate to it. */
export const toolsByDemand: Record<string, string[]> = (() => {
  const out: Record<string, string[]> = {};
  for (const [tool, items] of Object.entries(SKILL_LINKS)) {
    for (const item of items) (out[item] ??= []).push(tool);
  }
  return out;
})();

/** My tool → number of postings that name it or a linked item. */
export function postingsForTool(tool: string): number {
  const jobs = new Set<number>();
  for (const name of SKILL_LINKS[tool] ?? []) {
    const item = DEMAND.find((d) => d.name === name);
    item?.levels.forEach((l, i) => l && jobs.add(i));
  }
  return jobs.size;
}

export const jobById = (id: JobId) => JOBS.find((j) => j.id === id);

export const LEVEL_NAMES = ["None", "Basic", "Working", "Strong"] as const;

export function gapSize(current: number, target: number) {
  return Math.max(0, target - current);
}

const fmt = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", timeZone: "UTC" });

/** "13 Oct – 19 Oct" for a given week, or "" without a start date. */
export function weekRange(startDate: string, week: number): string {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(startDate)) return "";
  const start = new Date(startDate + "T00:00:00Z");
  start.setUTCDate(start.getUTCDate() + (week - 1) * 7);
  const end = new Date(start);
  end.setUTCDate(end.getUTCDate() + 6);
  return `${fmt.format(start)} – ${fmt.format(end)}`;
}

export function planTotals(weeks: PlanWeek[]) {
  return {
    hours: weeks.reduce((s, w) => s + (w.hours || 0), 0),
    cost: weeks.reduce((s, w) => s + (w.cost || 0), 0),
  };
}
