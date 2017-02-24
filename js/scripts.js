// Back-End






//Front-End
$(function(){
  $("#input").submit(function(){
  event.preventDefault();
  var userInput = parseInt($("#user-input").val());
  console.log(userInput);
  });
});
