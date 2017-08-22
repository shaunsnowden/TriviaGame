// load initial screen
	$(document).ready(function(){

		function initialScreen(){
			startscreen="<button class='btn btn-primary btn-lg btn-block' id='start-button'  role='button'>Start Quiz</button>";
			$('.container-fluid').html(startscreen);
		};
		initialScreen();



		$('#start-button').click(function(){
			// preventDefault();
			generateHTML();
			alert("Button Clicked!");
			console.log("Button Clicked!");
		});

	});


// functions

function generateHTML(){
	questionHTML="<div class='row'><div class='col-lg-8'><div class='panel panel-default'><div class='panel-heading'><h3 class='panel-title'>Question Box</h3></div><div id='question'></div><div id='answer-A'></div><div id='answer-B'></div><div id='answer-C'></div><div id='answer-D'></div></div></div><div class='col-lg-4'><div class='panel panel-default'><div class='panel-heading'><h3 class='panel-title'>Score Box</h3></div><div id='time-tracker'><h3>Time Remaining</h3><div id='time-left'>10</div></div><div id='score-keeper'><h3>Score</h3><div id='score-number'>0</div>	</div></div></div></div>";
	$('.container-fluid').html(questionHTML);
};


// variables
var startscreen;