import {
  defineConfig,
  // configDefaults,
  // coverageConfigDefaults,
} from "vitest/config";

// Allow using conditional reporters
import { env } from "node:process";
import type { InlineConfig } from "vitest";
const reporters: InlineConfig["reporters"] = ["default"];

export default defineConfig({
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
