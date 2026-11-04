"use client";

import { useEffect, useState } from "react";
import { LEARNING_PLAN } from "@/data/my-analysis";

export const SECTIONS = [
  { id: "postings", label: "Job postings" },
  { id: "demand", label: "Skills in demand" },
  { id: "skills", label: "My skills" },
  { id: "gaps", label: "Gap analysis" },
  { id: "plan", label: `${LEARNING_PLAN.totalWeeks}-week plan` },
];

export default function Sidebar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.querySelector(".nav a.active")?.scrollIntoView({ block: "nearest", inline: "nearest" });
  }, [active]);

  return (
    <aside className="sidebar">
      <a className="brand" href="#top">
        <span className="brand-mark" aria-hidden="true">MM</span>
        <span className="brand-text">
          Marshal Mutisi<small>Competence profile</small>
        </span>
      </a>
      <nav className="nav" aria-label="Sections">
        {SECTIONS.map((s) => (
          <a key={s.id} href={`#${s.id}`} className={active === s.id ? "active" : undefined}>
            {s.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
