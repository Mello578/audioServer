module.exports = {
  extends: [
    './internal/base',
    './internal/import',
    './internal/promise',
    './internal/typescript',
    './internal/prettier',
  ],

  env: {
    browser: true,
    node: true,
  },
};
