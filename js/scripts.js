// Back-End
var serve = function(input){
  var userArray = convertToArray(input); //  Converts to Array
  var amendedArray = amendArray(userArray); // Amends Array

    for(i=0; i<amendedArray.length; i++){
      $(".results").append("<li>"+amendedArray[i]+"</li>");  // (Not Sure if this should be in front end)??? Populates the list on the webpage with info gathered from the "amendedArray"
    };
};

var convertToArray = function(input){ //  Converts the users input into a "newArray" from 1 - the input.
  var newArray = [];
    for(var i = 1; i <= input; i++){
      newArray.push(i);
    };
    return newArray;
};

var amendArray = function(newArray){ //   Creates and returns an "amendedArray" with ping, pong, and pingpong in the appropriate places.

  var amendedArray = newArray;

    for(var i = 1; i <=newArray.length; i++){
      if (newArray[i]%5===0 && newArray[i]%3===0){
        amendedArray.splice(i,1,"ping-pong");
      };
      if (newArray[i]%3===0){
        amendedArray.splice(i,1,"ping")
      };
      if (newArray[i]%5===0){
        amendedArray.splice(i,1,"pong");
      };
    };
return amendedArray;
};



//Front-End
$(function(){
  $("#input").submit(function(){
    event.preventDefault();
    $(".results").empty();
    var userInput = parseInt($("#user-input").val());
    serve(userInput);

  });
});
