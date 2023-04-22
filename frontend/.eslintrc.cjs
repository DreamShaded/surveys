module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  plugins: [
    'react',
  ],
  rules: {
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
    }],
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/comma-dangle': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
