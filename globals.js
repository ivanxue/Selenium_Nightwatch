module.exports = {

    abortOnAssertionFailure: false,
  
    waitForConditionTimeout: 10000,

    // waitForConditionPollInterval: 5,
  
    beforeEach: function(browser, done) {
      browser.maximizeWindow();
      browser.timeouts('implicit', 10000);
      
    },
  
    afterEach: function(browser, done) {
      browser.end();
    }
  };
  