module.exports = {
  env: {
    browser: true,
    amd: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier'],
  rules: {
    '@typescript-eslint/no-explicit-any': 1,
    camelcase: 'error',
    quotes: ['error', 'single'],
    'no-duplicate-imports': 'error',
  },
  settings: { react: { version: '17.0.2' } },
}
