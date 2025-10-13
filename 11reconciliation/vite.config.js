import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // allows using test() and expect() without imports
    environment: "jsdom", // provides document, window, and DOM APIs
  },
});
