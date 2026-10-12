// Regenerates src/data/projects.json from public, non-fork GitHub repos.
// Usage: node scripts/fetch-github.mjs   (requires `gh` CLI authenticated)
import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";

const overrides = JSON.parse(readFileSync("src/data/projects.overrides.json", "utf8"));

const raw = execFileSync(
  "gh",
  ["repo", "list", "--limit", "300", "--json", "name,description,isFork,isPrivate,pushedAt,primaryLanguage,url,stargazerCount"],
  { encoding: "utf8" },
);

const repos = JSON.parse(raw)
  .filter((r) => !r.isPrivate && !r.isFork)
  .filter((r) => !overrides.hide.includes(r.name))
  .map((r) => {
    const o = overrides.repos[r.name] ?? {};
    return {
      name: r.name,
      title: o.title ?? r.name,
      description: o.description ?? r.description ?? "",
      language: r.primaryLanguage?.name ?? null,
      url: r.url,
      stars: r.stargazerCount,
      pushedAt: r.pushedAt.slice(0, 10),
      featured: o.featured ?? false,
      tags: o.tags ?? [],
    };
  })
  .sort((a, b) => Number(b.featured) - Number(a.featured) || b.pushedAt.localeCompare(a.pushedAt));

writeFileSync("src/data/projects.json", JSON.stringify(repos, null, 2) + "\n");
console.log(`wrote ${repos.length} projects`);
