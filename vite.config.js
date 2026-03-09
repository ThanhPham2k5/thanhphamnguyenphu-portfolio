import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  // THE FIX: Thêm base với tên repo của bạn
  base:
    process.env.NODE_ENV === "production"
      ? "/thanhphamnguyenphu-portfolio/"
      : "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
