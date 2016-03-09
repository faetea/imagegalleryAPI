$(document).ready(function(){

  var url = 'http://localhost:3000';

  // post 'signup'  => 'users#create'
  var register = function (success, error) {
    $.ajax({
      method: 'POST',
      url: url + '/signup',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({"first_name":"Serena","last_name":"Moon","email":"bunny@email.com","password_digest":"meatball"}),
      // data: JSON.stringify([{"first_name":"Serena","last_name":"Moon","email":"bunny@email.com","password":"meatball"}]),
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
              testResults.append( JSON.stringifty(data) + "<br><br>");
            },
            function (jqXHR, textStatus, errorThrown) {
              testResults.append( textStatus + " login<br>" );
              testResults.append( JSON.stringify(jqXHR) + "<br>");
              testResults.append( JSON.stringifty(errorThrown) + "<br><br>" );
          });
        },// end register success

        // begin register error
        function (jqXHR, textStatus, errorThrown) {
          testResults.append( textStatus + " register<br>" );
          testResults.append( JSON.stringify(jqXHR) + "<br>");
          testResults.append( JSON.stringifty(errorThrown) + "<br><br>" );
      });
    }, // end cleaner success

    // begin cleaner error
    function (jqXHR, textStatus, errorThrown) {
      testResults.append( textStatus + " cleaner<br>" );
      testResults.append( JSON.stringify(jqXHR) + "<br>");
      testResults.append( JSON.stringifty(errorThrown) + "<br><br>" );
  });

});


// bundle exec rails runner "eval(File.read 'your_script.rb')"

// bunny = User.new
// => #<User id: nil, first_name: nil, last_name: nil, email: nil, password_digest: nil, created_at: nil, updated_at: nil>
// irb(main):002:0>
// irb(main):003:0* bunny.first_name = "Serena"
// => "Serena"
// irb(main):004:0> bunny.last_name = "Moon"
// => "Moon"
// irb(main):005:0> bunny.email = "bun@email.co"
// => "bun@email.co"
// irb(main):006:0> bunny.password_digest = "bunny"
// => "bunny"
// irb(main):007:0> bunny.save
