'use strict'

const { defaults } = require('jest-config')

module.exports = {
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: { branches: 100, functions: 100, lines: 100, statements: 100 },
  },
  errorOnDeprecated: true,
  moduleDirectories: [...defaults.moduleDirectories],
  restoreMocks: true,
  testRunner: 'jest-circus/runner',
  transform: {
    '^.+\\.ts$': require.resolve('ts-jest'),
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.js$'],
}
