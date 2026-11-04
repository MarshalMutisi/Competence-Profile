"use client";

import { Fragment, useMemo, useState } from "react";
import { DEMAND } from "@/data/demand";
import { JOBS } from "@/data/profile";
import { toolsByDemand } from "@/lib/derive";
import type { Level } from "@/lib/types";

const LEVEL_LABEL: Record<Level, string> = { R: "Required", N: "Nice to have", L: "Listed, no level given", "": "" };

export default function DemandMatrix() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState<"all" | "Skill" | "Technology">("all");
  const [min, setMin] = useState(1);
  const [mineOnly, setMineOnly] = useState(false);
  const [open, setOpen] = useState<string | null>(null);

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return DEMAND.filter(
      (d) =>
        (type === "all" || d.type === type) &&
        d.count >= min &&
        (!mineOnly || toolsByDemand[d.name]) &&
        (!q || d.name.toLowerCase().includes(q) || (toolsByDemand[d.name] ?? []).some((t) => t.toLowerCase().includes(q)))
    );
  }, [query, type, min, mineOnly]);

  const inAll = DEMAND.filter((d) => d.count === JOBS.length);

  return (
    <>
      <div className="common">
        <p>Asked for by all five postings:</p>
        <div className="chips">{inAll.map((d) => <span key={d.name} className="chip">{d.name}</span>)}</div>
      </div>

      <div className="toolbar">
        <label className="search">
          <span className="visually-hidden">Search skills and technologies</span>
          <input
            id="demand-search"
            type="search"
            placeholder="Search, e.g. Python, RAG, AWS"
            autoComplete="off"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
        <div className="seg" role="group" aria-label="Type">
          {(["all", "Skill", "Technology"] as const).map((v) => (
            <button key={v} type="button" aria-pressed={type === v} onClick={() => setType(v)}>
              {v === "all" ? "All" : v === "Skill" ? "Skills" : "Technologies"}
            </button>
          ))}
        </div>
        <label className="select">
          <span>Postings</span>
          <select id="demand-min" value={min} onChange={(e) => setMin(Number(e.target.value))}>
            <option value={1}>Any</option>
            <option value={2}>2 or more</option>
            <option value={3}>3 or more</option>
            <option value={5}>All 5</option>
          </select>
        </label>
        <label className="check">
          <input id="demand-mine" type="checkbox" checked={mineOnly} onChange={(e) => setMineOnly(e.target.checked)} />
          <span>Only items related to my stack</span>
        </label>
      </div>

      <div className="legend">
        <span><i className="mk mk-R" />Required</span>
        <span><i className="mk mk-N" />Nice to have</span>
        <span><i className="mk mk-L" />Listed, no level given</span>
        <span className="legend-count">{rows.length} of {DEMAND.length} items</span>
      </div>

      <div className="table-wrap">
        <table className="matrix">
          <thead>
            <tr>
              <th scope="col">Skill or technology</th>
              <th scope="col">Postings</th>
              {JOBS.map((j) => (
                <th key={j.id} scope="col" className="co">
                  <abbr title={`${j.company}: ${j.title}`}>{j.short}</abbr>
                </th>
              ))}
              <th scope="col">Related in my stack</th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 && (
              <tr><td colSpan={JOBS.length + 3} className="muted">No items match these filters.</td></tr>
            )}
            {rows.map((d) => {
              const expanded = open === d.name;
              return (
                <Fragment key={d.name}>
                  <tr
                    className="row"
                    tabIndex={0}
                    aria-expanded={expanded}
                    onClick={() => setOpen(expanded ? null : d.name)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setOpen(expanded ? null : d.name);
                      }
                    }}
                  >
                    <td>
                      <div className="item-name">{d.name}</div>
                      <div className="item-type">{d.type}</div>
                    </td>
                    <td className="count-cell">
                      <span className="dots" aria-hidden="true">
                        {JOBS.map((_, i) => <i key={i} className={i < d.count ? "on" : undefined} />)}
                      </span>
                      <b>{d.count}/5</b>
                    </td>
                    {d.levels.map((l, i) => (
                      <td key={i} className="co">
                        {l && <i className={`mk mk-${l}`} title={`${JOBS[i].company}: ${LEVEL_LABEL[l]}`} />}
                        {l && <span className="visually-hidden">{LEVEL_LABEL[l]}</span>}
                      </td>
                    ))}
                    <td className="mine">{(toolsByDemand[d.name] ?? []).join(", ")}</td>
                  </tr>
                  {expanded && (
                    <tr className="evidence">
                      <td colSpan={JOBS.length + 3}>
                        <ul>
                          {d.levels.map((l, i) =>
                            l ? (
                              <li key={i}>
                                <span className="who">{JOBS[i].company}</span>
                                <span>
                                  {d.evidence[String(i)] ? (
                                    <q>{d.evidence[String(i)]}</q>
                                  ) : (
                                    <span className="muted">Marked {LEVEL_LABEL[l].toLowerCase()} after my review of the posting; no quote recorded.</span>
                                  )}{" "}
                                  <span className="muted">({LEVEL_LABEL[l]})</span>
                                </span>
                              </li>
                            ) : null
                          )}
                        </ul>
                      </td>
                    </tr>
                  )}
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
