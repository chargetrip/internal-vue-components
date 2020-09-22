module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  resolver: null,
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json",
      babelConfig: "babel.config.js"
    }
  }
};
