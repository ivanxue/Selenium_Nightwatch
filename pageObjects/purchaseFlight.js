var purchaseFlightsCommands = {
    purchaseFlight: function(firstName, lastName, creditNumber) {
        return this
        .setValue('@firstName', firstName)
        .setValue('@lastName', lastName)
        .setValue('@creditCard', creditNumber)
        .click('@continueBtn');
    }
};

module.exports = {
    commands: [purchaseFlightsCommands],
    elements: {
        firstName: {
            selector: '//input[@name="passFirst0"]',
            locateStrategy: 'xpath'
        },
        lastName: {
            selector: '//input[@name="passLast0"]',
            locateStrategy: 'xpath'
        },
        creditCard: {
            selector: '//input[@name="creditnumber"]',
            locateStrategy: 'xpath'
        },
        continueBtn: {
            selector: '//input[@name="buyFlights"]',
            locateStrategy: 'xpath'
        }
    }
};