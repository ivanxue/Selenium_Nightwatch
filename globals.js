module.exports = {
  data: [
    {
      userName: "mercury",
      password: "mercury",
      fromPort: "Sydney",
      toPort: "London",
      firstName: "Ivan",
      lastName: "Xue",
      creditNumber: "123"
    },
    {
      userName: "mercury",
      password: "mercury",
      fromPort: "London",
      toPort: "Paris",
      firstName: "Ivan",
      lastName: "Xue",
      creditNumber: "123"
    }
  ],

  abortOnAssertionFailure: false,

  waitForConditionTimeout: 10000,

  // waitForConditionPollInterval: 5,

  beforeEach: function(browser, done) {
    browser.maximizeWindow();
    browser.timeouts("implicit", 10000);
  },

  afterEach: function(browser, done) {
    browser.end();
  }
};
