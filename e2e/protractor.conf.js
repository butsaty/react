exports.config = {
  specs: ['**/*.spec.js'],
  capabilities: {
    browserName: 'chrome',
  },
  chromeOnly: true,
  directConnect: true,
  baseUrl: 'http://localhost:8080/',
  framework: 'jasmine',
  onPrepare() {
    browser.ignoreSynchronization = true;
  },
};
