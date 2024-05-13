/// <reference types="vite/client" />

import { defineConfig } from "vite";
import { configDefaults, coverageConfigDefaults } from "vitest/config";
import eslint from "vite-plugin-eslint";
import type { InlineConfig } from "vitest";
import { env } from "node:process";

const reporters: InlineConfig["reporters"] = ["default"];

export default defineConfig({
  plugins: [eslint()],

  build: {
    target: "esnext",
  },

  test: {
    environment: "jsdom",
    globals: true,
    testTransformMode: { ssr: ["/.ts$/"] },
    include: ["**/src/spec/**"],
    exclude: [...configDefaults.exclude, "**/*.d.ts", "**/script/**"],

    reporters: env.GITHUB_ACTIONS ? [...reporters, "github-actions"] : reporters,
    typecheck: {
      enabled: true,
      only: true,
    },

    coverage: {
      enabled: true,
      include: ["**/src/spec/**"],
      extension: [".d.ts", ".test-d.ts", ".spec-d.ts"],
      exclude: [...coverageConfigDefaults.exclude, "**/index.d.ts", "**/script/**"],
    },
  },
});
