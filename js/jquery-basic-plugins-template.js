(function($) {

    $.fn.demo = function( options ) {

        // your settings
        var settings = $.extend({
            text         : 'demo!',
            color        : null,
            fontStyle    : null
        }, options);

        return this.each( function() {
          $(this).text( settings.text );

          if ( settings.color ) {
              $(this).css( 'color', settings.color );
          }

          if ( settings.fontStyle ) {
              $(this).css( 'font-style', settings.fontStyle );
          }
        });

    }

}(jQuery));

// reference: http://blog.teamtreehouse.com/writing-your-own-jquery-plugins
