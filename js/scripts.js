$(document).ready(function() {
    
    $('#splashType').bigtext();
    
/*----- SCROLLING MENU -----*/

    function fade_header() {
    
		if ($(window).width() >= 720) {

			winScroll = $(this).scrollTop();

			if (winScroll > $('header').height() - 1) {

				$('#navScroll').slideDown('slow');
                 
			} else {
				
				$('#navScroll').fadeOut('fast');
        
			}
            
		} else if ($(window).width() >= 480 && $(this).width() <= 720) {
            
            $('.min').show();
            
        } else {
            
        }

}
    
    $(window).scroll(function() { fade_header() });

/*----- RESPONSIVENESS -----*/    
    
    function mobileStyling() {
    
    if ($(window).width() <= 1000) {
        
        $('section p').removeClass("col-1 col-2");
        
    } else {}
        
    }
    
    mobileStyling();
    
    $(window).resize(function() {
    /*If browser resized, check width again */
        if ($(window).width() <= 1000) {
            
            $('section p').removeClass("col-1 col-2");
            
    } else {}
        
    });
        

});