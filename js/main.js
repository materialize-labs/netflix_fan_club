$(document).ready(function(){
  
  var audio = document.getElementById('netflixAudio'); 

  $("#submitBtn").click(function(){        
    audio.play();
    setTimeout(window.location.replace('https://tudum.com'), 3000);
  });

});