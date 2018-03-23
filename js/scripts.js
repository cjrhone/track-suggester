$(document).ready(function() {
  $("#quizForm").submit(function(event) {

    alert("you pressed a button! congrats!");

    event.preventDefault();

    var choiceInput = parseInt($('.Q1').val());

    if (choiceInput === 1 ) {
      alert("1");
      $("#cSharp").fadeIn();
    } else if ( choiceInput === 2 ) {
      alert("2");
    } else if ( choiceInput === 3 ) {
      alert("3");
    } else if ( choiceInput === 4 ) {
      alert("4");
    } else {
      alert("Did not recieve input")
    };

event.preventDefault();


  });
});
