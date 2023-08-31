//scroll to top
function scrollToTop(){
    var scrollBar = document.documentElement.scrollTop || document.body.scrollTop;
    
    if (scrollBar > 2000) {
    window.requestAnimationFrame(scrollToTop);
    
    window.scrollTo(0, scrollBar - 47);
        return false;
    }
    else if (scrollBar > 1000) {
    window.requestAnimationFrame(scrollToTop);
    
    window.scrollTo(0, scrollBar - 25);
        return false;
    }
    
    if (scrollBar > 0) {
    window.requestAnimationFrame(scrollToTop);
    
    window.scrollTo(0, scrollBar - scrollBar / 25);
    }
    
}

//move to bottom of the page
function moveToBottom(){
    var scrollBar = document.documentElement.scrollTop || document.body.scrollTop,
        body = document.body,
        html = document.documentElement;
    var pageHeight = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
    var maxWindowHeight = window.screen.availHeight - (window.outerHeight - window.innerHeight);
    var maxScroll = pageHeight - maxWindowHeight - 1;
    window.scrollTo(0, maxScroll )
    
}

// get css variables
function cssVar(varName){
    var root = document.querySelector(':root');
    return getComputedStyle(document.documentElement).getPropertyValue(varName);
}
