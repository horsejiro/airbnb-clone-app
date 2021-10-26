module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
    },
    "extends": [
        'plugin:react/recommended',
        'airbnb',
        'airbnb/hooks',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "project": "./tsconfig.eslint.json",
        "sourceType": "module",
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
    }
};
