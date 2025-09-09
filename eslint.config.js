import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import jsxA11y from 'eslint-plugin-jsx-a11y'

export default tseslint.config(
  { 
    ignores: [
      'dist', 
      'node_modules',
      'public',
      '.prettierrc.js',
      'eslint.config.js'
    ] 
  },
  {
    extends: [
      ...tseslint.configs.recommended,
      // jsxA11y.flatConfigs.recommended,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      // ...jsxA11y.flatConfigs.recommended.languageOptions,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'jsx-a11y': jsxA11y
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // "jsx-a11y/anchor-is-valid": [
      //   "error", {
      //     "components": ["Link"],
      //     "specialLink": ["to"],
      //     "aspects": ["preferButton"]
      //   }
      // ]
    },
  },
)
