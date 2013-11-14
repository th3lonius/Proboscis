$(document).ready(function() {
        
/*----- NAVIGATION -----*/
    
    if (!location.hash) {
        $('nav ul li a:first').addClass('active');
    } else {
        $('nav ul li a[href=' + location.hash + ']').addClass('active');
    }

    $('nav ul li a').bind('click', function(event) {
        $('nav ul li a').removeClass('active');
        $(this).addClass('active');
    });


    $('#profile li a').bind('click', function(event) {
        $(this).toggleClass('current');
        $(this).next().slideToggle();
        return false;
    });
    
    
    $('.next').click(function(event) {
        
        var currentSection = $('section'+location.hash);
        
        var dest = $(currentSection).next().offset().left;
        
        window.location.hash = href.hash;
                        
        console.log(dest);
        console.log(window.location);
        
        $("html,body").animate({
            scrollLeft: dest
        }, 1200);
/*<<<<<<< HEAD
<<<<<<< HEAD
        
=======
                
>>>>>>> 62ab416930bf975f9b4b3a8241b5c487be70a5c9
=======
                
>>>>>>> 62ab416930bf975f9b4b3a8241b5c487be70a5c9*/
        return false;
    });




    
/*----- SCROLLING MENU -----*/

    function fade_header() {
    
		if ($(window).width() > 720) {

			winScroll = $('#about article').scrollTop();
            
            console.log($('article').scroll);

			if (window.scroll > 10) {

				$('.topQuote').slideDown('slow');
                 
			} else {
				
				$('.topQuote').fadeOut('fast');
        
			}
            
		} else if ($(window).width() >= 480 && $(this).width() <= 720) {
            
            $('.min').show();
            
        } else {
            
        }

    }
    
    $(window).scroll(function() { fade_header() });

/*----- RESPONSIVENESS -----*/    
    
    sectionFit();
    $(window).resize(function() {
        sectionFit();
    });
    
    function sectionFit() {
        var sectionWidth = $(window).width();
        $('section').css('width',sectionWidth);
    }
    
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
    
    
    /*----- COLOR SCROLLING HEADER -----*/

    var scroll_pos = 0;
    var animation_begin_pos = 0; //where you want the animation to begin
    var animation_end_pos = 1000; //where you want the animation to stop
    var beginning_color = new $.Color( 'rgba(239,108,68,0.2)' ); //we can set this here, but it'd probably be better to get it from the CSS; for the example we're setting it here.
    var ending_color = new $.Color( 'rgba(239,108,68,0.99)' ); ;//what color we want to use in the end
    $(document).scroll(function() {
        scroll_pos = $(this).scrollLeft(); 
        if(scroll_pos >= animation_begin_pos && scroll_pos <= animation_end_pos ) { 
           // console.log( 'scrolling and animating' );
            //we want to calculate the relevant transitional rgb value
            var percentScrolled = scroll_pos / ( animation_end_pos - animation_begin_pos );
            var newRed = beginning_color.red() + ( ( ending_color.red() - beginning_color.red() ) * percentScrolled );
            var newGreen = beginning_color.green() + ( ( ending_color.green() - beginning_color.green() ) * percentScrolled );
            var newBlue = beginning_color.blue() + ( ( ending_color.blue() - beginning_color.blue() ) * percentScrolled );
            var newAlpha = beginning_color.alpha() + ( ( ending_color.alpha() - beginning_color.alpha() ) * percentScrolled );
            var newColor = new $.Color( newRed, newGreen, newBlue, newAlpha );
            //console.log( newColor.red(), newColor.green(), newColor.blue() );
            $('#hdOverlay').animate({ backgroundColor: newColor }, 0);
        } else if ( scroll_pos > animation_end_pos ) {
             $('#hdOverlay').animate({ backgroundColor: ending_color }, 0);
        } else if ( scroll_pos < animation_begin_pos ) {
             $('#hdOverlay').animate({ backgroundColor: beginning_color }, 0);
        } else { }
    });    
        

});
