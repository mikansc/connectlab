import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: process.env.PORT || 3000,
  },
  preview: {
    host: "0.0.0.0",
    port: process.env.PORT || 8080,
  },
  plugins: [react(), eslint()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setup-test.js",
    reporters: "verbose",
    coverage: {
      provider: "c8",
      lines: 95,
      branches: 95,
      functions: 95,
      statements: 95,
      logHeapUsage: true,
      exclude: [
        "**/*.styles.js",
        "src/test-utils/*.{js,jsx}",
        "src/setup-test.js",
        "**/__tests__/*",
      ],
    },
  },
  resolve: {
    alias: {
      "@templates": path.resolve(__dirname, "./src/components/templates"),
      "@pages": path.resolve(__dirname, "./src/components/pages"),
      "@atoms": path.resolve(__dirname, "./src/components/atoms"),
      "@molecules": path.resolve(__dirname, "./src/components/molecules"),
      "@organisms": path.resolve(__dirname, "./src/components/organisms"),
      "@routes": path.resolve(__dirname, "./src/routes"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@contexts": path.resolve(__dirname, "./src/contexts"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@test-utils": path.resolve(__dirname, "./src/test-utils"),
      "@validations": path.resolve(__dirname, "./src/validations"),
    },
  },
});
