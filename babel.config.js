module.exports = {
  presets: ["module:metro-react-native-babel-preset", "module:react-native-dotenv"],
  env: {
    production: {},
  },
  plugins: [
    [
      "transform-inline-environment-variables",
      {
        include: ["NODE_ENV", "API"],
      },
    ],
    [
      "@babel/plugin-proposal-decorators",
      {
        legacy: true,
      },
    ],
  ],
}
