$(document).ready(function(){
    //change navbar color as the user scrolls
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      console.log(scroll);
      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        if (scroll > 200) {
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

  $('.custom-btn').on('click', function() {
        document.location.href = "https://www.figma.com/proto/KuVtHPH9102GPz051L0Qxq/Wine-Notes?node-id=436%3A5334&scaling=min-zoom";
  })