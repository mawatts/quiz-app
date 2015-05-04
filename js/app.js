$(document).ready(function() {
 
 //global variables
 var numberCorrect = 0;
 var currentQuestion = 0;
 var numberQuestions = 0;
 var currentAnswer;
 var currentID;

 //Determine answer selected on click and store value
 $(".buttons").click(function(){
  currentID = $(this).attr('id');
  if ($(this).is('#option1')) {
   currentAnswer = $(this).val();
  }
  else if ($(this).is('#option2')) {
   currentAnswer = $(this).val();
  }
  else if ($(this).is('#option3')) {
   currentAnswer = $(this).val();
  }
  else {
   currentAnswer = $(this).val();
  }
 });

 $("#submit").click(function(){
  submitAnswer();
 });

 //Add next question and answers from array
 function nextQuestion() {
  if (currentQuestion < numberQuestions) {
   $("#question").text(questions[currentQuestion]);
   $("#option1").val(choices[currentQuestion][0]);
   $("#option2").val(choices[currentQuestion][1]);
   $("#option3").val(choices[currentQuestion][2]);
   $("#option4").val(choices[currentQuestion][3]);
  }
  else {
   $("#submit").css("display", "none");
   $("#reset").css("display", "inline");
  }
  currentID = "";
 }

 function submitAnswer() {
  //Submit answer, update score, and load next question on button click
  if (currentID == "option1" || currentID == "option2" || currentID == "option3" || currentID == "option4") {
   updateScore();
   nextQuestion();
  }
  else {
   swal({
    title: "",
    text: "You need to select an answer to be able to go to the next question!",
    type: "warning",
    confirmButtonText: "Close",
    confirmButtonColor: "#4FB954"
   });
  }
 }

 function updateScore() {
  var removeID = $(typeof currentID);
  if (currentAnswer == answers[currentQuestion]) {
   currentQuestion++;
   numberCorrect++;
   $(".quizStatus").text(numberCorrect + " out of " + numberQuestions + " Correct");
   $(".prevQuestion").text("Last Question: Correct");
  }
  else {
   currentQuestion++;
   $(".prevQuestion").text("Last Question: Incorrect");
  }

  if (currentQuestion < numberQuestions) {
   $(".qCounter").text(currentQuestion+1);
  }
  else {
   swal({
    title: "Final Score:",
    text: numberCorrect + " out of " + numberQuestions + " Correct",
    type: "success",
    confirmButtonColor: "#4FB954"
   });
  }
 }

 $("#reset").click(function(){
  numberCorrect = 0;
  currentQuestion = 0;
  $("#reset").css("display", "none");
  $("#submit").css("display", "inline");
  $(".prevQuestion").text("Last Question: N/A");
  $(".quizStatus").text("No Correct Answers");
  $(".qCounter").text(currentQuestion+1);
  nextQuestion();
 });

 var questions = new Array();
 var choices = new Array();
 var answers = new Array();

 //Questions, Choices, and Answers capture array.
 questions[0] = "Who is the famous antagonist from Nintendo’s Mario franchise?";
  choices[0] = new Array();
  choices[0][0] = "Princess Peach";
  choices[0][1] = "Doser";
  choices[0][2] = "Bowser";
  choices[0][3] = "Donkey Kong";
  answers[0] = choices[0][2];

 questions[1] = "In The Legend of Zelda, ‘Zelda’ was the name of who?";
  choices[1] = new Array();
  choices[1][0] = "The Hero";
  choices[1][1] = "The princess the Hero was in love with";
  choices[1][2] = "The Hero's Father";
  choices[1][3] = "The Sword the Hero carried";
  answers[1] = choices[1][1];

 questions[2] = "What is the fabled 13th human colony in Battlestar Galactica?";
  choices[2] = new Array();
  choices[2][0] = "Aquaria";
  choices[2][1] = "Virgon";
  choices[2][2] = "Gemenon";
  choices[2][3] = "Earth";
  answers[2] = choices[2][3];

 questions[3] = "What fraternity do the nerds join in the first Revenge of the Nerds film?";
  choices[3] = new Array();
  choices[3][0] = "Lambda Lambda Lambda";
  choices[3][1] = "Rho Rho Rho";
  choices[3][2] = "Beta Delta Gamma";
  choices[3][3] = "Alpha Beta";
  answers[3] = choices[3][0];

 questions[4] = "The TV series Firefly was a mashup of sci-fi and what other genre?";
  choices[4] = new Array();
  choices[4][0] = "Historical";
  choices[4][1] = "Crime";
  choices[4][2] = "Western";
  choices[4][3] = "Political";
  answers[4] = choices[4][2];

 questions[5] = "When is National Nerd Pride Day?";
  choices[5] = new Array();
  choices[5][0] = "May 25th";
  choices[5][1] = "January 19th";
  choices[5][2] = "November 11th";
  choices[5][3] = "February 14th";
  answers[5] = choices[5][0];

 questions[6] = "What planet does the Death Star destroy in Star Wars Episode IV: A New Hope?";
  choices[6] = new Array();
  choices[6][0] = "Coruscant";
  choices[6][1] = "Dantooine";
  choices[6][2] = "Alderaan";
  choices[6][3] = "Hoth";
  answers[6] = choices[6][2];

 questions[7] = "What is the cannibalistic group of humans called in Joss Whedon’s popular TV series Firefly?";
  choices[7] = new Array();
  choices[7][0] = "Walkers";
  choices[7][1] = "Reavers";
  choices[7][2] = "Daleks";
  choices[7][3] = "Goa'uld";
  answers[7] = choices[7][1];

 questions[8] = "In Final Fantasy VII, what is Cloud’s last name?";
  choices[8] = new Array();
  choices[8][0] = "Lockhart";
  choices[8][1] = "Fair";
  choices[8][2] = "Wallace";
  choices[8][3] = "Strife";
  answers[8] = choices[8][3];

 questions[9] = "What popular Marvel film from 2012 did Joss Whedon write and direct?";
  choices[9] = new Array();
  choices[9][0] = "The Avengers";
  choices[9][1] = "The Wolverine";
  choices[9][2] = "Ghost Rider: Spirit of Vengeance";
  choices[9][3] = "The Amazing Spider-Man";
  answers[9] = choices[9][0];

 numberQuestions = questions.length;
});