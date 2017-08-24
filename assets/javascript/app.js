// load initial screen
	$(document).ready(function(){

		function initialScreen(){
			startscreen="<button class='btn btn-primary btn-lg btn-block' id='start-button'  role='button'>Start Quiz</button>";
			$('.container-fluid').html(startscreen);
		};
		initialScreen();



		$('#start-button').click(function(){
			generateHTML();
		});

		$(document).on("click", ".answers", function(event){
			selectedAnswer = $(this).text();
			console.log(selectedAnswer);

			if(selectedAnswer===correctAnswerArray[questionCounter]) {
				alert("Correct");
			} else{
				alert("Wrong!");
			};
		});

	});


// functions

function generateHTML(){
	questionHTML="<div class='row'><div class='col-lg-8'><div class='panel panel-default'><div class='panel-heading'><div id='question'><h3 class='panel-title'>" 
		+ questionArray[questionCounter] + "</h3></div></div>"+
		"<div id='answersContainer'><div id='answer-A' class='answers'><p>"+ answersArray[questionCounter][0] +
		"</p></div><div id='answer-B'class='answers'><p>"+ answersArray[questionCounter][1] +
		"</p></div><div id='answer-C'class='answers'><p>"+ answersArray[questionCounter][2] +
		"</p></div><div id='answer-D'class='answers'><p>"+ answersArray[questionCounter][3] +
		"</p></div></div></div></div>" +
		"<div class='col-lg-4'><div class='panel panel-default'><div class='panel-heading'><h3 class='panel-title'>Score Box</h3></div><div id='time-tracker'><h3>Time Remaining</h3><div id='time-left'>10</div></div><div id='score-keeper'><h3>Score</h3><div id='score-number'>0</div>	</div></div></div></div>";
	$('.container-fluid').html(questionHTML);
};

function generateWin(){

};

function generateLoss(){

};

function generateLossDueToTimeOut(){

};

function startCountdown(){
	theClock = setInterval(twentySeconds,1000);
	if (theClock===0){
		generateLossDueToTimeOut();
		clearInterval(theClock);
	}

};

// variables
var questionArray = [
"Who performed the Super Bowl halftime show in 2014?",
"Which song holds the most weeks as Billboard #1?",
"Which county pop singer was born Eileen Regina Edwards?",
"What rock legend passed away in August 1977, 40 years ago?",
"Robyn Fenty is known professionally as who?",
"What is Adele's last name?",
"Cher won an Oscar for her perfomance in what movie?"];
var answersArray =[
["Cold Play", "Lady Gaga", "Bruno Mars", "Katy Perry"],
["One sweet day","I will always love you","My heart will go on","Hello"],
["Faith Hill","Shania Twain","Carrie Underwood","Reba"],
["Karen Carpentar","Elvis","Jimi Hendrix","Jim Morison"],
["Mya","Kesha","Rihanna","Robyn"],
["Adkins","Stevens","Queen","Smith"]
["Moonstruck","Die Another Day","Silkwood","Suspect"]
];
var imageArray = [];
var correctAnswerArray =["Bruno Mars","One sweet day","Shania Twain","Elvis","Rihanna","Adkins","Moonstruck"];
var startscreen;
var score;
var questionCounter = 0;
var timeCounter = 15;
var selectedAnswer ="";
var theClock;