var confirmFlightsCommands = {
    confirmFlights: function() {
        return this
        .waitForElementVisible('@logoutBtn', 3000)
        .verify.containsText('@successfulMsg', 'booked')
        .click('@logoutBtn');
    }
};

module.exports = {
    commands: [confirmFlightsCommands],
    elements: {
        successfulMsg: {
            selector: '//font[2]',
            locateStrategy: 'xpath'
        },
        logoutBtn: {
            selector: '//td[3]/a/img',
            locateStrategy: 'xpath'
        }
    }
};