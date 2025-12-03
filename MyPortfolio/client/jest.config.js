export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest"
  },
  moduleFileExtensions: ["js", "jsx"],
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "<rootDir>/src/_mocks_/styleMock.js",
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/src/_mocks_/fileMock.js"
  }
};
