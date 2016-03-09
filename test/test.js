$(document).ready(function(){
  var testResults = $( "#testResults" );

  var url = 'http://localhost:3000';

  var login = function (success, error) {
    $.ajax({
      method: 'GET',
      url: url + '/',
      contentType: 'application/json; charset=utf-8',
      // data: JSON.stringify(credentials),
      // xhrFields: { withCredentials: true } // tells jquery to use cookies
      success: success,
      error: error
    });
  };

  var success = function (data, textStatus, jqXHR) {
    testResults.append( "data " + data + "<br>");
    testResults.append( "textStatus " + textStatus + "<br>");
    testResults.append( "jqXHR " + jqXHR + "<br>");
  };

  var error = function (jqXHR, textStatus, errorThrown) {
    testResults.append( "jqXHR " + jqXHR + "<br>");
    testResults.append( "textStatus " + textStatus + "<br>" );
    testResults.append( "errorThrown " + errorThrown + "<br>" );
  };

  login(success, error);

});
