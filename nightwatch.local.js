if (typeof Object.assign != "function") {
  // Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, "assign", {
    value: function assign(target) {
      // .length of function is 2
      "use strict";
      if (target == null) {
        // TypeError if undefined or null
        throw new TypeError("Cannot convert undefined or null to object");
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource != null) {
          // Skip over if undefined or null
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    writable: true,
    configurable: true
  });
}

var baseSetting = {
  src_folders: ["tests"],
  output_folder: "./reports",
  custom_commands_path: "",
  custom_assertions_path: "",
  globals_path: "",
  page_objects_path: "./pageObjects",

  selenium: {
    start_process: true,
    server_path: "./lib/selenium-server-standalone-3.4.0.jar",
    log_path: "",
    port: 4444
  },

  test_settings: {
    default: {
      launch_url: "http://localhost",
      selenium_port: 4444,
      selenium_host: "localhost",
      silent: true,
      screenshots: {
        enabled: false,
        path: ""
      },

      desiredCapabilities: {
        browserName: "firefox",
        javascriptEnabled: true,
        acceptSslCerts: true
      },

      globals: require("./data/firefox.js")
    },

    chrome: {
      desiredCapabilities: {
        browserName: "chrome"
      },

      globals: require("./data/chrome.js")
    },

    firefox: {
      desiredCapabilities: {
        browserName: "firefox"
      }
    },

    safari: {
      desiredCapabilities: {
        browserName: "safari"
      }
    },

    edge: {
      desiredCapabilities: {
        platform: "Windows 10",
        browserName: "MicrosoftEdge",
        javascriptEnabled: true
      }
    },

    ie: {
      desiredCapabilities: {
        browserName: "internet explorer"
      }
    }
  }
};

if (process.platform == "win32") {
  var winSetting = Object.assign({}, baseSetting);
  winSetting.selenium.cli_args = {
    "webdriver.chrome.driver": "./drivers/windows/chromedriver.exe",
    "webdriver.gecko.driver": "./drivers/windows/geckodriver.exe",
    "webdriver.edge.driver": "./drivers/windows/MicrosoftWebDriver.exe",
    "webdriver.ie.driver": "./drivers/windows/IEDriverServer.exe"
  };
  module.exports = winSetting;
} else if (process.platform == "darwin" || process.platform == "linux") {
  var unixSetting = Object.assign({}, baseSetting);
  unixSetting.selenium.cli_args = {
    "webdriver.chrome.driver": "./drivers/mac/chromedriver",
    "webdriver.gecko.driver": "./drivers/mac/geckodriver"
  };
  module.exports = unixSetting;
}