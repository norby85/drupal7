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
            $( ".views-row" ).addClass( "loaded-rows" );


            $( "img.img-responsive" ).load(function() {
                if ( $( this ).height() > 99) {
                    $( this ).addClass( "bigImg" );
                }
            });

            $( "ul li" ).addClass(function( index ) {
                return "item-" + index;
            });

            $( "li:last" ).removeClass(function() {
                return $( this ).prev().attr( "class" );
            });

            $( ".views-row" ).click(function() {
                $( this ).toggleClass( "highlight" );
            });
        }
    }

    $.noConflict();
    jQuery( document ).ready(function( $ ) {

    });
}(jQuery));

/*$( "#result1" ).append( $( "p:first" ).hasClass( "selected" ).toString() );
$( "#result2" ).append( $( "p:last" ).hasClass( "selected" ).toString() );
$( "#result3" ).append( $( "p" ).hasClass( "selected" ).toString() ) ;*/


/*$( "div.field-item" ).html();*/