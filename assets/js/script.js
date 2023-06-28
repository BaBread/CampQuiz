// Define all variables to point to HTML ID's
let startContainer = $('#starter-container');
let questionContainer = $('#question-container');
let endContainer = $('#end-container');
let highScoreContainer = $('#high-score-container');
let scoreContainer = $('#score-banner');
let correctEl = $('correct')
let wrongEl = $('wrong')


// Define all variables to point to the buttons of start quiz, go back, and clear high scores
let startBtn = $('#start-game');
let goBackBtn = $('#go-back');
let clearHighScoreBtn = $('#high-score-list');




// Define variables to point to questions, answers, timer
let questionsEl = $('#question');
let answersEl = $('#answer-buttons')


// Define base starting variables like score, time left, game over state
let timerEl = $('#timer');
let score = 0;
timerEl.text('0');
let gameOver="";
let timeLeft;


// Variables associated with highscores and define an array to store high scores
viewHighScoreEl = $('view-high-scores')
listHighScoreEl = $('high-score-list')
initialsFormEl = $('initials-form')
let highScores = [];

// We will be using an array to shuffle questions
let arrayShuffleQuestions = [];
let initQuestionIndex = 0;

// the questions will be stored in an array with each index holding the object of question, answer, and choices
let questions = [
    { q: 'Arrays in Javascript can be used to store __________.', 
          a: '4. all of the above', 
          choices: [{choice: '1. numbers'}, {choice: '2. booleans'}, {choice: '3. strings'}, {choice: '4. all of the above'}]
        },
        { q: 'What is jquery?', 
          a: '2. a js library used to help speed up coding', 
          choices: [{choice: '1. a query for j'}, {choice: '2. a js library used to help speed up coding'}, {choice: '3. a question about javascript'}, {choice: '4. a testing method for checking js code'}]
        },
        { q: 'In the code -- setinterval(time(),1000) -- what is time()?', 
          a: '1. callback function', 
          choices: [{choice: '1. callback function'}, {choice: '2. undefined'}, {choice: '3. variable'}, {choice: '4. all of the above'}]
        },
        { q: 'What syntax would call a function?', 
          a: '4. function()', 
          choices: [{choice: '1. var function'}, {choice: '2. function'}, {choice: '3. call function'}, {choice: '4. function()'}]
        },
        { q: 'in Git Bash, how do you go up one level in your file directory?', 
          a: '1. cd..', 
          choices: [{choice: '1. cd..'}, {choice: '2. ls ..'}, {choice: '3. cd updoot'}, {choice: '4. ^^'}]
        },
        { q: 'What does DOM stand for?', 
          a: '2. Document Object Model', 
          choices: [{choice: '1. Do Overnight Modules'}, {choice: '2. Document Object Model'}, {choice: '3. Divas Obviously Model'}, {choice: '4. Do Oo Mo'}]
        },
        { q: 'In jquery, what is the short-hand way to point our javascript code to an id in HTML?', 
          a: "1. $('')", 
          choices: [{choice: "1. $('')"}, {choice: '2. .getElementById()'}, {choice: '3. .refHTML'}, {choice: '4. .upperCase'}]
        },
      ];

    //   Since we are using the formatting of putting each div into "containers", we will show and hide them using CSS classes


// Set timer function for quiz
let quizStartTime = function() {
  timeLeft = 10;



let timerCountDown = setInterval(function () {
  timerEl.text(timeLeft);
  timeLeft--;

  if(gameOver) {
  clearInterval(timerCountDown)

  }

  if (timeLeft<0) {
    showScore()
    timerEl.text('0')
    clearInterval(timerCountDown)


  }

},1000)
}

// create function to start the game

let startGame = function() {
  startContainer.addClass('hide');
  startContainer.removeClass('show');
  questionContainer.addClass('show');
  questionContainer.removeClass('hide');
  arrayShuffleQuestions = questions.sort(() => Math.random()-0.5);
  quizStartTime()
  setQuestions()

}

let resetAnswers = function() {
  while (answersEl.children().length > 0) {
    answersEl.children().remove();

  }

}




let displayQuestions = function(index) {
  questionsEl.text(index.q);
  for (let i=0;i<index.choices.length;i++) {
    let answerBtn = $('<button></button>');
    answerBtn.text(index.choices[i].choice);
    answerBtn.addClass('btn');
    answerBtn.addClass('answerbtn');
    answerBtn.on('click',answerCheck)
    answersEl.append(answerBtn);


  }


}

let setQuestions = function() {
  resetAnswers()
  displayQuestions(arrayShuffleQuestions[initQuestionIndex])

}

// display for if question is right or wrong

let answerCorrect = function() {
  correctEl.addClass('banner');
  correctEl.removeClass('hide');
  wrongEl.removeClass('banner');
  wrongEl.addClass('show');


}

let answerWrong = function() {
  wrongEl.addClass('banner');
  wrongEl.removeClass('hide');
  correctEl.addClass('hide');
  correctEl.removeClass('banner');
}


let answerCheck = function(event) {
  let selectedanswer=event.target;
  if (arrayShuffleQuestions[initQuestionIndex].a===selectedanswer.text()){
    answerCorrect();
    score = score + 10;
  }
  else {
    answerWrong();
    score = score - 3;
    timeLeft = timeLeft - 5;
  }

  initQuestionIndex++
  if (initquestionInex < arrayShuffleQuestions.length ) {
    setQuestions();
  }

  else {
    gameover = "true";
    showScore();
  }


}


let showScore = function (){
  questionContainer.addClass('hide');
  questionContainer.removeClass('show');
  endContainer.addClass('show');
  endContainer.removeClass('hide');

  let displayScore = $(<p></p>);
  displayScore.text('Your score is ' + score + "!")
  $('score-banner').append(displayScore)

}




startBtn.on("click", startGame);