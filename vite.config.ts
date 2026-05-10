import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/** GitHub Pages project sites need a subpath; Vercel / local use "/". */
function basePath(): string {
  const raw = process.env.VITE_BASE_PATH?.trim();
  if (!raw || raw === "/") return "/";
  return raw.endsWith("/") ? raw : `${raw}/`;
}

export default defineConfig({
  base: basePath(),
  plugins: [react()],
});
