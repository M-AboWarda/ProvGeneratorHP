const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const infoContainer = document.getElementById("info-container");
const submitButton = document.getElementById("submit");
const restartButton = document.getElementById("restart");
let limite = 9;

function buildQuiz() {
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
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}"> ${letter})
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

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
        `<div class="answers"> ${answers.join("")} </div>`
      );
        
        if (questionNumber=== limite){breakloop1()}
    });
    
    // finally break forEach() loop and combine our output list into one string of HTML and put it on the page
    function breakloop1(){
    quizContainer.innerHTML += output.join("")
    }
    
  }

  function showResults() {
      
      
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");
      
    // keep track of user's answers
    let numCorrect = 0;

      
      const mistakes = [];
    // for each question...
    questions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
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
          mistakes.push(`<div class="answer wrong-answer">your answer is : ${userAnswer}) ${currentQuestion.answers[userAnswer]}</div>`);
          }
          //write a massge when no answe selected
          else if (userAnswer == null){
          mistakes.push(`<div class="answer wrong-answer">you did not answer this question</div>`);
          }
          //write the right answer
          mistakes.push(`<div class="ques-R-answer">right answer is : ${currentQuestion.correctAnswer}) ${currentQuestion.answers[currentQuestion.correctAnswer]}</div>`);
          
          if (currentQuestion.explanation){
          mistakes.push(`<div class="ques-expanation">explanation : ${currentQuestion.explanation}</div>`);
          }
          
      }
        //correct all shown questions on screen
        if (questionNumber === limite){
            breakLoop2()
        }
        
    });
      
      function breakLoop2(){
    // show number of correct answers out of total corrected questions
    resultsContainer.innerHTML += `<div id="score">${numCorrect} out of ${limite+1}</div>`;
      
      //show user mistakes
    resultsContainer.innerHTML += mistakes.join("");
          
          //stop the counter //removed!!!
          
          

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
