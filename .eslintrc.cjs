module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    'import/prefer-default-export': 0,
    'import/no-default-export': 2,
    'max-len': [2, {
      code: 120,
      ignoreComments: true,
      ignoreTrailingComments: true,
      ignoreUrls: true,
    }],
    'react/react-in-jsx-scope': 0,
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'react/jsx-one-expression-per-line': 0,
    'react/require-default-props': 0,
    'react/jsx-props-no-spreading': 0,
    '@typescript-eslint/member-delimiter-style': [
      2,
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
  },
};
