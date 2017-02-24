// Back-End
var serve = function(input){
  var userArray = convertToArray(input);

};

var convertToArray = function(input){
  var newArray = [];
  for(var i = 1; i <= input; i++){
    newArray.push(i);
  };
  return newArray;
};




//Front-End
$(function(){
  $("#input").submit(function(){
  event.preventDefault();
  var userInput = parseInt($("#user-input").val());
  console.log(userInput);
  var finalAnswer = serve(userInput);

  });
});
