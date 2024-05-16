import { defineConfig } from "vite";
// import {
//   configDefaults,
//   coverageConfigDefaults,
// } from "vitest/config";
import eslint from "vite-plugin-eslint";

// Allow using conditional reporters
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
    // testTransformMode: { ssr: ["/.ts$/"] },
    include: ["tests/**"],
    // exclude: [
    //   ...configDefaults.exclude,
    // ],

    reporters: env.GITHUB_ACTIONS ? [...reporters, "github-actions"] : reporters,
    typecheck: {
      enabled: true,
      only: true,
    },

    // coverage: {
    //   // enabled: true,
    //   include: ["types/**"],
    //   // extension: [".d.ts"],
    //   // exclude: [
    //   //   "index.d.ts",
    //   //   ...coverageConfigDefaults.exclude,
    //   // ],
    // },
  },
});
