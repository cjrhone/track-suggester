var javaAnswer = 0;
var csharpAnswer = 0;
var phpAnswer = 0;
var rubyAnswer = 0;

$(document).ready(function() {
  $("#quizForm").submit(function(event) {

    javaAnswer = 0;
    csharpAnswer = 0;
    phpAnswer = 0;
    rubyAnswer = 0;

    event.preventDefault();

    var answer1 = parseInt($('input[name=question1]:checked','#quizForm').val());
    var answer2 = parseInt($('input[name=question2]:checked','#quizForm').val());
    var answer3 = parseInt($('input[name=question3]:checked','#quizForm').val());
    var answer4 = parseInt($('input[name=question4]:checked','#quizForm').val());
    var answer5 = parseInt($('input[name=question5]:checked','#quizForm').val());

    tallyHelper(answer1);
    tallyHelper(answer2);
    tallyHelper(answer3);
    tallyHelper(answer4);
    tallyHelper(answer5);

    var result = resultDeterminator();
    //= answer1 + answer2 + answer3 + answer4 + answer5;

    if (result === 4){
      alert("Undecided!");
      $(".finalresult").fadeOut();
      $("#undecided").fadeIn();

    } else if (result === 0/*<= 4*/ ) {
      alert("cSharp!");
      $(".finalresult").fadeOut();
      $("#cSharp").fadeIn();

    } else if ( result === 1 /*>= 5 && result <= 8 */) {
      alert("Java!");
      $(".finalresult").fadeOut();
      $("#Java").fadeIn();

    } else if ( result === 2 /*>= 9 && result <= 12 */ ) {
      alert("PHP!");
      $(".finalresult").fadeOut();
      $("#PHP").fadeIn();


    } else if ( result === 3 /*>= 13*/ ) {
      alert("Ruby!");
      $(".finalresult").fadeOut();
      $("#Ruby").fadeIn();


    } else {
      alert("Please check an answer for each question")


    };

event.preventDefault();


  });
});

function tallyHelper(answer) {
  switch (answer) {
    case 0:
      csharpAnswer++;
      break;
    case 1:
      javaAnswer++;
      break;
    case 2:
      phpAnswer++;
      break;
    case 3:
      rubyAnswer++;
      break;
    default:
      console.log("ERROR UNKOWN ANSWER VALUE");
      break;
  }
}

function resultDeterminator(){
  if (csharpAnswer > javaAnswer){
    if(csharpAnswer > phpAnswer){
      if(csharpAnswer > rubyAnswer){
        return 0;
      }
    }
  }

  if (javaAnswer > csharpAnswer){
    if(javaAnswer > phpAnswer){
      if(javaAnswer > rubyAnswer){
        return 1;
      }
    }
  }

  if (phpAnswer > csharpAnswer){
    if(phpAnswer > javaAnswer){
      if(phpAnswer > rubyAnswer){
        return 2;
      }
    }
  }

  if (rubyAnswer > csharpAnswer){
    if(rubyAnswer > javaAnswer){
      if(rubyAnswer > phpAnswer){
        return 3;
      }
    }
  }

  return 4;
}
