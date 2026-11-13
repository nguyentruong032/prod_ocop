import tsParser from '@typescript-eslint/parser';

export default [
  {
    ignores: [
      '_legacy_apps/**',
      'packages/**',
      'node_modules/**',
      '.next/**',
      'dist/**',
      '.turbo/**',
      'deploy/**',
      'docs/**',
      'doi_chieu/**',
      'public/**',
    ],
  },
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {},
  },
];
