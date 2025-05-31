import eslint from '@eslint/js';
import eslintReact from '@eslint-react/eslint-plugin';
import configPrettier from 'eslint-config-prettier/flat';
import { importX } from 'eslint-plugin-import-x';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import noCommentedCode from 'eslint-plugin-no-commented-code';
import onlyWarn from 'eslint-plugin-only-warn';
import prettier from 'eslint-plugin-prettier/recommended';
import reactHooks from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const rootFiles = ['*.js', '*.cjs', '*.mjs'];

export function unignore<const T extends string[]>(files: T) {
  return files.map(<K extends string>(file: K): `!${K}` => `!${file}`);
}

// eslint-disable-next-line import-x/no-default-export
export default tseslint.config([
  {
    ignores: ['**/*.{js,cjs,mjs,jsx}', '**/*.d.ts', ...unignore(rootFiles)],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        React: true,
        JSX: true,
      },
    },
  },
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  importX.flatConfigs.recommended,
  eslintPluginUnicorn.configs.recommended,
  eslintReact.configs['recommended-typescript'],
  configPrettier,
  prettier,
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
      'import-x': importX,
      'jsx-a11y': jsxA11y,
      'react-hooks': reactHooks,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      'no-commented-code': noCommentedCode,

      'only-warn': onlyWarn,
    },
    languageOptions: {
      parserOptions: {
        project: true,
        sourceType: 'module',
      },
    },
    rules: {
      // Eslint
      'object-shorthand': ['error', 'always'],
      'prefer-destructuring': [
        'error',
        { VariableDeclarator: { object: true } },
        { enforceForRenamedProperties: false },
      ],
      'no-eval': 'error',
      'func-call-spacing': ['error', 'never'],
      'no-array-constructor': 'error',
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'no-shadow': 'error',
      'no-empty': ['error', { allowEmptyCatch: true }],

      // TypeScript
      '@typescript-eslint/consistent-type-imports': 'error',

      // X Import
      'import-x/no-anonymous-default-export': 'error',
      'import-x/no-default-export': 'error',
      'import-x/order': 'off',
      'import-x/no-unresolved': 'off',

      // Simple Import Sort
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react', '^redux', String.raw`^.+\.?(css)$`],
            ['^(types|enums|configs|hooks|helpers)(/.*|$)'],
            [String.raw`^@?\w`],
            [String.raw`^.+\.?(svg)$`],
            [
              '^components(/.*|$)',
              String.raw`^\.\.(?!/?$)`,
              String.raw`^\.\./?$`,
              String.raw`^\./(?=.*/)(?!/?$)`,
              String.raw`^\.(?!/?$)`,
              String.raw`^\./?$`,
            ],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',

      // JSX Ally
      ...jsxA11y.flatConfigs.recommended.rules,
      'jsx-a11y/label-has-associated-control': 'off',

      // Unicorn
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/no-null': 'off',
      'unicorn/filename-case': [
        'error',
        {
          case: 'camelCase',
          ignore: [
            String.raw`^[A-Z][a-zA-Z0-9]+\.tsx$`,
            String.raw`^[A-Z][a-zA-Z0-9]+\.stories\.tsx$`,
            String.raw`^[A-Z][a-zA-Z0-9]+Context\.ts$`,
            String.raw`^use[A-Z][a-zA-Z0-9]+\.ts$`,
          ],
        },
      ],
      'unicorn/prefer-spread': 'off',
      'unicorn/prefer-global-this': 'off',

      // React
      '@eslint-react/no-children-count': 'off',
      '@eslint-react/no-children-map': 'off',
      '@eslint-react/no-children-to-array': 'off',
      ...reactHooks.configs['recommended-latest'].rules,

      // No Commented Code
      'no-commented-code/no-commented-code': 'error',

      // Prettier
      'prettier/prettier': [
        'error',
        {
          printWidth: 80,
          tabWidth: 2,
          useTabs: false,
          semi: true,
          singleQuote: true,
          trailingComma: 'es5',
          bracketSpacing: true,
          jsxSingleQuote: false,
          arrowParens: 'always',
          proseWrap: 'never',
          htmlWhitespaceSensitivity: 'strict',
          endOfLine: 'lf',
          singleAttributePerLine: true,
          parser: 'babel-ts',
        },
      ],
    },
    settings: {
      'react-x': {
        version: '18.2.0',
        additionalHooks: {
          useEffect: ['useEnhancedEffect'],
          useLayoutEffect: ['useEnhancedEffect'],
        },
      },
    },
  },
  {
    files: ['**/*.stories.tsx'],
    rules: {
      'import-x/no-default-export': 'off',
      'react-hooks/rules-of-hooks': 'off',
    },
  },
  {
    files: ['**/icons/**/*.tsx'],
    rules: {
      'unicorn/filename-case': 'off',
    },
  },
]);
