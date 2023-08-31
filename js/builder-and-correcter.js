const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const infoContainer = document.getElementById("info-container");
const submitButton = document.getElementById("submit");
const doneButton = document.getElementById("done");
let limit = 9;
let times = 1;

function buildQuiz(questions) {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    questions.forEach((currentQuestion, questionNumber) => {
        
        
      // we'll want to store the list of answer choices
      const answers = [];
        
      // and for each available answer...
      for (letter in currentQuestion.answers) {
          
        // ...add an HTML radio button
        answers.push(
          `<label id='answer-boxes${times}${questionNumber}${answers.length+1}' class='answer-box-containers label${times}${questionNumber}'>
            <input id='input${times}${questionNumber}${answers.length+1}' onclick='checkMe(${questionNumber},${times})' type="radio" name="question${times}${questionNumber}" value="${letter}"> ${letter})
            ${currentQuestion.answers[letter]}
          </label>`
        );
          
      }
        
        //make the answer with = 100% / (option quantity)
        var answerContainerLength = Object.size(currentQuestion.answers);
        createCSSSelector (`.label${times}${questionNumber}`, `width:${(100/answerContainerLength)-2}%`)
        
        // add this question and its answers to the output
        
      output.push(
        `<div class="question">${questionNumber+1}. ${currentQuestion.question} </div>`);
        
        
      if (currentQuestion.img){
          output.push(`<img class=imgs src="${currentQuestion.img}">`);
      };
        
        
      if (currentQuestion.quesDescription){
          output.push( `<div class=description> ${currentQuestion.quesDescription}</div>`
      )};
        
        output.push(
        `<div class="answers answers${times}"> ${answers.join("")} </div>`
      );
        
        if (questionNumber === limit){
            times++;
            breakloop1();
            
        }
        
    });
    
    // finally break forEach() loop and combine our output list into one string of HTML and put it on the page
    function breakloop1(){
        quizContainer.innerHTML += output.join("");
        
    }
    
  }


let i = 1;
  function showResults(questions) {
      
      
      
        
      
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(`.answers${i}`);
      
      // keep track of user's answers
      let numCorrect = 0;
      
      // keep track of user's mistakes
      const mistakes = [];
      
      
    // for each question...
    questions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${i}${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
          
        // add to the number of correct answers
        numCorrect++;
          
          
          
      } else {
        // if answer is wrong or blank
          
          
          
          
          //write wrong questions
          mistakes.push(`<div class="question">${questionNumber+1}. ${currentQuestion.question} </div>`);
          
          //write user answer if selected
          if (userAnswer){
          mistakes.push(`<div class="answer wrong-answer">Ditt svar är : ${userAnswer}) ${currentQuestion.answers[userAnswer]}</div>`);
          }
          //write a massge when no answe selected
          else if (userAnswer == null){
          mistakes.push(`<div class="answer wrong-answer">Du hade ingen svar!</div>`);
          }
          //write the right answer
          mistakes.push(`<div class="ques-R-answer">Rätt svar är : ${currentQuestion.correctAnswer}) ${currentQuestion.answers[currentQuestion.correctAnswer]}</div>`);
          
          if (currentQuestion.explanation){
          mistakes.push(`<div class="ques-expanation">Förklaring : ${currentQuestion.explanation}</div>`);
          }
          
      }
        //correct all shown questions on screen
        if (questionNumber === limit){
            i++;
            breakLoop2();
        }
    
    });
      
    function breakLoop2(){
        
        //show number of correct answers out of total corrected questions
        resultsContainer.innerHTML += `<div id="score"><div id="score-string">Du fick</div><div>${numCorrect} av ${limit+1}</div></div>`;
        
        //show user mistakes
        resultsContainer.innerHTML += mistakes.join("");
      }
      
  }



// shuffle() method to shuffle my array
Array.prototype.shuffle = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
    return this;
}


// size/length of an object
Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};



//Style creater- createCSSSelector (`#my-id || .my-class`, `width:10px`)
function createCSSSelector (selector, style) {

    var styleSheet;

    var styleSheetElement = document.createElement('style');
    styleSheetElement.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(styleSheetElement);

    styleSheetElement.innerHTML = selector+'{'+style+'}';
}






//change the bg color of selected radio button containers
function checkMe(quesNum,questionArr){
    //count 
    var inputs = document.querySelectorAll(`.label${questionArr}${quesNum}`).length; 
    for (var i = 0; i < inputs; i++){
        
        var answerBox = document.getElementById(`answer-boxes${questionArr}${quesNum}${i+1}`);
        
        
        //style for all boxes accept the checked one
        answerBox.style.background = 'none';
        answerBox.style.color = '#333';
        answerBox.style.borderTop = '1px solid var(--border-dark-gray)';
        answerBox.style.borderBottom = 'none';
        
        
        
        
        var radios = document.getElementById(`input${questionArr}${quesNum}${i+1}`);
        
        
        if (radios.checked){
            
            
            //style for checked radio buttons containers
            answerBox.style.background = cssVar('--checked-box-gradient');
            answerBox.style.color = '#fff';
            answerBox.style.borderTop = 'none';
            answerBox.style.borderBottom = '3px solid #444';
            
        }
    }
    
}
