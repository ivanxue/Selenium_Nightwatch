require('nightwatch-cucumber')({
  cucumberArgs: [
  '--require', 'step_definitions', 
  '--format', 'json:reports/cucumber_report.json', 
  'features'
  ]
});

module.exports = {
  // "src_folders":["tests"],
  "output_folder" : "reports",
  "custom_commands_path" : "",
  "custom_assertions_path" : "",
  "globals_path" : "",
  "page_objects_path": "pageObjects/",

  "selenium" : {
    "start_process" : true,
    "server_path" : "lib/selenium-server-standalone-3.4.0.jar",
    "log_path" : "",
    "port" : 4444,
    "cli_args" : {
      "webdriver.chrome.driver" : "drivers/chromedriver",
      "webdriver.gecko.driver" : "drivers/geckodriver",
      "webdriver.edge.driver" : ""
    }
  },

  "test_settings" : {

    "default" : {
      "launch_url" : "http://localhost",
      "selenium_port"  : 4444,
      "selenium_host"  : "localhost",
      "silent": true,
      "screenshots" : {
        "enabled" : false,
        "path" : ""
      },
      
      "desiredCapabilities": {
        "browserName": "firefox",
        "marionette": true,
        "javascriptEnabled": true,
        "acceptSslCerts": true
      },

      globals: require('./data/firefox.js')

    },

    "chrome" : {
      "desiredCapabilities": {
        "browserName": "chrome"
      },

      globals: require('./data/chrome.js')
    },

    "edge" : {
      "desiredCapabilities": {
        "browserName": "MicrosoftEdge"
      }
    }
  }
};