// Átteszi azt a class-t (views-row) a body-ba
/*(function($, Drupal) {
    Drupal.behaviors.uniqueKey = {
        attach:function(context) {

            // Only .some_class found inside context will be selected
            $(".views-row", context).appendTo("body");

        }
    }
}(jQuery, Drupal));*/

(function ($) {

    Drupal.behaviors.uniqueKey = {
        attach:function (context, height) {
            $( ".views-row" ).addClass( "fadeInUp loading-rows" );


            $( "img.img-responsive" ).load(function() {
                if ( $( this ).height() > 99) {
                    $( this ).addClass( "bigImg" );
                }
            });

            $( "li:last" ).removeClass(function() {
                return $( this ).prev().attr( "class" );
            });

            $( ".views-row" ).click(function() {
                $( this ).toggleClass( "highlight" );
            });

            // Function which adds the 'animated' class to any '.animatable' in view
            var doAnimations = function() {

                // Calc current offset and get all animatables
                var offset = $(window).scrollTop() + $(window).height(),
                    $animatables = $('.views-row');

                // Unbind scroll handler if we have no animatables
                if ($animatables.length == 0) {
                    $(window).off('scroll', doAnimations);
                }

                // Check all animatables and animate them if necessary
                $animatables.each(function(i) {
                    var $animatable = $(this);
                    if (($animatable.offset().top + $animatable.height() - 20) < offset) {
                        $animatable.removeClass('loading-rows').addClass('animated');
                    }
                });

            };

            // Hook doAnimations on scroll, and trigger a scroll
            $(window).on('scroll', doAnimations);
            $(window).trigger('scroll');
        }
    }

    jQuery.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" }
    }, function( name, props ) {
        jQuery.fn[ name ] = function( speed, easing, callback ) {
            return this.animate( props, speed, easing, callback );
        };
    });

    $.noConflict();
    jQuery( document ).ready(function( $ ) {

    });
}(jQuery));

/*$( "#result1" ).append( $( "p:first" ).hasClass( "selected" ).toString() );
$( "#result2" ).append( $( "p:last" ).hasClass( "selected" ).toString() );
$( "#result3" ).append( $( "p" ).hasClass( "selected" ).toString() ) ;*/


/*$( "div.field-item" ).html();*/
