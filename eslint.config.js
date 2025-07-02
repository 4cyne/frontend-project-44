import globals from 'globals'
import { defineConfig } from 'eslint/config'
import pluginJs from '@eslint/js'

export default defineConfig([
  pluginJs.configs.recommended,
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
      'brace-style': 'off',
    },
  },
  {
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        projectService: true,
      },
    },
  },
])
