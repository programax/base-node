module.exports = {
  env: {
    es6: true,
    node: true,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js'],
      },
    },
  },
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './jsconfig.json',
  },
  plugins: ['prettier', 'import'],
  rules: {
    'import/no-unresolved': 'error',
    'import/prefer-default-export': 'off',
    'no-use-before-define': 'off',
  },
};
