module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  resolver: null,
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json",
      babelConfig: "babel.config.js"
    }
  },
  transformIgnorePatterns: ["/node_modules/(?!(animejs)/)"],
  testMatch: [
    "**/**/__tests__/**/*.[jt]s?(x)",
    "**/**/?(*.)+(spec|test).[jt]s?(x)"
  ]
};
