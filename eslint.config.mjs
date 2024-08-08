import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginCypress from 'eslint-plugin-cypress';
import pluginJest from 'eslint-plugin-jest';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
        'cypress/globals': true,
        jest: true,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      cypress: pluginCypress,
      jest: pluginJest,
    },
    rules: {
      // Standard regler som ble brukt i `extends: "eslint:recommended"`
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      // Legg til andre generelle regler her
    },
  },
  {
    files: ['**/*.cy.js'],
    languageOptions: {
      globals: {
        'cypress/globals': true,
      },
    },
    plugins: {
      cypress: pluginCypress,
    },
    rules: {
      'cypress/no-unnecessary-waiting': 'off',
      'no-unused-vars': 'off',
      // Legg til andre Cypress-spesifikke regler her
    },
  },
  {
    files: ['**/*.test.js'],
    languageOptions: {
      globals: {
        jest: true,
      },
    },
    plugins: {
      jest: pluginJest,
    },
    rules: {
      'jest/prefer-expect-assertions': 'off',
      // Legg til andre Jest-spesifikke regler her
    },
  },
];




/*import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
]; */