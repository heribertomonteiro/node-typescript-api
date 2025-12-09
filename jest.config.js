import { resolve } from "node:path";

const root = resolve();

export default {
  rootDir: root,
  displayName: "root-tests",

  testMatch: ["<rootDir>/src/**/*.test.ts"],
  testEnvironment: "node",
  clearMocks: true,

  // ts-jest + ESM
  preset: "ts-jest/presets/default-esm",
  extensionsToTreatAsEsm: [".ts"],

  // ESSENCIAL para TypeScript funcionar
  transform: {
    "^.+\\.ts$": ["ts-jest", { useESM: true }]
  },

  // Alias do tsconfig
  moduleNameMapper: {
    "^@src/(.*)$": "<rootDir>/src/$1",
    "^@test/(.*)$": "<rootDir>/test/$1"
  }
};
