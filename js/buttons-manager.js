//----------setting-variables
const settingsContainer = document.querySelector(".settings");
const shuffleCheckbox = 'input[name=shuffle]:checked';
const limitInput = document.querySelector('#questions-limit');
//----------END-setting-variables


function startExamBtn(){
    
    //--user--chose the questions limit
    if (limitInput.value){
        if (limitInput.value === 'string'){return false}
        if (limitInput.value < 5){
            limit = 4;
        } else if(limitInput.value < 20 && limitInput.value >= 5){
            limit = limitInput.value -1;
        } else if(limitInput.value >= 20){
            limit = 19;
        }
    }
    
    //--user--shuffle the questions if checkbox checked
    if(settingsContainer.querySelector(shuffleCheckbox)){
    // shuffle exam questions then display it
        ord.shuffle();
    }
    
    quizContainer.style.display = "block";//show the quiz container
    infoContainer.style.display = 'none';//hide information container
    submitButton.style.display = 'block';//show finishExamBtn()
    countdownContainer.style.display = 'block';//show the counter
    
    //build the quiz
    //buildQuiz(ord);//note to me : do a variable when finish exam btn clkd like .this in objects -EX.- in for loop maybe and global variable
    buildQuiz(xyz);//note to me : do a variable when finish exam btn clkd like .this in objects -EX.- in for loop maybe and global variable
    buildQuiz(ord);
    
    //scroll to the bottom of the page
    moveToBottom();
    
    //scroll to top of the page
    scrollToTop();
    
    //start the counter
    countdown();
    timeout = examTimeMS;
    
    hrsContainer.innerHTML = 'h:';
    minsContainer.innerHTML = 'mm:';
    secsContainer.innerHTML = 'ss';
    
    
}





function finishExamBtn(){
    
    //scroll to top of the page
    scrollToTop();
    
    quizContainer.style.display = "none";//hide question container
    submitButton.style.display = "none";//hide finishExamBtn()
    doneButton.style.display = "block";//show doneExamBtn()
    
    //stop the counter
    clearInterval(count);
    
    countdownContainer.style.display = 'none';//hide the counter
    
    //show resulte and mistakes
    if(i == 2){
        showResults(xyz);
    }
    if(i == 1){
        showResults(ord);
    }
    
    
    
    //move to the bottom of the page
    moveToBottom();
    
}





function doneExamBtn(){
    
    
    
    //scroll to top of the page
    scrollToTop();
    
    //Empty unnecessarily sections and hide this button
    quizContainer.innerHTML = '';
    doneButton.style.display = "none";
    resultsContainer.innerHTML = '';
    
    
    infoContainer.style.display = 'block'; 
    //move to the bottom of the page
    moveToBottom();
    
    
    
}

window.onload =function(){
    
    //shuffle questions
    ord.shuffle();
    
    //stop the animation for info container after 7 s
    setTimeout(function(){infoContainer.style.animation='none'},7000)
}

