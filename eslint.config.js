module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    noConsole: 'off',
    noVar: 'error',
    preferConst: 'error',
    noUnusedVars: ['error', { argsIgnorePattern: '^_' }],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    indent: ['error', 2],
    commaDangle: ['error', 'always-multiline'],
    arrowBodyStyle: ['error', 'as-needed'],
    eqeqeq: ['error', 'always'],
  },
};
