module.exports = {
  'Demo test Google' : function (browser) {
    var google = browser.page.google();

    google.navigate()
      .assert.title('Google')
      .assert.visible('@searchBar')
      .setValue('@searchBar', ['nightwatch', browser.Keys.ENTER])
      .assert.containsText('#main', 'Night Watch');

    browser.end();
  }
};