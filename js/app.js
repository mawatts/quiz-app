$(document).ready(function() {
 
 //global variables
 var numberCorrect = 0;
 var currentQuestion = 0;
 var numberQuestions = 0;
 var currentAnswer;

 //Determine answer selected on click and store value
 $(".buttons").click(function(){
  if ($(this).is('#option1')) {
   currentAnswer = $(this).val();
   alert(currentAnswer);
  }
  else if ($(this).is('#option2')) {
   currentAnswer = $(this).val();
   alert(currentAnswer);
  }
  else if ($(this).is('#option3')) {
   currentAnswer = $(this).val();
   alert(currentAnswer);
  }
  else {
   currentAnswer = $(this).val();
   alert(currentAnswer);
  }
 });
   
 //Submit answer, update score, and load next question on button click
 $("#submit").click(function(){
  currentQuestion++;
  nextQuestion();
  updateScore();
 });

 function nextQuestion() {
  if (currentQuestion < numberQuestions) {
   $("#question").text(questions[currentQuestion]);
   $("#option1").val(choices[currentQuestion][0]);
   $("#option2").val(choices[currentQuestion][1]);
   $("#option3").val(choices[currentQuestion][2]);
   $("#option4").val(choices[currentQuestion][3]);
  }
 }

 function submitAnswer() {

 }

 function updateScore() {

 }

 var questions = new Array();
 var choices = new Array();
 var answers = new Array();

 //Questions, Choices, and Answers capture array.

 questions[0] = "1) JavaScript is ...";
 choices[0] = new Array();
 choices[0][0] = "the same as Java";
 choices[0][1] = "kind of like Java";
 choices[0][2] = "different than Java";
 choices[0][3] = "ther written part of Java";
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