module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: [
    "/__tests__/(*.)(spec|test).(ts|tsx|js)",
    "**/?(*.)(spec|test).ts?(x)",
  ],
};
