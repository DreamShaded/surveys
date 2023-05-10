module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:jest-dom/recommended',
    'plugin:testing-library/react',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: [
      './tsconfig.json',
    ],
  },
  plugins: [
    'react',
    'testing-library',
    'jest-dom',
  ],
  rules: {
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
    }],
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true,
      },
    ],
    'jsx-quotes': [
      'error',
      'prefer-single',
    ],
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',

    // jest-dom
    'jest-dom/prefer-checked': 'error',
    'jest-dom/prefer-enabled-disabled': 'error',
    'jest-dom/prefer-required': 'error',
    'jest-dom/prefer-to-have-attribute': 'error',
    // testing-library
    'testing-library/await-async-query': 'error',
    'testing-library/no-await-sync-query': 'error',
    'testing-library/no-debugging-utils': 'warn',
    'testing-library/no-dom-import': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
