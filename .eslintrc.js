module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb-typescript',
  ],
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  env: {
    browser: true,
    jasmine: true,
    jest: true,
    node: true,
  },
  rules: {
    "react/jsx-props-no-spreading": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "linebreak-style": "off",
    "import/prefer-default-export": "off",
    "react/function-component-definition": [2, { "namedComponents": "arrow-function" }],
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['kancelaria'],
      },
      typescript: {},
    },
  },

  parser: '@typescript-eslint/parser',

  parserOptions: {
    project: ['./tsconfig.json'],
  },
}
