module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: [
    "airbnb-base",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "indent": [
      "error", 
      4
    ],
    "linebreak-style": 0,
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
