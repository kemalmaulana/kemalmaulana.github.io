// Renders the /cv route to public/cv.pdf so the PDF and the site share src/data/*.json.
// Usage: npm run build && npm run build:cv
import { spawn } from "node:child_process";
import { chromium } from "playwright";

const PORT = 4329;
const URL = `http://localhost:${PORT}/cv/`;

const server = spawn("npx", ["astro", "preview", "--port", String(PORT), "--host", "127.0.0.1"], {
  stdio: "ignore",
});

async function waitForServer(url, tries = 60) {
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      /* not up yet */
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(`preview server did not start at ${url}`);
}

try {
  await waitForServer(URL);
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(URL, { waitUntil: "networkidle" });
  await page.emulateMedia({ media: "print" });
  await page.pdf({
    path: "public/cv.pdf",
    format: "A4",
    printBackground: true,
    margin: { top: "14mm", bottom: "14mm", left: "14mm", right: "14mm" },
  });
  await browser.close();
  console.log("wrote public/cv.pdf");
} finally {
  server.kill();
}
