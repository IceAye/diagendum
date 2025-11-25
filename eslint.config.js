import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import reactRefresh from 'eslint-plugin-react-refresh';

export default defineConfig([
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
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
