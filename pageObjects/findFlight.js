var findFlightsCommands = {
    findFlights: function(fromPort, toPort) {
        return this
        .waitForElementVisible('@type', 3000)
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
            selector: 'input[type="radio"][value="roundtrip"]',
            locateStrategy: 'css'
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