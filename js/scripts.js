$(document).ready(function() {
  $("#quizForm").submit(function(event) {

    alert("you pressed a button! congrats!");

    event.preventDefault();

    var answer1 = parseInt($('input[name=question1]:checked','#quizForm').val());
    var answer2 = parseInt($('input[name=question2]:checked','#quizForm').val());
    var answer3 = parseInt($('input[name=question3]:checked','#quizForm').val());

    var result = answer1 + answer2 + answer3;

    if (result === 3 ) {
      alert("1");
      $("#cSharp").fadeIn();
    } else if ( result > 3 && result <= 6 ) {
      alert("#Java");
    } else if ( result > 6 && result <= 9  ) {
      alert("#PHP");
    } else if ( result > 9 && result <= 12 ) {
      alert("#Ruby");
    } else {
      alert("Did not recieve input")
    };

event.preventDefault();


  });
});
