const { client } = require("nightwatch-cucumber");
const { defineSupportCode } = require("cucumber");

defineSupportCode(({ Given, Then, When }) => {
  When(/^Reserve flight$/, () => {
    var reserveFlight = client.page.reserveFlight();
    return reserveFlight.reserveFlights();
  });
});
