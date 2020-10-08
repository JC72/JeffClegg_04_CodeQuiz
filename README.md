# JeffClegg_04_CodingQuiz

This project was designed as a homework assignment for MSU's coding bootcamp. 

This application was created to emphasize the use of HTML, CSS & Javascript and how to use Javascript to manipulate the HTML pages.

This project has been deployed to my Personal GitHub Page. To get this project up and running, you can follow the deployment links that I have included in the Link Section below.

## Links

* [GitHub Repository](https://github.com/JC72/JeffClegg_04_CodeQuiz)
* [Deployed GitHub IO](https://jc72.github.io/JeffClegg_04_CodeQuiz/) 

### Project Overview
* HTML and CSS and Javascript documents create a quiz with nine questions (right now!!)
* This project emphasizes the use of using Javascript to make dynamic changes to an HMTL document

### This assignment contains the following features: 
* A Start Page with two buttons
    * This will allow the user to chose weather to view previous scores or if they would like to start the quiz.

    ![Start Page](https://github.com/JC72/JeffClegg_04_CodeQuiz/blob/main/Assets/images/ScreenShots/StartPage.png)

* A Inner HTML page
    * This page is used for establishing the question to be answered and the 4 multiple choice answers
    * The answers have eventlisteners attached to allow the user to choose

    ![First Page](https://github.com/JC72/JeffClegg_04_CodeQuiz/blob/main/Assets/images/ScreenShots/FirstQuestion.png)

    ![Second Page](https://github.com/JC72/JeffClegg_04_CodeQuiz/blob/main/Assets/images/ScreenShots/SecondQuestion.png)

* A Final Inner HTML Page
    * This page is where the user is allowed to enter name or intials
    * Shows users score and the number of questions correct
    * Allows user to choose to Submit the score or try quiz again

    ![Final Page](https://github.com/JC72/JeffClegg_04_CodeQuiz/blob/main/Assets/images/ScreenShots/EndPage.png)

* A HighScore Page
    * This area will display the users scores
    * The two buttons will also allow the users to start the quiz again or clear the scores

    ![High Scores](https://github.com/JC72/JeffClegg_04_CodeQuiz/blob/main/Assets/images/ScreenShots/HighScore.png)

### Project Requirements: 

* The user will be prompted to choose to view highscores or start a quiz
* The user if starts quiz for: 
    * Time begins and the first question is shown
    * User then can click one of the answers and moves to the next question where it shows if user was correct/incorrect with the correct answer to the previous question.
    * If an incorrect answer is choosen then a penalty of 5 seconds will be removed from the timer.
* The application will conclude when either the timer hit zero or when the user completes the last question.     
* Once concluded the user can enter intials and submit for the highscore page or return to try the questions again.


### This project has several scripted features of:
* A timer 
* Event listener (onclick) to allow the user to choose from different options or select an answer.
* Functions that clear the inner HTML and generates a unfiltered list and list items.
* Generate a inputbox and allow the users to enter initals.
* A for loop will loop through the enter prompt until it reaches the length entered by user. 
* A variable that joins the value to the intials and appends to a list item.
* Getting values from localstorage and pulling it back the appending it to a unfilterd list. 
* The string value then populates into the text area for the user by returning the value to the writepassword function.

### To Execute File:
> Open in browser by way of Deployed IO link

### Contains: 
* Two HTML Pages
    * Index.html 
    * scores.html
        * Contains basic items as places holeder for itmes that will be generated by javascript
* Two CSS Pages
    * Styles.css
        * Contains styling for html user input features
        * Contains media queries
    * Reset.css
        * Resets all styling prior to using the styles.css
* Three Javascript Pages
        * Contains: 
        * Variables, including arrays and value placeholders
        * Event listeners
        * Timer Function
        * Several if/else if statements
        * One function outside of first event listener
        * For Next Loops
        * calling functions from other pages

## Creators:

* **Jeff Clegg** - [Git Hub Profile](https://github.com/JC72)
* MSU BootCamp