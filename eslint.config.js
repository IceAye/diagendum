import { defineConfig } from 'eslint/config';
import prettier from 'eslint-plugin-prettier';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import reactRefresh from 'typescript-eslint';

export default defineConfig([
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': 'error',
    },
    ignores: ['node_modules/', 'dist/', 'build/', 'coverage/'],
  },

  {
    files: ['frontend/**/*.{ts,tsx,js,jsx}'],
    ...reactRefresh.configs.vite,
  },

  {
    files: ['backend/**/*.{ts,js}'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
]);
