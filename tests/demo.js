module.exports = {
  'Demo test Google' : function (browser) {
    var google = browser.page.google();
    var data = browser.globals;

    google.navigate()
      .assert.title('Google')
      .assert.visible('@searchBar')
      .setValue('@searchBar', [data.keyword, browser.Keys.ENTER])
      .assert.containsText('#main', data.keyword);

    browser.end();
  }
};