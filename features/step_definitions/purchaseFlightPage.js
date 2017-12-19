const { client } = require("nightwatch-cucumber");
const { defineSupportCode } = require("cucumber");

defineSupportCode(({ Given, Then, When }) => {
  When(
    /^Confirm flight using first name as ([^"]*), last name as ([^"]*) and credit card number as ([^"]*)$/,
    (firstName, lastName, creditNumber) => {
      var purchaseFlight = client.page.purchaseFlight();
      return purchaseFlight.purchaseFlight(firstName, lastName, creditNumber);
    }
  );
});
