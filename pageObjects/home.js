var homeCommands = {
    login: function(userName, password) {
        return this
        // .waitForElementVisible('@userName')
        .setValue('@userName', userName)
        .setValue('@password', password)
        .click('@loginBtn')
    }
};

module.exports = {
    commands: [homeCommands],
    url: 'http://newtours.demoaut.com/index.php',
    elements: {
        userName: {
            selector: '//input[@name="userName"]',
            locateStrategy: 'xpath'
        },
        password: {
            selector: '//input[@name="password"]',
            locateStrategy: 'xpath'
        },
        loginBtn: {
            selector: '//input[@name="login"]',
            locateStrategy: 'xpath'
        }
    }
};