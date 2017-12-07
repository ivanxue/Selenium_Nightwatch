var confirmFlightsCommands = {
    confirmFlight: function() {
        return this
        // .waitForElementVisible('@logoutBtn', 'Logout button %s is displayed in %s millionseconds')
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