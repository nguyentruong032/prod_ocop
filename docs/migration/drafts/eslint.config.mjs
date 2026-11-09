/** @type {import('eslint').Linter.Config} */
export default [
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      '.turbo/**',
      'dist/**',
      'out/**',
      'build/**',
      '*.tsbuildinfo',
      'coverage/**',
      '.nyc_output/**',
      '*.log',
      'npm-debug.log*',
      'pnpm-debug.log*',
      '*.tgz',
      '.cache/**',
      '.DS_Store',
      'Thumbs.db',
      '.vscode/**',
      '.idea/**',
      '*.swp',
      '*.swo',
    ],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
      ecmaFeatures: { jsx: true },
      parserOptions: {
        project: undefined,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: ['packages/*/tsconfig.json', 'apps/*/tsconfig.json'],
        },
      },
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
    },
    plugins: {
      import: await import('eslint-plugin-import').then(m => m.default),
    },
    rules: {
      'import/no-unresolved': ['error', { commonjs: true, amd: true }],
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            '**/*.test.{ts,tsx}',
            '**/*.spec.{ts,tsx}',
            '**/test/**',
            '**/__tests__/**',
            '**/vitest.config.ts',
            '**/playwright.config.ts',
          ],
        },
      ],
    },
  },
  // ── BOUNDARIES: apps/*/** (type "app", capture zone) ──
  {
    files: ['apps/**/*.{js,jsx,ts,tsx}'],
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: ['apps/*/tsconfig.json'],
        },
      },
    },
    rules: {
      // app → package allowed (workspace deps)
      // app → app SAME zone allowed
      // app → app DIFFERENT zone forbidden
      'import/no-restricted-paths': [
        'error',
        {
          zones: [
            {
              target: './apps/*/src/**',
              from: './apps/*/src/**',
              except: ['./apps/${zone}/src/**'],
              message:
                'Cross-zone imports are forbidden. Use <a> for cross-zone navigation or shared packages (@ocop/*)',
            },
          ],
        },
      ],
    },
  },
  // ── BOUNDARIES: packages/** (type "package") ──
  {
    files: ['packages/**/*.{js,jsx,ts,tsx}'],
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: ['packages/*/tsconfig.json'],
        },
      },
    },
    rules: {
      // package → package allowed
      // package → app forbidden
      'import/no-restricted-paths': [
        'error',
        {
          zones: [
            {
              target: './apps/**',
              from: './packages/**',
              message: 'Packages must not import from apps. Use shared types or invert dependency.',
            },
          ],
        },
      ],
    },
  },
];