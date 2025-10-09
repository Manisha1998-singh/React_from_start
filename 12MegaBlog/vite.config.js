import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    cors: {
      origin: "http://localhost:5173", // your frontend origin
      credentials: true, // allow cookies/sessions to be included
    },
  },
});
