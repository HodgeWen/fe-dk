module.exports = {
  roots: ['<rootDir>/sdk'],
  preset: 'ts-jest',
  testMatch: ['<rootDir>/sdk/**/*.spec.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  modulePathIgnorePatterns: ['/dist/'],
  setupFiles: [],
  moduleNameMapper: {
    '^@sdk/(.*)$': '<rootDir>/packages/$1/$1.ts'
  },
  rootDir: __dirname,
  testEnvironment: 'jsdom'
}
