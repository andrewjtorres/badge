'use strict'

const { defaults } = require('jest-config')

/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
const config = {
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
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

module.exports = config
