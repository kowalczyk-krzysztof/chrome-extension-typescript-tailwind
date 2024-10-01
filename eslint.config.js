import tseslint from 'typescript-eslint'
import eslint from '@eslint/js'
import globals from 'globals'

export default tseslint.config(eslint.configs.recommended, ...tseslint.configs.recommended, {
  plugins: {
    '@typescript-eslint': tseslint.plugin,
  },
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      project: true,
    },
    ecmaVersion: 2022,
    sourceType: 'module',
    globals: {
      ...globals.browser,
      ...globals.node,
      chrome: 'readonly',
    },
  },
  rules: {
    'no-multi-spaces': 1,
    'no-useless-escape': 0,
    'no-unused-expressions': 2,
    'no-duplicate-imports': 1,
    'no-useless-return': 'error',
    'rest-spread-spacing': 'error',
    'no-var': 'error',
    'no-mixed-spaces-and-tabs': [2, 'smart-tabs'],
  },
  ignores: ['build', 'eslint.config.json', 'node_modules', 'public', 'tailwind.config.js', 'webpack.config.js'],
  files: ['**/*.js', '**/*.ts'],
  plugins: {},
})
