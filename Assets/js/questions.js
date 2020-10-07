//Jeff Clegg MSU Bootcamp Code Quiz (Homework Assignment #4)
//Javascript code for question portion of index.html

// Var with array and object for questions 
var questions = [{
    title: "Inside which HTML element do we put the JavaScript?",
    choices: ["<js>", "<javascript>", "<scripting>", "<script>"],
    answer: "<script>"
},

{
    title: 'What is the correct syntax for referring to an external script called "xxx.js"?',
    choices: ['<script href=""xxx.js">', '<script name = ""xxx.js"">', '<script src = "xxx.js">', '<script "xxx.js">'],
    answer: '<script src = "xxx.js">'
},

{
    title: "Arrays in Javascript can be used to store ____.",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answer: "all of the above"
},

{
    title: "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parenthesis"],
    answer: "quotes"
},

{
    title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
    choices: ["Javascript", "terminal / bash", "for loops", "console log"],
    answer: "console log"
},

{
    title: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
    choices: ["if i <> 5", "if i=!5 then", "if(i<>5)", "if(i!=5)"],
    answer: "if(i!=5)"

},

{
    title: "Which event occurs when the user clicks on a an HTML element?",
    choices: ["onmouseover", "onchange", "onmouseclick", "onclick"],
    answer: "onclick"

},

{
    title: "How do you find the number woth the highest value of x and y?",
    choices: ["Math.max(x,y)", "top(x,y)", "Math.ceil(x,y)", "ceil(x,y)"],
    answer: "Math.max(x,y)"

},

{
    title: "How do you round the number 7.25, to the nearest integer",
    choices: ["Math.rnd(7.25)", "round(7.25)", "rnd(7.25)", "Math.round(7.25)"],
    answer: "Math.round(7.25)"

},


];