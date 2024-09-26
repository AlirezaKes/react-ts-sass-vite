// babel.config.js
export default {
  presets: [
    ["@babel/preset-env", { modules: false }],
    ["@babel/preset-react", { runtime: "automatic" }],
    "@babel/preset-typescript",
  ],
  plugins: [],
};
