module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  testMatch: ['**/__tests__/**/*.test.ts']
};
