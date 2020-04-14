module.exports = {
  env: {
    browser: true
  },
  extends: [
    '.',
    'standard-react',
    'prettier/react',
    'plugin:jsx-a11y/recommended'
  ],
  rules: {
    // Overrides standard-react
    'jsx-quotes': ['error', 'prefer-double']
  }
}