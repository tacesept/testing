import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/.netlify/functions": {
        target: "http://localhost:8888", // netlify dev’s default
        rewrite: (path) =>
          path.replace(/^\/\.netlify\/functions/, "/.netlify/functions"),
      },
    },
  },
});
