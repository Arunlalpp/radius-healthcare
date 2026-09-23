// Post-build step: for each route, snapshots the fully-rendered page (with
// motion reduced so GSAP reveals settle into their final, visible state) and
// writes a static HTML file with that content inlined into #root, plus a
// route-specific <title>/description/canonical/og:url. Crawlers and no-JS
// clients see the real content immediately; JS-capable browsers still mount
// React fresh over it via createRoot, so no hydration matching is required.
import { createServer } from "node:http";
import { readFile, writeFile, stat, mkdir } from "node:fs/promises";
import { extname, join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const root = fileURLToPath(new URL("..", import.meta.url));
const distDir = join(root, "dist");
const siteUrl = "https://www.radiushealth.in";

const routes = [
  {
    path: "/",
    outFile: "index.html",
    title: "Radius Health Centre | Multi-Speciality Polyclinic in Vengara, Malappuram",
    description:
      "Radius Health Centre, Vengara — a multi-speciality polyclinic with a hyper-pharmacy, fully automated lab and imaging facilities. Quality, patient-centric healthcare accessible to all. Book an appointment today.",
  },
  {
    path: "/privacy-policy",
    outFile: "privacy-policy/index.html",
    title: "Privacy Policy | Radius Health Centre",
    description: "How Radius Health Centre collects, uses, and protects information submitted through this website.",
  },
  {
    path: "/terms-conditions",
    outFile: "terms-conditions/index.html",
    title: "Terms & Conditions | Radius Health Centre",
    description: "The terms that govern use of the Radius Health Centre website and its appointment request form.",
  },
];

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".svg": "image/svg+xml",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".png": "image/png",
  ".xml": "application/xml",
  ".txt": "text/plain",
  ".json": "application/json",
};

function startServer() {
  return new Promise((resolve) => {
    const server = createServer(async (req, res) => {
      try {
        const urlPath = decodeURIComponent(req.url.split("?")[0]);
        let filePath = join(distDir, urlPath === "/" ? "index.html" : urlPath);
        const st = await stat(filePath).catch(() => null);
        if (!st || st.isDirectory()) filePath = join(distDir, "index.html");
        const body = await readFile(filePath);
        res.writeHead(200, { "Content-Type": mimeTypes[extname(filePath)] ?? "application/octet-stream" });
        res.end(body);
      } catch {
        res.writeHead(404);
        res.end("Not found");
      }
    });
    server.listen(0, "127.0.0.1", () => resolve(server));
  });
}

function withRouteMeta(html, route) {
  const canonicalUrl = `${siteUrl}${route.path === "/" ? "/" : route.path}`;
  return html
    .replace(/<title>.*?<\/title>/s, `<title>${route.title}</title>`)
    .replace(/(<meta\s+name="description"\s+content=")[^"]*(")/s, `$1${route.description}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${canonicalUrl}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${route.title}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${route.description}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${canonicalUrl}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${route.title}$2`)
    .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${route.description}$2`);
}

async function main() {
  const indexPath = join(distDir, "index.html");
  const template = await readFile(indexPath, "utf-8");
  if (!template.includes('<div id="root"></div>')) {
    console.log("prerender: #root is not empty — skipping (already prerendered?).");
    return;
  }

  const server = await startServer();
  const { port } = server.address();

  const browser = await chromium.launch();
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await page.emulateMedia({ reducedMotion: "reduce" });

    for (const route of routes) {
      await page.goto(`http://127.0.0.1:${port}${route.path}`, { waitUntil: "networkidle" });
      // Let effects that run post-mount (GSAP context setup, counters settling) flush.
      await page.waitForTimeout(300);

      const rootHtml = await page.$eval("#root", (el) => el.outerHTML);
      const outHtml = withRouteMeta(template.replace('<div id="root"></div>', rootHtml), route);

      const outPath = join(distDir, route.outFile);
      await mkdir(dirname(outPath), { recursive: true });
      await writeFile(outPath, outHtml, "utf-8");
      console.log(`prerender: ${route.path} -> dist/${route.outFile} (${(rootHtml.length / 1024).toFixed(1)} KB)`);
    }
  } finally {
    await browser.close();
    server.close();
  }
}

main().catch((err) => {
  console.error("prerender failed:", err);
  process.exit(1);
});
