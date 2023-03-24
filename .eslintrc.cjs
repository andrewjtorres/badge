'use strict'

/**
 * @type {import('eslint').Linter.BaseConfig}
 */
const config = {
  plugins: ['import', 'prettier', 'promise', 'unicorn'],
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-console': ['error', { allow: ['error', 'info', 'warn'] }],
    'no-param-reassign': ['error', { props: true }],
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          ['internal', 'parent', 'sibling', 'index', 'unknown'],
        ],
        'newlines-between': 'always',
      },
    ],
    'unicorn/prevent-abbreviations': 'off',
    'prettier/prettier': 'error',
  },
  overrides: [
    {
      files: ['*\\.cjs'],
      env: {
        node: true,
      },
    },
    {
      files: ['*\\.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        project: 'tsconfig.eslint.json',
      },
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:@typescript-eslint/strict',
        'plugin:import/typescript',
        'plugin:prettier/recommended',
      ],
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.d.ts', '.ts'],
        },
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
            project: 'tsconfig.eslint.json',
          },
        },
      },
    },
  ],
}

module.exports = config
