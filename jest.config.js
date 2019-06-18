module.exports = {
  preset: 'jest-puppeteer',
  collectCoverageFrom: [
    './public/**.js',
  ],
  testPathIgnorePatterns: [
    '/mocha/',
  ],
  coverageDirectory: 'jest-coverage',
};
