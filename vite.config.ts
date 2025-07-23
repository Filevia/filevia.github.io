import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // 把 React 和 ReactDOM 单独打包到 react-vendor chunk
          if (id.includes("node_modules/react") || id.includes("node_modules/react-dom")) {
            return "react";
          }
        },
        // 控制 chunk 文件名
        chunkFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'react') {
            return 'assets/react.js';
          }
          return 'assets/[name]-[hash].js';
        },
      },
    },
  }
});
