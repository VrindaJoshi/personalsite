// CODE FROM https://css-tricks.com/snippets/css/typewriter-effect/
document.addEventListener('DOMContentLoaded',function(event){
        
    // type one character in the typewriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, location, fnCallback) {
      // check if text isn't finished yet
      if (i < (text.length)) {
        // add next character to h1
       document.querySelector(location).innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
  
        // wait for a while and call this function again for next character
        setTimeout(function() {
          typeWriter(text, i + 1, location, fnCallback)
        }, 100);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == 'function') {
        // call callback after timeout
        setTimeout(fnCallback, 700);
      }
    }
    typeWriter("hey, i'm vrinda", 0, "h1", function(){
    });    
  });  
