// eslint.config.js
import js from '@eslint/js';
import parser from '@typescript-eslint/parser';
import plugin from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  prettier,
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
      }
    },
    plugins: {
      '@typescript-eslint': plugin
    },
    rules: {
      semi: ['error', 'always'],
      'space-before-function-paren': ['off', { anonymous: 'always', named: 'always' }],
      camelcase: 'off',
      'no-return-assign': 'off',
      quotes: ['error', 'single'],

      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off'
    }
  }
];
