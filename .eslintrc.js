module.exports = {
    "root": true,
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    "env": {
        "browser": true
    },
    "extends": "airbnb",
    "plugins": ["html", "vue"],
    "rules": {
        "indent": ["error", 2, {
            "SwitchCase": 1
        }],
        "quotes": ["error", "single"],
        "semi": ["error", "always"],
        "no-console": ["error"],
    }
}
