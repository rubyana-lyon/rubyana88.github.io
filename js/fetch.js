$(document).ready(function(){
    //change navbar color as the user scrolls
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $('#navbar-logo').attr('src', 'images/logo3.png');
        if (scroll > 300) {
          $("nav").addClass("nav-scrolled");
        }
        else{
          $("nav").removeClass("nav-scrolled");  	
        }
      } else {
        if (scroll > 600) {
          $("nav").addClass("nav-scrolled");
          $('#navbar-logo').attr('src', 'images/logo3.png');
        }
        else{
            $("nav").removeClass("nav-scrolled");
            $('#navbar-logo').attr('src', 'images/fetch-imgs/navbar-logo-white.png'); 	
        }
    }
  });
});
$('.custom-btn').on('click', function() {
  document.location.href = "https://www.figma.com/proto/DcsOrWQrIgHktiFsQGMWTXrl/Fetch-Wireframes?node-id=0%3A1&scaling=scale-down";
})