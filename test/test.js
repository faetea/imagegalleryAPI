$(document).ready(function(){

  var url = 'http://localhost:3000';

  var cleaner = function (success, error) {
    $.ajax({
      method: 'GET',
      url: url + '/cleaner',
      contentType: 'application/json; charset=utf-8',
      success: success,
      error: error
    });
  };

  var credentials = {"first_name":"Serena","last_name":"Moon","email":"bunny@email.com","password":"meatball", password_confirmation: "meatball"};

  // post 'signup'  => 'users#create'
  var register = function (success, error) {
    $.ajax({
      method: 'POST',
      url: url + '/signup',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(credentials),
      success: success,
      error: error
    });
  };

  // post 'login' => 'sessions#create'
  var login = function (success, error) {
    $.ajax({
      method: 'POST',
      url: url + '/login',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(credentials),
      // xhrFields: { withCredentials: true }, // tells jquery to use cookies
      success: success,
      error: error
    });
  };

  var testResults = $( "#testResults" );

  cleaner(
    function (data, textStatus, jqXHR) {
      testResults.append( textStatus + " cleaner<br>");
      testResults.append( JSON.stringify(jqXHR) + "<br>");
      testResults.append( JSON.stringify(data) + "<br><br>");

      register(
        function (data, textStatus, jqXHR) {
          testResults.append( textStatus + " register<br>");
          testResults.append( JSON.stringify(jqXHR) + "<br>");
          testResults.append( JSON.stringify(data) + "<br><br>");

          login(
            function (data, textStatus, jqXHR) {
              testResults.append( textStatus + " login<br>");
              testResults.append( JSON.stringify(jqXHR) + "<br>");
              testResults.append( JSON.stringify(data) + "<br><br>");
            },
            function (jqXHR, textStatus, errorThrown) {
              testResults.append( textStatus + " login<br>" );
              testResults.append( JSON.stringify(jqXHR) + "<br>");
              testResults.append( JSON.stringify(errorThrown) + "<br><br>" );
          });
        },// end register success

        // begin register error
        function (jqXHR, textStatus, errorThrown) {
          testResults.append( textStatus + " register<br>" );
          testResults.append( JSON.stringify(jqXHR) + "<br>");
          testResults.append( JSON.stringify(errorThrown) + "<br><br>" );
      });
    }, // end cleaner success

    // begin cleaner error
    function (jqXHR, textStatus, errorThrown) {
      testResults.append( textStatus + " cleaner<br>" );
      testResults.append( JSON.stringify(jqXHR) + "<br>");
      testResults.append( JSON.stringify(errorThrown) + "<br><br>" );
  });

});

