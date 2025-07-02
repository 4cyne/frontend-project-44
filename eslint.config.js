import globals from 'globals'
import { defineConfig } from 'eslint/config'
import js from '@eslint/js'

export default defineConfig([
  {
    files: ['**/*.js'],
    plugins: { js },
    extends: ['js/recommended'],
  },
  {
    files: ['**/*.vue'],
    extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  },
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
      semi: 'error',
      'brace-style': 'off',
    },
  },
  {
    languageOptions: {
      globals: globals.node,
    },
  },
])
