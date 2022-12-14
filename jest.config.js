module.exports = {
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/dist/**',
    '!**/lib/**'
  ],
  testMatch: [
    '**/?(*.)+(spec|test).ts?(x)'
  ],
  setupFilesAfterEnv: [
    './jest.setup.ts',
    'jest-plugin-context/setup'
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/lib/',
    '<rootDir>/types/'
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': [
      'babel-jest',
      {
        presets: [
          '@babel/preset-env',
          '@babel/preset-react',
          '@babel/preset-typescript'
        ]
      }
    ]
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/lib/',
    '.storybook',

    '/__snapshots__/'
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/lib/',
    '.storybook',

    '.js',
    '.interfaces.',
    '.types.',
    '.stories.',
    '/__snapshots__/'
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  }
}
