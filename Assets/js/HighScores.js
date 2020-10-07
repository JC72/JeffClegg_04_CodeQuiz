//Jeff Clegg MSU Bootcamp Code Quiz (Homework Assignment #4)
//Javascript code for scores.html page

//Declaring Variables for functionality
var clearScores = document.querySelector("#clearScores");
var goBack = document.querySelector("#goBack");
var highScores = document.querySelector("#hs");

//Event Listener for the Clear Scores button to erase the scores
clearScores.addEventListener("click", function() {
	//this clears the localstorage of the web page
	localStorage.clear();

	//this reloads the current URL
	location.reload();
});

//Event Listener to return to the start of the quiz
goBack.addEventListener("click", function() {

	window.location.href = "./index.html";
});

//This portion will retrieve all highscores from local storage
var scoresList = localStorage.getItem("scoresList");

scoresList = JSON.parse(scoresList);

//This portion is a if statement that checks it the local storage variable is not empty
if (scoresList !== null) {

	// For Loop that will create the list items and append them to unfiltered list 'highScores'
	for (var i = 0; i < scoresList.length; i++) {

		var genLi = document.createElement("li");
		// var inputText1 = style="text-align: left;">;
		// var inputText2 = <span style="float: right;">;
		// var inputText3 = </span>;
		//genLi.style = text-align: screenLeft;
		genLi.textContent = scoresList[i].initials + " " + scoresList[i].score;
		highScores.appendChild(genLi);

	}
}