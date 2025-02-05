import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

const mode = process.env.NODE_ENV || 'development';
const env = loadEnv(mode, process.cwd(), '');
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true
  },
  define: {
    // Pass the environment variables to the client-side code
    'meta.env': env
  }
});
