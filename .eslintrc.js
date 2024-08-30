module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
    'boundaries/elements': [
      {
        type: 'application',
        pattern: 'src/*/application',
        capture: ['module'],
      },
      {
        type: 'domain',
        pattern: 'src/*/domain',
        capture: ['module'],
      },
      {
        type: 'infrastructure',
        pattern: 'src/*/infrastructure',
        capture: ['module'],
      },
      {
        type: 'aggregate',
        pattern: 'src/*/domain/*',
        capture: ['module', 'aggregate'],
      },
    ],
  },
};
