$(document).ready(function() {
  $("#quizForm").submit(function(event) {

    event.preventDefault();

    var answer1 = parseInt($('input[name=question1]:checked','#quizForm').val());
    var answer2 = parseInt($('input[name=question2]:checked','#quizForm').val());
    var answer3 = parseInt($('input[name=question3]:checked','#quizForm').val());

    var result = answer1 + answer2 + answer3;

    if (result <= 6 ) {
      alert("cSharp!");
      $(".finalresult").fadeOut();
      $("#cSharp").fadeIn();


    } else if ( result > 6 && result <= 9 ) {
      alert("#Java!");
      $(".finalresult").fadeOut();
      $("#Java").fadeIn();

    } else if ( result > 9 && result <= 12  ) {
      alert("#PHP!");
      $(".finalresult").fadeOut();
      $("#PHP").fadeIn();


    } else if ( result > 12 && result <= 15 ) {
      alert("#Ruby!");
      $(".finalresult").fadeOut();
      $("#Ruby").fadeIn();

      
    } else {
      alert("Did not recieve input!")


    };

event.preventDefault();


  });
});
