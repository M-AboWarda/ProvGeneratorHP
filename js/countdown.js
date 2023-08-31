var examTimeMS = 1000*60*61;
var count;
const countdownContainer = document.getElementById("countdown-container");
const hrsContainer = document.getElementById("hrs");
const minsContainer = document.getElementById("mins");
const secsContainer = document.getElementById("secs");
var timeout;
function countdown(){
    
    function counter(){
var         secs = Math.floor(timeout / 1000),
            mins = Math.floor(secs / 60),
            hrs = Math.floor(mins / 60);
        
        mins %= 60
        secs %= 60
        timeout -= 1000
        
        hrsContainer.innerHTML = hrs.toFixed(0)+':';
        minsContainer.innerHTML = mins.toFixed(0)+':';
        secsContainer.innerHTML = secs.toFixed(0);
        if (hrs <= 0){
            hrsContainer.style.display='none';
        }else if (hrs > 0){
            hrsContainer.style.display='block';
        }
        if (mins <= 0 && hrs <= 0){
            minsContainer.style.display='none';
        }else if (mins > 0){
            minsContainer.style.display='block';
        }
        if (secs == -1){
            
            finishExamBtn();
        }
        
        //setTimeout(counter , 1000);
        
    }
     count = setInterval(counter , 1000);
    //counter()
}
