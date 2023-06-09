//  this grab the reference from html elements//
var timeLeftEl = document.querySelector('#timeLeft');
var headingEl = document.querySelector('#heading');
var contentEl = document.querySelector('#content');
var startBtnEl = document.querySelector('#start');
var timer;
var score=0;


// list of all questions, choices, answers//
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

function renderNextQuestion(){
    contentEl.innerHTML = ' ';
    var currentQuestion = questions[indexOfCurrentQuestion];
    headingEl.textContent = currentQuestion.title;
    
    for(var i=0; i<currentQuestion.choices.length; i++){
        var buttonEl = document.createElement('button');
        buttonEl.setAttribute('class','choice');
        buttonEl.textContent = currentQuestion.choices[i];
        contentEl.appendChild(buttonEl);
    }
}

//build an even listener that listen for a star buttom to be click//
startBtnEl.addEventListener('click', function(event){
    timeLeftEl.textContent='timeLeft';
    event.preventDefault();

    timer = setInterval(function (){
     console.log('timer started');

     timeLeft--;
     timeLeftEl.textContent = timeLeft;

     if (timeLeft === 0){
        //Todo: need a function that closes the quiz tell user whether the lost or won or score was 
        // build the rest of game over logic
        // page with result
        clearInterval(timer);
        endQuiz();
     }


    }, 1000);
    
   
    renderNextQuestion();

});
var buttonEl = document.createElement ('button')
var inputEl = document.createElement('input') 
function endQuiz(){
    contentEl.innerHTML= '';
    headingEl.textContent='Your score is: ' + score
   
    buttonEl.textContent='submit'

    buttonEl.setAttribute('id','scoreButton')
    contentEl.appendChild(inputEl)
    contentEl.appendChild(buttonEl)
}
// when the user clicks on a choice buttom
contentEl.addEventListener('click',function(event){
    event.preventDefault();
    var currentQuestion = questions[indexOfCurrentQuestion];

   
//build an if statement for element of the bottom that will match the condition

if ( event.target.matches('.choice')){
   if (event.target.textContent === currentQuestion.answer){
    score++
    console.log('Your score is'+score);
   }else{
    timeLeft -=10;
   }
   //increase the index of current question
    //renderNextQuestion();
   indexOfCurrentQuestion++
    if (indexOfCurrentQuestion >= questions.length){
        clearInterval(timer);
        //console.log('Quiz end');
        endQuiz();

    }
    else{
        renderNextQuestion();
    }
}

});
//create highScores array
var highScores=[];
var timeLeft=30;
var uiInputVal=" ";

function saveScore(event){
    event.preventDefault()
    var initials = inputEl.value
    console.log(initials)

    //put initals and score into an object
    var myScoreJson={
      "initial":uiInputVal,
      "score":timeLeft
    }
    
    //.push object into highscores array
    highScores.push(myScoreJson);

    //localStorage.setItem("My high scores", highScores)
    localStorage.setItem(initials, score)

    //display all highsscores in local storage
    localStorage.setItem("my-highh-scores",JSON.stringify(highScores));
    
    var storeValue=
    JSON.parse(localStorage.getItem("my-high-scores"))
    console.log(storeValue[0].score);

}
buttonEl.addEventListener('click',saveScore);
