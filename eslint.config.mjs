import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import prettier from 'eslint-plugin-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'plugin:prettier/recommended'),
  {
    plugins: {
      prettier: prettier,
    },
    rules: {
      'react/jsx-max-props-per-line': [2, { maximum: 2 }],
      'react/jsx-first-prop-new-line': [1, 'multiline'],
    },
    ignores: ['build/**', 'dist/**', 'public/**'],
  },
];

export default eslintConfig;
