const { client } = require("nightwatch-cucumber");
const { defineSupportCode } = require("cucumber");

defineSupportCode(({ Given, Then, When }) => {
  Given(/^I open Mercury Tour page$/, () => {
    var home = client.page.home();
    return home.navigate();
  });

  When(
    /^I login to Mercury using ([^"]*) and ([^"]*)$/,
    (userName, password) => {
      var home = client.page.home();
      return home.login(userName, password);
    }
  );

  Then(/^Page titile is "([^"]*)"$/, title => {
    client.assert.title(title);
  });
});
