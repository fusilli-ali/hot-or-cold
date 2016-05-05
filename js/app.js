//global variables
	var z;
	var previous;

//generate random number 
function random(){
	var x = Math.floor((Math.random() * 100) + 1);
	return x;
}

//is input a number b/w 1-100?
function validate(guess){
	var y = parseFloat(guess);
	if(isNaN (y)) {
		return false; 
	}
	else {
		return guess >= 1 && guess <= 100;
	}
}

//compare input and random number
function compare(guess) {
	var high = z + 20;
	var low = z - 20;
	if(guess==z) {
		return "OMG YOU GOT IT!"
	} 
	else {
		if(previous !== undefined) {
			var prevGuess = Math.abs(z - previous);
			var currentGuess = Math.abs(z - guess);
			if(prevGuess > currentGuess){
				return "WARMER!"
			}
			else {
				return "COLDER!"
			}
		}
		if(high >= guess && low <= guess) {
			return "WARM!"
		}
		else {
			return "COLD!"
		}
	}
}
//remember last guess and compare to current guess
//define previous guess >> treat first guess as unique
//if no prev guess, simply hot/cold (if previous is undefined)
//math library >> abs

//get and process user input
function process(e) {
	e.preventDefault();
	var input = $('#userGuess').val();
	if (validate(input)) {
		var a = compare(+input);
		$('#feedback').html(a);
		$('ul#guessList').prepend("<li>" + input + "</li>");
		$('#userGuess').val("");
		$('#count').html(function(i, val){return val*1+1});
		previous = input 
	}
	else {
		$('#feedback').html("I want a number between 1-100!");
	}
}

//new game
function newGame () {
	z = random();
	$('#feedback').html("Make your Guess!");
	$('ul#guessList').empty();
	$('#userGuess').val("");
	$('#count').html("0");
}
$(document).ready(function(){
	newGame();
	$('#guessButton').click(process);
	$('.new').click(newGame);
	/*--- Display information modal box ---*/
  	$(".what").click(function() {
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});

//MAY 4TH
//1) compare input to rand # >> hotter/colder ((vs. just hot cold))
//2) do not count OR list guesses that do not meet guidelines ((1-100... text... ))
//--- make "list each guess" a function
//--- add fucntion^^ to document.ready
//--- check against 

//1) generate random number
//2) take visitor's guess and analyze 
//-- confirm guess is a number b/w 1-100
//-- add guesses to ul#guessList
//-- how to compare to random number?
//------ if guess - number = 20 or more... 
//3) newGame() function 
//4) count number of times guest makes a guess
//5) show "warmer"//"colder"
//6) if guess not valid >> don't add to #guessList OR count in counter...