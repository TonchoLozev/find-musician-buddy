module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: [
    "react",
  ],
  rules: {
    "indent": ["error", 4],
    "linebreak-style": 0,
    "react/jsx-indent": ["error", 4],
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [
        1, 
        { 
          "extensions": [".js", ".jsx"] 
        }
    ],
    "react/jsx-props-no-spreading": [
        0, 
        {
          "html": "ignore"
        }
    ],
    "import/prefer-default-export": 0,
    "max-len": [
      "error", 
      { 
        "ignoreComments": true,
        "ignoreTrailingComments": true,
        "ignoreUrls": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true,
        "ignoreRegExpLiterals": true,
      }
    ]
  },
};
