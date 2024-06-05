module.exports = {
  root: true,
  env: {
    browser: true
  },
  plugins: [
    "@typescript-eslint"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest'
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts']
      }
    }
  },
  rules: {
    'guard-for-in': 0,
    'no-restricted-syntax': 0,
    'class-methods-use-this': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'no-underscore-dangle': 0,
    '@typescript-eslint/no-unused-vars': 'error'
  },
};
