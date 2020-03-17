(function (global) {
  function isReactAppReady() {
    var response = null;
    if (!window.ReactNativeWebView) {
      return false;
    }

    try {
      window.ReactNativeWebView.postMessage(COMMAND.checkInit);
      window.addEventListener("message", message => {
        response = message;
        console.log(message);
      });
      if (response == null) {
        return false;
      }
      else {
        return response;
      }
    }
    catch(error) { console.log(error); }

    return response;
  }

  var aos = {
    VERSION: '0.0.1',
    isReady: function() { return isReactAppReady()},
  };

  if (global.aos) {
    throw new Error('aos is already defined');
  } else {
    global.aos = aos;
  }
})(typeof window === 'undefined' ? this : window);
