import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import eslintPluginPrettier from 'eslint-plugin-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
    ],
  },
  {
    plugins: {
      prettier: eslintPluginPrettier,
    },
  },
  {
    rules: {
      'prettier/prettier': 'error',
      'import/no-anonymous-default-export': 'off',
    },
  },
];
