module.exports = {
  root: true,
  plugins: ['@typescript-eslint', 'import', 'prettier', 'simple-import-sort'],
  extends: [
    'airbnb',
    'airbnb-typescript',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
  ],
  env: {
    browser: true,
    node: true,
  },
  globals: {
    JSX: true,
  },
  parser: '@typescript-eslint/parser',
  rules: {
    'object-curly-spacing': ['error', 'always'],
    'require-jsdoc': 'off',
    'comma-dangle': ['warn', 'always-multiline'],
    'no-undef': 'error',
    'space-infix-ops': ['error', { int32Hint: false }],
    'max-len': ['error', 180, 2, { ignoreTemplateLiterals: true }],
    'curly': [2, 'all'],
    'no-octal': 'error',
    'no-eval': 'error',
    'no-invalid-this': 'off',
    'prefer-rest-params': 'off',
    'prefer-spread': 'off',
    'no-multi-spaces': ['error', { ignoreEOLComments: true }],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-global-assign': 'error',
    'quotes': 'off',
    '@typescript-eslint/quotes': ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-double'],
    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never',
      },
    ],

    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'camelcase': ['error', { properties: 'never', ignoreDestructuring: true }],
    'func-call-spacing': ['error', 'never'],
    'no-array-constructor': 'error',
    'no-unused-vars': ['error', { ignoreRestSiblings: true, args: 'none' }],
    'semi': ['error', 'always'],
    'semi-spacing': ['error', { before: false, after: true }],
    'semi-style': ['error', 'last'],
    'no-extra-semi': 'error',
    'import/no-duplicates': 'error',
    'eqeqeq': ['error', 'always', { null: 'ignore' }],
    'block-spacing': ['error', 'always'],
    'no-shadow': 'error',
    'no-unreachable': 'error',
    'no-unsafe-negation': 'error',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'indent': 'off',
    '@typescript-eslint/indent': ['error', 2],
    'import/order': 'off',
    'import/prefer-default-export': 'off',
    'react/function-component-definition': ['error', {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function',
    }],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'arrow-body-style': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Packages `react` related packages come first and styles after
          ['^react', '^redux', '^.+\\.?(css)$'],
          // Components types, enums
          ['^(types|enums|configs|hooks|helpers)(/.*|$)'],
          ['^@?\\w'],
          // Imported icons
          ['^.+\\.?(svg)$'],
          // Absolute components
          // Parent imports. Put `..` last.
          // Other relative imports. Put same-folder imports and `.` last.
          ['^components(/.*|$)', '^\\.\\.(?!/?$)', '^\\.\\./?$', '^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
    'jsx-a11y/label-has-associated-control': 'off', // This rule not for libs, because we use such thing as Visually Hidden components
  },
  overrides: [
    {
      files: ['**/icons/**/*.tsx'],
      rules: {
        'max-len': 'off',
      },
    },
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
};
