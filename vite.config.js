import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";

// Giải quyết lỗi __dirname is not defined trong môi trường ESM (Vercel/Vite)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  // Vercel chạy tốt nhất với base là '/' (root),
  // giúp các route của React Router không bị lỗi 404 khi tải lại trang.
  base: "./",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // Định danh Alias @ trỏ thẳng vào thư mục src của bạn
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    // Đảm bảo thư mục đầu ra là 'dist' để Vercel tự động nhận diện
    outDir: "dist",
    // Gom nhóm tài nguyên vào thư mục assets cho gọn
    assetsDir: "assets",
  },
});
