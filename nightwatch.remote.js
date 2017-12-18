module.exports = {
  "src_folders":["tests"],
  "output_folder" : "reports",
  "page_objects_path": "./pageObjects/",
  "globals_path": "./globals.js",
  "output_folder" : "reports",
  
  selenium : {
    "start_process" : false,
    "host" : "hub-cloud.browserstack.com",
    "port" : 80
  },

  test_settings: {
    default: {
      "selenium_port"  : 80,
      "selenium_host"  : "hub-cloud.browserstack.com",

      desiredCapabilities: {
        'browserstack.user': 'feng20',
        'browserstack.key': 'bxxkpf34hS1BKKyciXr2',
        'browserstack.debug': true, 
        'os': 'Windows',
        'os_version': '10',
        'browser': 'Firefox',
        'browser_version': '48.0',
        'resolution': '1024x768'
      },
    },

    "chrome" : {
      "selenium_port"  : 80,
      "selenium_host"  : "hub-cloud.browserstack.com",

      desiredCapabilities: {
        'browserstack.user': 'feng20',
        'browserstack.key': 'bxxkpf34hS1BKKyciXr2',
        'browserstack.debug': true, 
        'os': 'Windows',
        'os_version': '10',
        'browser': 'Chrome',
        'browser_version': '62.0',
        'resolution': '1024x768'
      },
    },
  }
};