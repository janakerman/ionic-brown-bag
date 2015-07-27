
var cordova = require('cordova');

module.exports = {
  /*
   * Save `string` to device with `filename`.
   */
  saveString: function(string, filename) {
    cordova.exec(null, null, "SLFile", "saveString", [string, filename]);
  },

  /*
   * Load `filename` from device.
   */
  loadString: function(filename, success, error) {
    cordova.exec(function(result) {
      success(result.string);
    }, error, "SLFile", "loadString", [filename]);
  }
};

