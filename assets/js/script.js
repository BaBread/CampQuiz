// Define all variables to point to HTML ID's





// Define all variables to point to the buttons of start quiz, go back, and clear high scores





// Define variables to point to questions, answers, timer



// Define base starting variables like score, time left, game over state



// Define an array to store high scores


// We will be using an array to shuffle questions


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
          a: '1. 1995', 
          choices: [{choice: '1. cd..'}, {choice: '2. ls ..'}, {choice: '3. cd updoot'}, {choice: '4. ^^'}]
        },
        { q: 'What does DOM stand for?', 
          a: '2. Document Object Model', 
          choices: [{choice: '1. Do Overnight Modules'}, {choice: '2. Document Object Model'}, {choice: '3. Divas Obviously Model'}, {choice: '4. Do Oo Mo'}]
        },
        { q: 'In jquery, what is the short-hand way to point our javascript code to an id in HTML?', 
          a: '1. $('')', 
          choices: [{choice: '1. $('')'}, {choice: '2. .getElementById()'}, {choice: '3. .refHTML'}, {choice: '4. .upperCase'}]
        },
      ];

    //   Since we are using the formatting of putting each div into "containers", we will show and hide them using CSS classes


    