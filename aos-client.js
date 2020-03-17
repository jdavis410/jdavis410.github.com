(function (global) {
  function isReactAppReady() {
    if (!window.ReactNativeWebView) {
      return false;
    }

    try {
      var response = null;
      window.ReactNativeWebView.postMessage(COMMAND.checkInit);
      window.addEventListener("message", message => {
        response = message;
        console.log(message);
      });
      if (response == null) {
        return false;
      }
      else {
        Response = response;
        return true;
      }
    }
    catch(error) { console.log(error); }

    return true;
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
