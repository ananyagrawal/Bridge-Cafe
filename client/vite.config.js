import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    proxy: {
      "/api": {
        // target: process.env.VITE_BASE_URL,
        target: "http://localhost:1337",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace("/api", ""),
      },
      "/auth": {
        target: "http://localhost:1337",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace("/auth", ""),
      },
    },
  },
});
