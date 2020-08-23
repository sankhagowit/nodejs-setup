module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
  },
  extends: ["eslint:recommended", "eslint-config-prettier"],
  rules: {
    "no-console": "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
  },
  env: {
    node: true,
    es6: true,
    jest: true,
  },
}
