import { GAP_ANALYSIS } from "@/data/my-analysis";
import { LEVEL_NAMES, gapSize, jobById } from "@/lib/derive";

const GAP_LABEL = ["On target", "Small gap", "Large gap"];

export default function GapAnalysis() {
  if (GAP_ANALYSIS.length === 0) {
    return (
      <div className="pending">
        <h3>Self-assessment in progress</h3>
        <p>
          This section will rate each required skill from none to strong, compare it with the level the postings ask for,
          and note the evidence and next step for each gap.
        </p>
        <p className="hint">
          Add entries to <code>data/my-analysis.ts</code> under <code>GAP_ANALYSIS</code> to fill it in.
        </p>
      </div>
    );
  }

  const rows = [...GAP_ANALYSIS].sort(
    (a, b) =>
      Number(!!b.priority) - Number(!!a.priority) ||
      gapSize(b.current, b.target) - gapSize(a.current, a.target) ||
      a.skill.localeCompare(b.skill)
  );
  const counts = [0, 0, 0];
  rows.forEach((g) => counts[Math.min(2, gapSize(g.current, g.target))]++);

  return (
    <>
      <div className="gap-summary">
        {GAP_LABEL.map((label, i) => (
          <div key={label} className="gap-stat">
            <strong>{counts[i]}</strong>
            <span className={`gap-tag gap-${i}`}>{label}</span>
          </div>
        ))}
      </div>
      <div className="table-wrap">
        <table className="gap-table">
          <thead>
            <tr>
              <th scope="col">Skill</th>
              <th scope="col">Now vs needed</th>
              <th scope="col">Gap</th>
              <th scope="col">Postings</th>
              <th scope="col">Next step</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((g) => {
              const size = Math.min(2, gapSize(g.current, g.target));
              return (
                <tr key={g.skill}>
                  <td>
                    <strong>{g.skill}</strong>
                    {g.priority && <span className="prio">Top priority</span>}
                  </td>
                  <td>
                    <span className="levels" aria-hidden="true">
                      {[1, 2, 3].map((n) => (
                        <i key={n} className={[n <= g.current && "cur", n <= g.target && "tgt"].filter(Boolean).join(" ")} />
                      ))}
                    </span>
                    <span className="level-text">
                      {LEVEL_NAMES[g.current]} → {LEVEL_NAMES[g.target]}
                    </span>
                  </td>
                  <td><span className={`gap-tag gap-${size}`}>{GAP_LABEL[size]}</span></td>
                  <td>
                    <div className="chips">
                      {g.jobs.map((id) => <span key={id} className="chip" title={jobById(id)?.title}>{jobById(id)?.company ?? id}</span>)}
                    </div>
                  </td>
                  <td>
                    <div className="cell-notes">
                      {g.evidence && <span>{g.evidence}</span>}
                      {g.action && <b>{g.action}</b>}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="gap-foot">
        Only skills with something left to learn are listed. I already have every other skill and technology the five
        postings ask for, so they need no further study for these roles.
      </p>
    </>
  );
}
