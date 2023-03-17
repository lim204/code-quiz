//  this grab the reference from html elements

var timeLeft = document.querySelector('#timeLeft');

// can be question instead
var heading = document.querySelector('#heading');
//question body
var content = document.querySelector('#content');
var startBtn = document.querySelector('#start');
var timer;

// list of all questions, choices, and answers
var questions = [
    {
      title: 'Commonly used data types DO NOT include:',
      choices: ['strings', 'booleans', 'alerts', 'numbers'],
      answer: 'alerts',
    },
    {
      title: 'The condition in an if / else statement is enclosed within ____.',
      choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
      answer: 'parentheses',
    },
    {
      title: 'Arrays in JavaScript can be used to store ____.',
      choices: [
        'numbers and strings',
        'other arrays',
        'booleans',
        'all of the above',
      ],
      answer: 'all of the above',
    },
    {
      title:
        'String values must be enclosed within ____ when being assigned to variables.',
      choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
      answer: 'quotes',
    },
    {
      title:
        'A very useful tool used during development and debugging for printing content to the debugger is:',
      choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
      answer: 'console.log',
    },
  ];

var timeLeft = 60;
var indexOfCurrentQuestion = 0;

//build an even listener that listen for a star buttom to be click
startBtn.addEventListener('click', function(event){
    event.preventDefault();

    timer = setInterval(function (){
     console.log('timer started');
    }, 1000);

    

});