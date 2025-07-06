module.exports = [
  {
    files: ['**/*.js'],
    ignores: ['node_modules/'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        require: 'readonly',
        module: 'readonly',
        __dirname: 'readonly',
        process: 'readonly',
        exports: 'readonly'
      }
    },
    linterOptions: {
      reportUnusedDisableDirectives: true
    },
    rules: {
      'require-atomic-updates': 0,
      'no-prototype-builtins': 0,
      'no-console': 0,
      'no-unused-vars': ['error', {
        args: 'none',
        argsIgnorePattern: '^_'
      }],
      'no-useless-escape': 0,
      'no-inner-declarations': 0,
      'comma-dangle': ['error', 'only-multiline'],
      'no-whitespace-before-property': 'error',
      'keyword-spacing': ['error', { before: true }],
      'no-trailing-spaces': 'error',
      'comma-spacing': ['error', { before: false, after: true }],
      'no-multiple-empty-lines': 'error',
      'key-spacing': ['error', { beforeColon: false, afterColon: true }],
      'padded-blocks': ['error', 'never'],
      'indent': ['error', 2],
      'block-spacing': 'error',
      'eol-last': ['error', 'always'],
      'quote-props': ['error', 'consistent'],
      'quotes': ['error', 'single'],
      'no-multi-spaces': 'error'
    }
  }
];
