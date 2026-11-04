import Sidebar from "@/components/Sidebar";
import JobExplorer from "@/components/JobExplorer";
import DemandMatrix from "@/components/DemandMatrix";
import GapAnalysis from "@/components/GapAnalysis";
import LearningPlan from "@/components/LearningPlan";
import { DEMAND } from "@/data/demand";
import { JOBS, MY_SKILLS, PROFILE } from "@/data/profile";
import { postingsForTool } from "@/lib/derive";
import { LEARNING_PLAN } from "@/data/my-analysis";

function SectionHead({ n, eyebrow, title, note }: { n: string; eyebrow: string; title: string; note?: string }) {
  return (
    <div className="section-head">
      <p className="eyebrow">{n} · {eyebrow}</p>
      <h2>{title}</h2>
      {note && <p className="section-note">{note}</p>}
    </div>
  );
}

export default function Home() {
  const openCount = JOBS.filter((j) => j.eligibility === "eligible").length;

  return (
    <div className="shell">
      <Sidebar />

      <main id="top" className="main">
        <header className="hero">
          <p className="eyebrow">{PROFILE.name} · Final product</p>
          <h1>AI Career Competence Profile</h1>
          <p className="lede">
            Five paid remote AI and full-stack job postings, what they ask for, what I can already do, where my gaps are,
            and the {LEARNING_PLAN.totalWeeks} weeks I will spend closing them.
          </p>
          <ul className="facts">
            <li><strong>{JOBS.length}</strong><span>remote postings analysed</span></li>
            <li><strong>{openCount}</strong><span>confirmed open from Zimbabwe</span></li>
            <li><strong>{DEMAND.length}</strong><span>skills and technologies compared</span></li>
            <li><strong>{LEARNING_PLAN.totalWeeks}</strong><span>week learning plan</span></li>
          </ul>
        </header>


        <section id="postings" className="section">
          <SectionHead
            n="01"
            eyebrow="Job postings"
            title="Five remote roles I analysed"
            note="Chosen for the kind of work I want, not the first five I found. A role is marked open only where the posting, the company or my own interview confirmed that applicants in Zimbabwe are accepted."
          />
          <JobExplorer />
        </section>

        <section id="demand" className="section">
          <SectionHead
            n="02"
            eyebrow="Skills in demand"
            title="What the five postings ask for"
            note="Each item counts once per posting. Select a row to read the exact wording from each posting."
          />
          <DemandMatrix />
        </section>

        <section id="skills" className="section">
          <SectionHead
            n="03"
            eyebrow="My skills"
            title="What I work with today"
            note="The number on a skill is how many of the five postings name it or a closely related item. No number means none of the postings mention it."
          />
          <div className="skill-groups">
            {MY_SKILLS.map((g) => (
              <div key={g.group} className="sg">
                <h3>{g.group}</h3>
                <div className="chips">
                  {g.items.map((s) => {
                    const n = postingsForTool(s);
                    return (
                      <span key={s} className="chip" title={n ? `Named in ${n} of 5 postings` : "Not named in the postings"}>
                        {s}
                        {n > 0 && <span className="n">{n}</span>}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="gaps" className="section">
          <SectionHead
            n="04"
            eyebrow="Gap analysis"
            title="Where I stand against the requirements"
            note="My own assessment of each skill, based on my projects, my degree and earlier applications. AI did not decide these levels."
          />
          <GapAnalysis />
        </section>

        <section id="plan" className="section">
          <SectionHead
            n="05"
            eyebrow={`${LEARNING_PLAN.totalWeeks}-week learning plan`}
            title="How I will close the gaps"
            note="Skills are prioritised by their relevance to the roles, their importance and how often they appear in the postings. Every resource is free. The timeframe is an estimate, since some concepts take longer to grasp than others."
          />
          <LearningPlan />
        </section>
      </main>
    </div>
  );
}
