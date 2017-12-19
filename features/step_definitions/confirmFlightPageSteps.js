const { client } = require("nightwatch-cucumber");
const { defineSupportCode } = require("cucumber");

defineSupportCode(({ Given, Then, When }) => {
  Then(/^The flight is booked successfully$/, () => {
    var confirmFlight = client.page.confirmFlight();
    return confirmFlight.confirmFlight();
  });
});
