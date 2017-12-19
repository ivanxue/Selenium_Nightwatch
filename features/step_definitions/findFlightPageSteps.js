const { client } = require("nightwatch-cucumber");
const { defineSupportCode } = require("cucumber");

defineSupportCode(({ Given, Then, When }) => {
  When(/^Search flights from ([^"]*) to ([^"]*)$/, (fromPort, toPort) => {
    var findFlight = client.page.findFlight();
    return findFlight.findFlights(fromPort, toPort);
  });
});
