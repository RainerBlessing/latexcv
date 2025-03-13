/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/tests/**/*.test.{ts,tsx}'],
  verbose: true,
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,
  transform: {
    "^.+\\.(t|j)sx?$": "ts-jest"
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.mjs"]
};
