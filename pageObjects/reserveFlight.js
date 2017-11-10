var reserveFlightsCommands = {
    reserveFlights: function() {
        return this
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