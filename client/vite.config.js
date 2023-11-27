import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        // target: process.env.VITE_BASE_URL,
        target: "https://bridge-cafe.onrender.com/",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace("/api", ""),
      },
      "/auth": {
        target: "https://bridge-cafe.onrender.com/",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace("/auth", ""),
      },
    },
  },
});
