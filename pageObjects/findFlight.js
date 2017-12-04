var findFlightsCommands = {
    findFlights: function(fromPort, toPort) {
        return this
        .waitForElementVisible('@type')
        .click('@type')
        .setValue('@fromPort',fromPort)
        .setValue('@toPort', toPort)
        .click('@continueBtn');
    }
};

module.exports = {
    commands: [findFlightsCommands],
    elements: {
        type: {
            selector: '//input[@name="tripType"][@value="roundtrip"]',
            locateStrategy: 'xpath'
        },
        fromPort: {
            selector: '//select[@name="fromPort"]',
            locateStrategy: 'xpath'
        },
        toPort: {
            selector: '//select[@name="toPort"]',
            locateStrategy: 'xpath'
        },
        continueBtn: {
            selector: '//input[@name="findFlights"]',
            locateStrategy: 'xpath'
        }
    }
};