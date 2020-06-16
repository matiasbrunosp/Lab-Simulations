module.exports = {
  "src_folders": ["src/tests"],
  "custom_commands_path": ["commands"],
  "page_objects_path": ["src/pages"],

  "webdriver": {
    "start_process": true,
    "server_path": "node_modules/.bin/chromedriver",
    "port": 9515
  },

  "test_settings": {
    "default": {
      "desiredCapabilities": {
        "browserName": "chrome",
        "w3c": false
      }
    }
  }
}