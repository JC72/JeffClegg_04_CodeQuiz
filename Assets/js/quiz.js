//Jeff Clegg MSU Bootcamp Code Quiz (Homework Assignment #4)
//Javascript code for index.html page & quiz functionality
//This code starts the timer, and then creates the 'All Done' page

//Declaring Variables
var viewScores = document.querySelector("#viewScores");
var score = 0;

//Event Listener to return to the start of the quiz
viewScores.addEventListener("click", function() {

    window.location.href= "./scores.html";
});

// timeUp will append last page to allow for the user to submit score and initials
function timesUp() {
    questionsDiv.innerHTML = "";
    currentTime.innerHTML = "";
    clearInterval(duration);

    // Heading for the 'All Done' page
    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "All Done!";

    questionsDiv.appendChild(createH1);

// this generates the final score and creates and append score to a paragraph element
    if (duration >= 0) {
        var percent = (score/questions.length)*100;
        var timeRemaining = Math.round(percent, 1);
        var createP2 = document.createElement("p");
        var totalPt = timeRemaining + duration
        clearInterval(holdInterval);
        createP2.textContent = "Your final score is:" + " "+ totalPt;

        questionsDiv.appendChild(createP2);
    }


//Folloing set of code creates a Label, a input box, and 2 buttons


    // Label for name input area
    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter your name: ";

    questionsDiv.appendChild(createLabel);

    // input field for initials
    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "name");
    createInput.textContent = "";

    questionsDiv.appendChild(createInput);

    // creates a submit button
    var createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "Submit");
    createSubmit.textContent = "Submit";

    questionsDiv.appendChild(createSubmit);


    // Event listener to capture initials and local storage for initials and score
    createSubmit.addEventListener("click", function () {
        var initials = createInput.value;

        if (initials === null) {
            alert("You must Enter Name or Initials");
            console.log("No value entered!");

        } else {
            var finalScore = {
                initials: initials,
                score: timeRemaining
            };
        
            //console.log(finalScore);
            var scoresList = localStorage.getItem("scoresList");
            if (scoresList === null) {
                scoresList = [];
            } else {
                scoresList = JSON.parse(scoresList);
            }
            scoresList.push(finalScore);
            var newScore = JSON.stringify(scoresList);
            localStorage.setItem("scoresList", newScore);
            // Travels to final page
            window.location.replace("./scores.html");
        }
    });

    // Generates a Try again button
    var createTryAgain = document.createElement("button");
    createTryAgain.setAttribute("type", "tryAgain");
    createTryAgain.setAttribute("id", "TryAgain");
    createTryAgain.textContent = "Try Again";

    questionsDiv.appendChild(createTryAgain);

    //calls the function onclick and sets the duration variable to send.
    createTryAgain.addEventListener("click", function()  {
    

    window.location.href = "./index.html";
});

}