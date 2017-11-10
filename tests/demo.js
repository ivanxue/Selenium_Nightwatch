module.exports = {
  'Test 1' : function (browser) {
    var home = browser.page.home();
    var findFlight = browser.page.findFlight();
    var reserveFlight = browser.page.reserveFlight();
    var purchaseFlight = browser.page.purchaseFlight();
    var confirmFlight = browser.page.confirmFlight();

    var data = browser.globals;

    home.navigate();

    home.login(data.userName, data.password);
    findFlight.findFlights(data.fromPort, data.toPort);
    reserveFlight.reserveFlights();
    purchaseFlight.purchaseFlights(data.firstName, data.lastName, data.creditNumber);
    confirmFlight.confirmFlights();

    browser.end();
  } 
};
