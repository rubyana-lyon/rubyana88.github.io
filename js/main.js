
$(document).ready(function(){
  //change navbar color as the user scrolls
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      if (scroll > 300) {
        $("nav").addClass("nav-scrolled");
      }
      else{
        $("nav").removeClass("nav-scrolled");  	
      }
    } else {
	  if (scroll > 600) {
	    $("nav").addClass("nav-scrolled");
	  }
	  else{
		  $("nav").removeClass("nav-scrolled");  	
	  }
  }
});
});

//Button redirects

$('#winenotes-btn').on('click', function() {
  document.location.href = 'wine-notes.html';
})

$('#ruby-btn').on('click', function() {
  document.location.href = 'about.html';
})