module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'testing-library'],
  extends: [
    'plugin:react/recommended',
    'plugin:@next/next/recommended',
    'airbnb',
    'airbnb-typescript',
    'prettier',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  globals: {
    google: 'writable',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx', '.svg'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.svg'],
        moduleDirectory: ['node_modules', '.'],
      },
    },
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
    semi: ['error', 'always'],
    '@typescript-eslint/semi': ['error', 'always'],
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        tabWidth: 2,
        printWidth: 120,
        bracketSpacing: true,
        jsxBracketSameLine: false,
        arrowParens: 'avoid',
        trailingComma: 'all',
      },
    ],
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'import/extensions': ['off', 'allways'],
    'react/require-default-props': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-empty-interface': ['warn'],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'import/no-extraneous-dependencies': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@next/next/no-page-custom-font': 'off',
    '@next/next/no-document-import-in-page': 'off',
    'arrow-body-style': 'off',
  },
  overrides: [
    {
      files: [
        '**/*.tests.tsx',
        '**/*.spec.tsx',
        '**/*.tests.ts',
        '**/*.spec.ts',
        '**/*.stories.tsx',
        '**/__mock__/**/*.ts',
        '**/*.slice.ts',
      ],
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx', '.js'],
        },
      },
      env: {
        jest: true,
      },
      plugins: ['jest'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-shadow': 'off',
        'react/jsx-props-no-spreading': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
        '@typescript-eslint/dot-notation': 'off',
        'import/prefer-default-export': 'off',
        'testing-library/await-async-utils': 'error',
        'testing-library/no-dom-import': 'error',
        'testing-library/no-node-access': 'error',
        'testing-library/prefer-screen-queries': 'warn',
        'import/no-cycle': [
          'error',
          {
            maxDepth: 10,
          },
        ],
        'no-param-reassign': 'off',
        // 'testing-library/await-async-query': 'error',
        // 'testing-library/no-await-sync-query': 'error',
        // 'testing-library/no-debug': 'error',
      },
    },
    {
      files: ['**/*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        'react/jsx-props-no-spreading': 'off',
        '@typescript-eslint/semi': 'off',
      },
    },
  ],
};
