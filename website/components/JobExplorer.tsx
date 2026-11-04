"use client";

import { useState } from "react";
import { JOBS } from "@/data/profile";
import { GAP_ANALYSIS, LEARNING_PLAN } from "@/data/my-analysis";
import { gapSize } from "@/lib/derive";
import EligibilityPill from "./EligibilityPill";

export default function JobExplorer() {
  const [selected, setSelected] = useState(0);
  const job = JOBS[selected];
  const gaps = GAP_ANALYSIS.filter((g) => g.jobs.includes(job.id) && gapSize(g.current, g.target) > 0);
  const weeks = LEARNING_PLAN.weeks.filter((w) => w.linkedJobs.includes(job.id)).sort((a, b) => a.week - b.week);

  return (
    <div className="jobs">
      <div className="job-list" role="tablist" aria-label="Job postings">
        {JOBS.map((j, i) => (
          <button
            key={j.id}
            type="button"
            role="tab"
            id={`tab-${j.id}`}
            aria-selected={i === selected}
            aria-controls="job-detail"
            className="job-btn"
            onClick={() => setSelected(i)}
          >
            <span className="co">{j.company}</span>
            <span className="ti">{j.title}</span>
            <EligibilityPill status={j.eligibility} />
          </button>
        ))}
      </div>

      <article className="job-detail" id="job-detail" role="tabpanel" aria-labelledby={`tab-${job.id}`}>
        <header className="jd-head">
          <p className="eyebrow">
            {job.company} · {job.track}
          </p>
          <h3>{job.title}</h3>
        </header>

        <div className="jd-elig">
          <EligibilityPill status={job.eligibility} long />
          <p>{job.eligibilityNote}</p>
        </div>

        <dl className="kv">
          <div><dt>Location</dt><dd>{job.location}</dd></div>
          <div><dt>Hours</dt><dd>{job.hours}</dd></div>
          <div><dt>Pay</dt><dd>{job.pay}</dd></div>
          <div><dt>Language</dt><dd>{job.language}</dd></div>
        </dl>

        <div className="req-cols">
          <div>
            <h4>Required</h4>
            <ul className="req-list r">{job.required.map((r) => <li key={r}>{r}</li>)}</ul>
          </div>
          <div>
            <h4>Nice to have</h4>
            {job.nice.length ? (
              <ul className="req-list n">{job.nice.map((r) => <li key={r}>{r}</li>)}</ul>
            ) : (
              <p className="empty-note">The posting lists nothing as nice to have.</p>
            )}
          </div>
        </div>

        <div className="jd-block">
          <h4>Experience</h4>
          <ul>{job.experience.map((e) => <li key={e}>{e}</li>)}</ul>
        </div>

        {(gaps.length > 0 || weeks.length > 0 || job.url) && (
          <div className="jd-links">
            {gaps.length > 0 && (
              <div className="jd-block">
                <h4>My gaps for this role</h4>
                <div className="chips">{gaps.map((g) => <span key={g.skill} className="chip">{g.skill}</span>)}</div>
              </div>
            )}
            {weeks.length > 0 && (
              <div className="jd-block">
                <h4>Plan weeks for this role</h4>
                <div className="chips">
                  {weeks.map((w) => (
                    <a key={w.week} className="chip" href={`#week-${w.week}`}>Week {w.week}: {w.focus}</a>
                  ))}
                </div>
              </div>
            )}
            {job.url && (
              <a href={job.url} target="_blank" rel="noopener noreferrer">View the source posting ↗</a>
            )}
          </div>
        )}
      </article>
    </div>
  );
}
