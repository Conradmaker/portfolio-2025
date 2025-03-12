import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  ...compat.config({
    //수정하기
    env: {
      browser: true,
      node: true,
    },
    extends: ['next', 'plugin:@typescript-eslint/recommended'],
    plugins: ['prettier', '@typescript-eslint'],
    rules: {
      // "@next/next/no-img-element": "off",
      'react-hooks/exhaustive-deps': 'off',
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: true,
          useTabs: false,
          tabWidth: 2,
          printWidth: 102,
          bracketSpacing: true,
          arrowParens: 'avoid',
          endOfLine: 'auto',
        },
      ],
    },
    parserOptions: {
      parser: '@typescript-eslint/parser',
    },
  }),
  // ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
];

export default eslintConfig;
