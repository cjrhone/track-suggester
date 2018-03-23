$(document).ready(function() {
  $("#quizForm").submit(function(event) {

    event.preventDefault();

    var answer1 = parseInt($('input[name=question1]:checked','#quizForm').val());
    var answer2 = parseInt($('input[name=question2]:checked','#quizForm').val());
    var answer3 = parseInt($('input[name=question3]:checked','#quizForm').val());
    var answer4 = parseInt($('input[name=question4]:checked','#quizForm').val());
    var answer5 = parseInt($('input[name=question5]:checked','#quizForm').val());

    var result = answer1 + answer2 + answer3 + answer4 + answer5;

    if (result <= 4 ) {
      alert("cSharp!");
      $(".finalresult").fadeOut();
      $("#cSharp").fadeIn();


    } else if ( result > 5 && result <= 8 ) {
      alert("#Java!");
      $(".finalresult").fadeOut();
      $("#Java").fadeIn();

    } else if ( result > 9 && result <= 11  ) {
      alert("#PHP!");
      $(".finalresult").fadeOut();
      $("#PHP").fadeIn();


    } else if ( result >= 12 ) {
      alert("#Ruby!");
      $(".finalresult").fadeOut();
      $("#Ruby").fadeIn();


    } else {
      alert("Please check an answer for each question")


    };

event.preventDefault();


  });
});
