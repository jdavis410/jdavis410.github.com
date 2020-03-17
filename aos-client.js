(function (global) {
  var Response;
  function isReactAppReady() {
    var response = null;
    if (!window.ReactNativeWebView) {
      return false;
    }

    try {
      window.ReactNativeWebView.postMessage(COMMAND.checkInit);
      window.addEventListener("message", message => {
        response = message.data;
        Response = message.data;
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
    Response: Response
  };

  if (global.aos) {
    throw new Error('aos is already defined');
  } else {
    global.aos = aos;
  }
})(typeof window === 'undefined' ? this : window);
