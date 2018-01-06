var trivia = [
  {
    "question": "What is Andy's sister's name?",
    "guess" : ["Molly", "Emily", "Sally", "Bonnie"],
    "answer" : "Molly"
  },
  {
    "question" : "What year was the first Toy Story movie released?",
    "guess" : ["1992", "1995", "2000", "2005"],
    "answer" : "1995"
  },
  {
    "question" : "What country were the Woody’s Round up toys being sent to?",
    "guess" : ["China", "Germany", "Japan", "France"],
    "answer" : "Japan"
  },
  {
    "question" : "Who is Buzz Lightyear’s father?",
    "guess" : ["An Alien", "Zurg", "Mattel", "Andy"],
    "answer" : "Zurg"
  },
  {
    "question" : "What is the name of Andy’s dog?",
    "guess" : ["Buster", "Cooper", "Bullseye", "Doug"],
    "answer" : "Buster"
  },
  {
    "question" : "Lotso smells like what fruit?",
    "guess" : ["Cantaloupe", "Cherry", "Strawberry", "Grape"],
    "answer" : "Strawberry"
  },
  {
    "question" : "Which of the phrase does Woody say when his string is pulled?",
    "guess" : ["There’s a snake in my boot!", "You’ve got a friend in me", "Ride like the wind Bullseye!", "Sheriff Woody’s in town"],
    "answer" : "There’s a snake in my boot!"
  },
  {
    "question" : "What is the name of the daycare the toys are being donated to?",
    "guess" : ["Hillside", "Sunnyside", "Tri-State", "Sunny State"],
    "answer" : "Sunnyside"
  },
  {
    "question" : "What is the name of the toy store in Toy Story 2?",
    "guess" : ["Mattel SuperStore", "Play Planet", "Toy Planet", "Al’s Toy Barn"],
    "answer" : "Al’s Toy Barn"
  }
]

$(document).ready(function(){
  $("#start").click(function() {
    $("#game").css({"display": "inline"});
    $('#startPage').css({"display": "none"});
    triviaGame();
  });




});

function triviaGame() {
  // loads all questions
  for (var i=0; i < trivia.length; i++){
    var q = $("<div id='q" + i + "'>");
    $('#questions-here').append(q);
    $('#q'+ i).html("<h4>" + trivia[i].question + "</h4>");
    for (var j= 0; j< trivia[i].guess.length; j++){
      var guesses = $("<input type='radio' value='" + trivia[i].guess[j] + "' name='gues" + i +"'>" );
      $('#q' + i).append(guesses, trivia[i].guess[j]);
    }
  }
  $('#questions-here').append("<input id='done' type='submit' value='Done'>");
}

// function timer() {
//
// }
// $('#questions-here').submit(function() {
// var array = [];
//   var inputs = $('input :checked').val();
//   array.push(inputs)
// console.log(array);
//
// })
