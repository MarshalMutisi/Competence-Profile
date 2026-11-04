import type { Job } from "@/lib/types";

export default function EligibilityPill({ status, long = false }: { status: Job["eligibility"]; long?: boolean }) {
  const text =
    status === "eligible"
      ? long ? "Open to applicants in Zimbabwe" : "Open from Zimbabwe"
      : long ? "Zimbabwe eligibility unconfirmed" : "Eligibility unconfirmed";
  return <span className={`pill pill-${status}`}>{text}</span>;
}
