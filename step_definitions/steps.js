const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');

defineSupportCode(({Given, Then, When}) => {
  Given(/^I open Google's search page$/, () => {
    var google = client.page.google();
    return google
      .navigate()
      .waitForElementVisible('body', 1000);
  });

  Then(/^the title is "([^"]*)"$/, (title) => {
    var google = client.page.google();
    return google.assert.title(title);
  });

  Then(/^the Google search form exists$/, () => {
    var google = client.page.google();
    return google.assert.visible('@searchBar');
  });

});