var reserveFlightsCommands = {
    reserveFlights: function() {
        return this
        .waitForElementVisible('@continueBtn', 3000)
        .click('@continueBtn');
    }
};

module.exports = {
    commands: [reserveFlightsCommands],
    elements: {
        continueBtn: {
            selector: '//input[@name="reserveFlights"]',
            locateStrategy: 'xpath'
        }
    }
};