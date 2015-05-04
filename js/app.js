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

 questions[0] = "1) JavaScript is ...";
 choices[0] = new Array();
 choices[0][0] = "the same as Java";
 choices[0][1] = "kind of like Java";
 choices[0][2] = "different than Java";
 choices[0][3] = "the written part of Java";
 answers[0] = choices[0][2];

 questions[1] = "2) JavaScript is ...";
 choices[1] = new Array();
 choices[1][0] = "subjective";
 choices[1][1] = "objective";
 choices[1][2] = "evil";
 choices[1][3] = "object based";
 answers[1] = choices[1][3];

 questions[2] = "3) To comment out a line in JavaScript ...";
 choices[2] = new Array();
 choices[2][0] = "Precede it with two forward slashes, i.e. '//'";
 choices[2][1] = "Precede it with an asterisk and a forward slash, i.e. '*/'";
 choices[2][2] = "Precede it with an asterisk, i.e. '*'";
 choices[2][3] = "Precede it with a forward slash and an asterisk, i.e. '/*'";
 answers[2] = choices[2][0];

 questions[3] = "4) JavaScript can only run on Windows";
 choices[3] = new Array();
 choices[3][0] = "True";
 choices[3][1] = "False";
 answers[3] = choices[3][1];

 questions[4] = "5) Semicolons are optional at the end of a JavaScript statement.";
 choices[4] = new Array();
 choices[4][0] = "True";
 choices[4][1] = "False";
 answers[4] = choices[4][0];

 questions[5] = "6) The four basic data types are:";
 choices[5] = new Array();
 choices[5][0] = "strings, numbers, BooBoos, and nulls";
 choices[5][1] = "strings, text, Booleans, and nulls";
 choices[5][2] = "strings, numbers, Booleans, and nulls";
 choices[5][3] = "strings, numbers, Booleans, and zeros";
 answers[5] = choices[5][2];

 numberQuestions = questions.length;
});