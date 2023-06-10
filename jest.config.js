const { compilerOptions } = require("./tsconfig.json");

const pathsToModuleNameMapper = (paths, { prefix }) => {
  const aliases = {};

  Object.keys(paths).forEach((item) => {
    const key = item.replace("/*", "/(.*)");
    const value = `${prefix}${paths[item][0].replace("/*", "/$1")}`;
    aliases[key] = value;
  });

  return aliases;
};

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  setupFiles: ["./setupTests.ts"],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>/",
  }),
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  testRegex: "/tests/.*\\.(test|spec)\\.ts?$",
  moduleFileExtensions: ["ts", "js", "json", "node"],
};
