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
        }
    }
}(jQuery));
