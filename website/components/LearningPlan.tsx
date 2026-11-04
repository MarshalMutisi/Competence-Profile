import { LEARNING_PLAN } from "@/data/my-analysis";
import { jobById, planTotals, weekRange } from "@/lib/derive";

const eur = new Intl.NumberFormat("en-GB", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

export default function LearningPlan() {
  const { startDate, totalWeeks: TOTAL_WEEKS, hoursPerWeek, weeks } = LEARNING_PLAN;
  const available = hoursPerWeek * TOTAL_WEEKS;
  const totals = planTotals(weeks);
  const pct = available ? Math.min(100, (totals.hours / available) * 100) : 0;
  const over = totals.hours > available;
  const byWeek = new Map(weeks.map((w) => [w.week, w]));
  const sorted = [...weeks].sort((a, b) => a.week - b.week);
  const bySkill: { skill: string; from: number; to: number; hours: number }[] = [];
  for (const w of sorted) {
    const last = bySkill[bySkill.length - 1];
    if (last && last.skill === w.skill && last.to === w.week - 1) {
      last.to = w.week;
      last.hours += w.hours || 0;
    } else {
      bySkill.push({ skill: w.skill, from: w.week, to: w.week, hours: w.hours || 0 });
    }
  }

  return (
    <>
      <div className="plan-summary">
        <div className="ps">
          <span className="lab">Planned hours</span>
          <strong>
            {totals.hours} <small>/ {available} h available</small>
          </strong>
          <div className={`bar${over ? " over" : ""}`} aria-hidden="true"><i style={{ width: `${pct}%` }} /></div>
          <small>{over ? `${totals.hours - available} h over budget` : `${hoursPerWeek} h per week alongside university`}</small>
        </div>
        <div className="ps">
          <span className="lab">Total cost</span>
          <strong>{eur.format(totals.cost)}</strong>
          <small>{totals.cost === 0 ? "Free resources only" : "Paid tools and services included"}</small>
        </div>
        <div className="ps">
          <span className="lab">Weeks planned</span>
          <strong>
            {weeks.length} <small>/ {TOTAL_WEEKS}</small>
          </strong>
          <small>{startDate ? `Starts ${weekRange(startDate, 1).split(" – ")[0]}` : "Start date not set yet"}</small>
        </div>
      </div>

      {bySkill.length > 0 && (
        <div className="table-wrap">
          <table className="skill-plan">
            <thead>
              <tr>
                <th scope="col">Skill</th>
                <th scope="col">Duration</th>
                <th scope="col" className="num">Study + practice</th>
              </tr>
            </thead>
            <tbody>
              {bySkill.map((r) => (
                <tr key={`${r.skill}-${r.from}`}>
                  <td><a href={`#week-${r.from}`}>{r.skill}</a></td>
                  <td>{r.from === r.to ? `Week ${r.from}` : `Weeks ${r.from}–${r.to}`}</td>
                  <td className="num">{r.hours} hours</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th scope="row">Total</th>
                <td>{TOTAL_WEEKS} weeks</td>
                <td className="num">{totals.hours} hours</td>
              </tr>
            </tfoot>
          </table>
        </div>
      )}

      <ol className="weeks">
        {Array.from({ length: TOTAL_WEEKS }, (_, i) => i + 1).map((n) => {
          const w = byWeek.get(n);
          const range = weekRange(startDate, n);
          if (!w) {
            return (
              <li key={n} id={`week-${n}`} className="week todo">
                <div className="wk-no"><b>{String(n).padStart(2, "0")}</b>{range && <span>{range}</span>}</div>
                <div className="wk-body">Not planned yet</div>
              </li>
            );
          }
          return (
            <li key={n} id={`week-${n}`} className="week">
              <div className="wk-no"><b>{String(n).padStart(2, "0")}</b>{range && <span>{range}</span>}</div>
              <div className="wk-body">
                <div className="wk-top">
                  <h3>{w.focus}</h3>
                  <span className="wk-meta">{w.hours} h · {w.cost ? eur.format(w.cost) : "free"}</span>
                </div>
                {w.linkedJobs.length > 0 && (
                  <div className="chips">
                    {w.linkedJobs.map((id) => <span key={id} className="chip">{jobById(id)?.company ?? id}</span>)}
                  </div>
                )}
                {w.why && <p>{w.why}</p>}
                {w.activities.length > 0 && <ul>{w.activities.map((a) => <li key={a}>{a}</li>)}</ul>}
                {w.resources.length > 0 && (
                  <div className="chips">
                    {w.resources.map((r) => (
                      <a key={r.url} className="chip" href={r.url} target="_blank" rel="noopener noreferrer">{r.label} ↗</a>
                    ))}
                  </div>
                )}
                {w.milestone && <div className="wk-ms"><b>Milestone:</b> {w.milestone}</div>}
              </div>
            </li>
          );
        })}
      </ol>
    </>
  );
}
