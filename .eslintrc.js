module.exports = {
    "root": true,
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    "env": {
        "browser": true
    },
    "extends": [
      "airbnb",
      "eslint:recommended"
    ],
    "plugins": ["html", "vue", "react"],
    "rules": {
      "indent": ["error", 2, {
          "SwitchCase": 1
      }],
      "quotes": ["error", "single"],
      "semi": ["error", "always"],
      "no-console": ["error"],
      "linebreak-style": 0,
      "no-new": 0,
      "react/react-in-jsx-scope": 0,
      "react/jsx-filename-extension": 0,
      "react/no-unknown-property": [ "error", { ignore: ["class"] }]
    }
};
