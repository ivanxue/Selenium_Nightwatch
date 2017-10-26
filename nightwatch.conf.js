nightwatch_config = {
  "src_folders":["tests"],
  "output_folder" : "reports",
  "page_objects_path": "pageObjects/",
  "output_folder" : "reports",
  
  selenium : {
    "start_process" : false,
    "host" : "hub-cloud.browserstack.com",
    "port" : 80
  },

  test_settings: {
    default: {
      desiredCapabilities: {
        'browserstack.user': 'ivanxue1',
        'browserstack.key': 'YYQosi7Fa5UYvYxy6rCV',
        'os': 'Windows',
        'os_version': '10',
        'browser': 'Firefox',
        'browser_version': '48.0',
        'resolution': '1024x768'
      }
    }
  }
};

// Code to copy seleniumhost/port into test settings
for(var i in nightwatch_config.test_settings){
  var config = nightwatch_config.test_settings[i];
  config['selenium_host'] = nightwatch_config.selenium.host;
  config['selenium_port'] = nightwatch_config.selenium.port;
}

module.exports = nightwatch_config;