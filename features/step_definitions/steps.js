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

  When(/^Search flights from ([^"]*) to ([^"]*)$/, (fromPort, toPort) => {
    var findFlight = client.page.findFlight();
    return findFlight.findFlights(fromPort, toPort);
  });

  When(/^Reserve flight$/, () => {
    var reserveFlight = client.page.reserveFlight();
    return reserveFlight.reserveFlights();
  });

  When(
    /^Confirm flight using first name as ([^"]*), last name as ([^"]*) and credit card number as ([^"]*)$/,
    (firstName, lastName, creditNumber) => {
      var purchaseFlight = client.page.purchaseFlight();
      return purchaseFlight.purchaseFlight(firstName, lastName, creditNumber);
    }
  );

  Then(/^The flight is booked successfully$/, () => {
    var confirmFlight = client.page.confirmFlight();
    return confirmFlight.confirmFlight();
  });
});
