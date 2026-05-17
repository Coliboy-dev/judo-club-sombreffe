/**
 * Build script for Netlify static export.
 *
 * Next.js `output: 'export'` doesn't support edge runtime routes.
 * This script temporarily sidelines opengraph-image.tsx, switches to
 * static export mode, builds, then restores everything.
 *
 * Vercel deployment is unaffected — it uses the normal next.config.ts.
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const OG_SRC = path.join(ROOT, "src", "app", "opengraph-image.tsx");
const OG_BAK = path.join(ROOT, "src", "app", "opengraph-image.tsx.bak");
const CONFIG = path.join(ROOT, "next.config.ts");

const NETLIFY_CONFIG = `import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
};

export default nextConfig;
`;

let originalConfig = "";

function restore() {
  // Restore next.config.ts
  if (originalConfig) {
    fs.writeFileSync(CONFIG, originalConfig, "utf8");
    console.log("✓ next.config.ts restauré");
  }
  // Restore opengraph-image.tsx
  if (fs.existsSync(OG_BAK)) {
    fs.renameSync(OG_BAK, OG_SRC);
    console.log("✓ opengraph-image.tsx restauré");
  }
}

try {
  // 1. Sauvegarde next.config.ts original
  originalConfig = fs.readFileSync(CONFIG, "utf8");

  // 2. Écarter opengraph-image.tsx (edge runtime incompatible avec static export)
  if (fs.existsSync(OG_SRC)) {
    fs.renameSync(OG_SRC, OG_BAK);
    console.log("→ opengraph-image.tsx mis de côté pour le build statique");
  }

  // 3. Écrire next.config.ts mode export
  fs.writeFileSync(CONFIG, NETLIFY_CONFIG, "utf8");
  console.log("→ next.config.ts passé en mode output: export");

  // 4. Build
  console.log("→ Lancement de next build (static export)...\n");
  execSync("npm run build", { stdio: "inherit", cwd: ROOT });

  console.log("\n✓ Build statique terminé — dossier /out prêt pour Netlify");
} catch (err) {
  console.error("\n✗ Erreur pendant le build :", err.message);
  process.exitCode = 1;
} finally {
  restore();
}
