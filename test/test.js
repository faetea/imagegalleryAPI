$(document).ready(function(){

  var url = 'http://localhost:3000';

  var register = function (success, error) {
    $.ajax({
      method: 'POST',
      url: url + '/signup',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({"first_name" : "Serena", "last_name" : "Moon", "email" : "bunny@email.com", "password_digest" : "meatball"}),
      success: success,
      error: error
    });
  };

  var login = function (success, error) {
    $.ajax({
      method: 'GET',
      url: url + '/login',
      contentType: 'application/json; charset=utf-8',
      // data: JSON.stringify(credentials),
      // xhrFields: { withCredentials: true }, // tells jquery to use cookies
      success: success,
      error: error
    });
  };

  var cleaner = function (success, error) {
    $.ajax({
      method: 'GET',
      url: url + '/cleaner',
      contentType: 'application/json; charset=utf-8',
      // data: JSON.stringify(credentials),
      // xhrFields: { withCredentials: true }, // tells jquery to use cookies
      success: success,
      error: error
    });
  };

  var testResults = $( "#testResults" );

  register(
    function (data, textStatus, jqXHR) {
      testResults.append( textStatus + "<br>");
      testResults.append( jqXHR + "<br>");
      testResults.append( data + "<br>");
    },
    function (jqXHR, textStatus, errorThrown) {
      testResults.append( textStatus + "<br>" );
      testResults.append( jqXHR + "<br>");
      testResults.append( errorThrown + "<br>" );
  });

  login(
    function (data, textStatus, jqXHR) {
      testResults.append( textStatus + "<br>");
      testResults.append( jqXHR + "<br>");
      testResults.append( data + "<br>");
    },
    function (jqXHR, textStatus, errorThrown) {
      testResults.append( textStatus + "<br>" );
      testResults.append( jqXHR + "<br>");
      testResults.append( errorThrown + "<br>" );
  });

  cleaner(
    function (data, textStatus, jqXHR) {
      testResults.append( textStatus + "<br>");
      testResults.append( jqXHR + "<br>");
      testResults.append( data + "<br>");
    },
    function (jqXHR, textStatus, errorThrown) {
      testResults.append( textStatus + "<br>" );
      testResults.append( jqXHR + "<br>");
      testResults.append( errorThrown + "<br>" );
  });

});
