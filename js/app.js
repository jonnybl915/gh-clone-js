console.log('wired up!')
console.log($)
console.log(_)
console.log(Backbone)



  $.getJSON("https://api.github.com/users/jonnybl915", function(serverResponse) {
    console.log(serverResponse);
  });

  $.get( "https://api.github.com/users/jonnybl915", function(response) {
    console.log( response );
});

// $.ajax({
//   dataType: "json",
//   url: 'https://api.github.com/users/jonnybl915',
//   data: plainObject,
//   success: createProfile()
// });
