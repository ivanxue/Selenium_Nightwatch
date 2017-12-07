module.exports = {
  before: function(browser) {
    browser.maximizeWindow();
  },

  after: function(browser) {
    browser.end();
  },

  "Test 1": function(browser) {
    var home = browser.page.home();
    var findFlight = browser.page.findFlight();
    var reserveFlight = browser.page.reserveFlight();
    var purchaseFlight = browser.page.purchaseFlight();
    var confirmFlight = browser.page.confirmFlight();

    var data = browser.globals;

    for (var i = 0; i < Object.keys(data).length - 5; i++) {
      var parameters = data[i];

      home.navigate();

      home.login(parameters.userName, parameters.password);
      findFlight.findFlights(parameters.fromPort, parameters.toPort);
      reserveFlight.reserveFlights();
      purchaseFlight.purchaseFlight(
        parameters.firstName,
        parameters.lastName,
        parameters.creditNumber
      );
      confirmFlight.confirmFlight();
    }
  }
};
