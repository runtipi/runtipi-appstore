module.exports = {
  extends: ['plugin:json-schema-validator/recommended'],
  plugins: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ['apps/ddns-updater/data/config/config.json'],
  rules: {
    'json-schema-validator/no-invalid': 'error',
  },
};
