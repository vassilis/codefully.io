module.exports = {
  parser: "babel-eslint",
  extends: "airbnb",
  plugins: ["react", "jsx-a11y", "import"],
  rules: {
    "no-console": "off",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"]
      }
    ]
  },
  globals: {
    document: true,
    window: true
  },
  env: {
    browser: true
  }
};
