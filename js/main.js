$(document).ready(function(){
  
  var audio = document.getElementById('netflixAudio'); 

  $("#submitBtn").click(function(){        
    audio.play();
    setTimeout(window.location.href('https://tudum.com'), 3000);
  });

});