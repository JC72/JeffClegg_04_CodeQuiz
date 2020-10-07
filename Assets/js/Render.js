//Jeff Clegg MSU Bootcamp Code Quiz (Homework Assignment #4)
//Javascript code for index.innerhtml page functionality
//this take the info from the questions.js file and generates a innerhtml page via the index.html
//then displays it on the page and the user chooses from four multiple choice answers.

var ulCreate = document.createElement("ul");
var questionPackage = 0;
var header3 = document.createElement("h3");
var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTimer");
var penalty = 10
var holdInterval = 0;
var mins = 1.5
var duration = 60 * mins;

//calls the function onclick and sets the duration variable to send.
timer.addEventListener("click", function() {
	// Length of timer variable in seconds
	startTimer(duration);
});
    
// function to create timer.  Found the solution to fix my timer to minutes
//and seconds on-line. Then manipulated it to match what I wanted it to do
function startTimer() {
        
    // We are checking zero because its originally set to zero
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            duration--;
            
            var minutes = Math.floor(duration %3600 /60);
            var seconds = Math.floor(duration %3600 % 60);
            localStorage. setItem("duration", duration);
            currentTime.textContent = "Time Remaining:" + " " + minutes + "m " + seconds +"s";

            if (duration <= 0) {
                clearInterval(holdInterval);
                timesUp();
                currentTime.textContent = "You've run out of time!";
            }
        }, 1000);
    }
    generate(questionPackage);
}

// Generate questions and choices to page: 
function generate(questionPackage) {
	// Clears all existing data 
	questionsDiv.innerHTML = "";
	ulCreate.innerHTML = "";
	header3.innerHTML = "";

	// For loops to loop through all info in array
	for (var i = 0; i < questions.length; i++) {
		// Appends question to header 3 of questionDiv
		var userQuestion = questions[questionPackage].title;
		var userChoices = questions[questionPackage].choices;
		header3.textContent = userQuestion;
		questionsDiv.appendChild(header3);
	}
	// Creates question choices
	userChoices.forEach(function(newItem) {
		var listItem = document.createElement("li");
		listItem.textContent = newItem;
		questionsDiv.appendChild(ulCreate);
		ulCreate.appendChild(listItem);
		listItem.addEventListener("click", (compare));
	})
}
// Event to compare choices with answer
function compare(event) {
	var element = event.target;

	if (element.matches("li")) {

		var createDiv = document.createElement("div");
		createDiv.setAttribute("id", "createDiv");
		// Correct condition 
		if (element.textContent == questions[questionPackage].answer) {
			score++;
			createDiv.textContent = "Correct! The answer is:  " + questions[questionPackage].answer;
			// incorrect condition 
		} else {
            duration = duration - penalty;
			createDiv.textContent = "Wrong! The correct answer is:  " + " " + questions[questionPackage].answer;
		}

	}
	// Question Index determines which number of question the user is on
	questionPackage++;

	if (questionPackage >= questions.length) {
		//  timesUp will append last page with user stats
		timesUp();
		createDiv.textContent = "End of quiz!" + " " + "You got  " + score + "/" + questions.length + " Correct!";
	} else {
		generate(questionPackage);
	}
	questionsDiv.appendChild(createDiv);

}