(function (global) {
  var Response;
  document.addEventListener("message", message => { Response = message.data; console.log(response)});
  function isReactAppReady() {
    var response = null;
    if (!window.ReactNativeWebView) {
      return false;
    }

    try {
      Response = null;
      document.ReactNativeWebView.postMessage(COMMAND.checkInit);
      
      if (Response == null) {
        return false;
      }
      else {
        return Response;
      }
    }
    catch(error) { console.log(error); }

    return Response;
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
