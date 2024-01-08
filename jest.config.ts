/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
    preset: "ts-jest",
    testEnvironment: "node",
    moduleFileExtensions: ["js", "json", "ts"],
    transform: {
      "^.+\\.ts$": "ts-jest",
    },
    roots: ["<rootDir>/src/__tests__"],
    testRegex: "(/__tests__/.*\\.test\\.ts)$",
    moduleNameMapper: {
      "^@/(.*)$": "<rootDir>/$1",
    },
    globals: {
      "ts-jest": {
        tsconfig: "tsconfig.json",
      },
    },
  };