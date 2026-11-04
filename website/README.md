# AI Career Competence Profile

Next.js (App Router, TypeScript) site presenting five remote AI job postings, my skills, my gap analysis and my 8-week learning plan.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000, reloads as you edit
npm run build    # static site written to /out
```

## Where the content lives

| File | What it holds |
| --- | --- |
| `data/my-analysis.ts` | **Gap analysis and 8-week plan. Fill this in.** Field guide and examples are in the comments. |
| `data/profile.ts` | Profile, CV skills, the five jobs, links between my tools and job requirements, AI-use notes |
| `data/demand.ts` | Generated from `job_skills_frequency.xlsx` and the priority-ranking spreadsheet |

## Deploy

The build is a plain static site in `/out`.

- **Vercel**: import the repo; no settings needed.
- **Netlify**: build command `npm run build`, publish directory `out`.
- **GitHub Pages**: on a project page (`username.github.io/repo`), add `basePath: "/repo"` to `next.config.ts` first.
