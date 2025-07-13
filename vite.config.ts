import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
import generouted from "@generouted/react-router/plugin";

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react(), generouted()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
