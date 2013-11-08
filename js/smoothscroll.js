(function($) {
    $.fn.SmoothAnchors = function() {
        
        function scrollBodyTo(destination, hash) {

            // Change the hash first, then do the scrolling. This retains the standard functionality of the back/forward buttons.
            var scrollmem = $(document).scrollLeft();
            window.location.hash = hash;
            $(document).scrollLeft(scrollmem);
            $("html,body").animate({
                scrollLeft: destination
            }, 1200);
            
        }

        if (typeof $().on == "function") {
            $(document).on('click', 'a[href^="#"]', function() {

                var href = $(this).attr("href");

                if ($(href).length == 0) {

                    var nameSelector = "[name=" + href.replace("#", "") + "]";

                    if (href == "#") {
                        scrollBodyTo(0, href);
                    }
                    else if ($(nameSelector).length != 0) {
                        scrollBodyTo($(nameSelector).offset().left, href);
                    }
                    else {
                        // fine, we'll just follow the original link. gosh.
                        window.location = href;
                        articleAnimate()
                    }
                }
                else {
                    scrollBodyTo($(href).offset().left, href);
                    if (href == '#about') {
                        $(href + ' article').delay(600).animate({
                            opacity: 1
                        }, 1000)
                    } else if (href == '#precautions') {
                        $(href + ' article').delay(600).animate({
                            right: '4%'
                        }, 1000)
                    } else {}
                    console.log(href);
                }
                return false;
            });
        }
        else {
            $('a[href^="#"]').click(function() {
                var href = $(this).attr("href");

                if ($(href).length == 0) {

                    var nameSelector = "[name=" + href.replace("#", "") + "]";

                    if (href == "#") {
                        scrollBodyTo(0, href);
                        articleAnimate()
                    }
                    else if ($(nameSelector).length != 0) {
                        scrollBodyTo($(nameSelector).offset().left, href);
                        articleAnimate()
                    }
                    else {
                        // fine, we'll just follow the original link. gosh.
                        window.location = href;
                    }
                } else {
                    scrollBodyTo($(href).offset().left, href);
                    articleAnimate()
                }
                return false;
            });
        }
    };
})(jQuery);

$(document).ready(function() {
    $().SmoothAnchors();
});
