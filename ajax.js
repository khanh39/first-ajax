$(document).ready(function () {

  /* Your code goes here */


$('#button1').click(function(){
  //
  // $.ajax({
  //   url: 'http://first-ajax-api.herokuapp.com/ping',
  //   method: "GET",
  //   data: {},
  //   dataType: 'text'
  // });

  $.ajax({
       dataType: "text",
       url: "http://first-ajax-api.herokuapp.com/ping",
       success: function (data) {
           console.log(data);
           $("#step3456").append(data);}
         }).fail(function(){ console.log("fail")}).always( function(){console.log("always write this")});
});




// $('#button2').click(function(){
//   $.ajax({
//        dataType: "text",
//        url: "http://first-ajax-api.herokuapp.com/count",
//        success: function (data) {
//            console.log(data);
//            $("#step7").append(data);}
//          }).fail(function(){ console.log("fail")}).always( function(){console.log("always write this")});
// });

$('#button2').click(function(){

$.ajax({
  url: "http://first-ajax-api.herokuapp.com/count",
  method: 'GET',
  data: {food: 'pancakes', quantity: 6, type: 'blueberry'}, // this is info were sending to the server. in this case - its meaningless.
  dataType: 'text'
}).done(function (responseData) {
  console.log('Yay we did it!');
   $("#step7").append(responseData);
}).fail(function () {
  console.log('failure');
}).always(function () {
  console.log('always print this');
});

});


$('#button3').click(function(){

$.ajax({
  url: "http://first-ajax-api.herokuapp.com/time",
  method: 'GET',
  data: {Asia: "Kolkata"}, // this is info were sending to the server. in this case - its meaningless.
  dataType: 'text'
}).done(function (responseData) {
  console.log('Yay we did it!');
   $("#step8").append(responseData);
}).fail(function () {
  console.log('failure');
}).always(function () {
  console.log('always print this');
});

});





$('#button4').click(function(){

$.ajax({
  url: "http://first-ajax-api.herokuapp.com/a_car",
  method: 'GET',
  data: {}, // this is info were sending to the server. in this case - its meaningless.
  dataType: 'html'
}).done(function (responseData) {
  console.log('Yay we did it!');
   $("#ul").append(responseData);
}).fail(function () {
  console.log('failure');
}).always(function () {
  console.log('always print this');
});

});




});
