   <script>
         $(document).ready(function(){
        $(window).scroll(function(){
  	     var scroll = $(window).scrollTop();
          if (scroll > 100) {
            $(".navbar").css("background" , "#ff4800");
              $(".navbar ul li a").css("color","white");
        
	  }
        else{
            
		  $(".navbar").css("background" , "white"); 
          $(".navbar ul li a").css("color", "#ff4800");
	  }
           
  });
});
    </script>