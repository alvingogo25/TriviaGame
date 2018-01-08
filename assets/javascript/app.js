var trivia = [
  {
    "question": "What is Andy's sister's name?",
    "guess" : ["Molly", "Emily", "Sally", "Bonnie"],
    "answer" : "Molly",
    "image" : "molly.jpg"
  },
  {
    "question" : "What year was the first Toy Story movie released?",
    "guess" : ["1992", "1995", "2000", "2005"],
    "answer" : "1995",
    "image" : "95.png"
  },
  {
    "question" : "What country were the Woody’s Round up toys being sent to?",
    "guess" : ["China", "Germany", "Japan", "France"],
    "answer" : "Japan",
    "image" : "far_east.png"
  },
  {
    "question" : "Who is Buzz Lightyear’s father?",
    "guess" : ["An Alien", "Zurg", "Mattel", "Andy"],
    "answer" : "Zurg",
    "image" : "zurg.jpg"
  },
  {
    "question" : "What is the name of Andy’s dog?",
    "guess" : ["Buster", "Cooper", "Bullseye", "Doug"],
    "answer" : "Buster",
    "image" : "buster.jpg"
  },
  {
    "question" : "Lotso smells like what fruit?",
    "guess" : ["Cantaloupe", "Cherry", "Strawberry", "Grape"],
    "answer" : "Strawberry",
    "image" : "Lotso.jpg"
  },
  {
    "question" : "Which of the phrase does Woody say when his string is pulled?",
    "guess" : ["There’s a snake in my boot!", "You’ve got a friend in me", "Ride like the wind Bullseye!", "Sheriff Woody’s in town"],
    "answer" : "There’s a snake in my boot!",
    "image" : "pull.png"
  },
  {
    "question" : "What is the name of the daycare the toys are being donated to?",
    "guess" : ["Hillside", "Sunnyside", "Tri-County", "Sunny State"],
    "answer" : "Sunnyside",
    "image" : "Sunnyside.jpg"
  },
  {
    "question" : "What is the name of the toy store in Toy Story 2?",
    "guess" : ["Mattel SuperStore", "Play Planet", "Toy Planet", "Al’s Toy Barn"],
    "answer" : "Al’s Toy Barn",
    "image" : "Als.jpg"
  },
  {
    "question" : "What is the military unit Buzz Lightyear is part of?",
    "guess" : ["Planet Protector Corps", "Space Heroes", "Space Ranger Corps", "LGM"],
    "answer" : "Space Ranger Corps",
    "image" : "buzz.gif"
  }

]

var questionCount = 0;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var time = 10;
var tmr;

$(document).ready(function(){
  $("#startPage").click(function() {
    // $("#game").css({"display": "inline"});
    $('#startPage').css({"display": "none"});
    loadQuestion();
  });
});

function timer() {
  time--;
  if (time >= 0){
    $('#timer').text("Time Remaining: " + time)
  }
  if (time === 0) {
    $('#timer').text("Time is up!")
    checkAnswer();
  }
}

function loadQuestion () {
  time = 10;
  tmr = setInterval(timer,1000);
  $('#timer').text("Time Remaining: " + time);
  // load one question with guesses
  $('#result').empty();
  $('#questions-here').css('display','inline')
  var q = $("<div id='qstn'>");
  $('#questions-here').append(q);
  $('#qstn').html("<h4>" + trivia[questionCount].question + "</h4>");
  for (var j= 0; j< trivia[questionCount].guess.length; j++){
    var guesses = $("<p id='" + j + "'>");
    $('#qstn').append(guesses);
    $('#'+j).text(trivia[questionCount].guess[j]);
    $('#'+j).attr('value', trivia[questionCount].guess[j]);

    // correct answer input will have flag true
    if (trivia[questionCount].guess[j] === trivia[questionCount].answer){
      $('#'+j).attr("data", "answer");
      $('#'+j).addClass('rightOne');
    }
    else {
      $('#'+j).attr('data', "wrong");
    }
  }

  // console.log(questionCount);
  $('p').hover(function() {
    $(this).toggleClass('box');
  })
  $('p').click(checkAnswer);
}

// checks if user guess is right or wrong and displays appropriate response
function checkAnswer() {
  clearInterval(tmr);

  if (questionCount < trivia.length){
    // checks inputs for data attribute true
    var check = $(this).attr('data');
    // updates correct/incorrect counter
    $('#questions-here').css('display','none');
    if (check === "answer") {
      correct++;
      $('#result').text("You're correct!")
    }
    else {
      if (check === "wrong"){
        incorrect++;
      }
      if (!check){
        unanswered++;
      }
      $('#result').text("The correct answer is: " + trivia[questionCount-1].answer)

    };
    questionCount++;
    // displays image with answer
    var img = trivia[questionCount-1].image;
    var resultImg = $('<img>');
    $('#result').append(resultImg);
    resultImg.attr('src', "assets/images/" + img);
    resultImg.addClass('imgsize');
  }
  if (questionCount > trivia.length){
    end();
  }
  else {
    // console.log(check, correct, incorrect);
    console.log(questionCount);
    // loads next question after showing answers
    setTimeout("$('#questions-here').empty()", 2000);
    setTimeout(loadQuestion, 2000);
  }
};

// shows game results
function end () {
  $('#timer').empty();
  $('#questions-here').empty();
  var pc = $('<p id="crct">');
  var pi = $("<p id='incrct'>");
  var pu = $("<p id='none'>")
  pc.text("Correct: " + correct);
  pi.text("Incorrect: " + incorrect);
  pu.text("Unanswered: " + unanswered);
  $('#result').append(pc, pi, pu);
  $('#result').append('<div id="playAgain">Play Again?');
  $('#playAgain').addClass('box');
  $('#playAgain').click(reset);
}

function reset () {
  questionCount = 0;
  correct = 0;
  incorrect = 0;
  loadQuestion();
}
