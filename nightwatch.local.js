var baseSetting = {
  src_folders: ["tests"],
  output_folder: "./reports",
  custom_commands_path: "",
  custom_assertions_path: "",
  globals_path: "./globals.js",
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

      globals: require("./data/data.js"),

      persist_globals: true,

      desiredCapabilities: {
        browserName: "chrome",
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    },

    chrome: {
      desiredCapabilities: {
        browserName: "chrome"
      }
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
  var winSetting = baseSetting;
  winSetting.selenium.cli_args = {
    "webdriver.chrome.driver": "./drivers/windows/chromedriver.exe",
    "webdriver.gecko.driver": "./drivers/windows/geckodriver.exe",
    "webdriver.edge.driver": "./drivers/windows/MicrosoftWebDriver.exe",
    "webdriver.ie.driver": "./drivers/windows/IEDriverServer.exe"
  };
  module.exports = winSetting;
} else if (process.platform == "darwin" || process.platform == "linux") {
  var unixSetting = baseSetting;
  unixSetting.selenium.cli_args = {
    "webdriver.chrome.driver": "./drivers/mac/chromedriver",
    "webdriver.gecko.driver": "./drivers/mac/geckodriver"
  };
  module.exports = unixSetting;
}
