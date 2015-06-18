'use strict';

var $ = require('jquery');

var sample = {
    // open a sample
    open: function($link) {
        var $transition = $link.siblings('[data-hook=transition]'),
            $container = $link.parent('[data-hook=thumbnail-container]'),
            $sample =  $container.siblings('[data-hook=sample]'),
            $close = $('[data-hook=close]'),
            $background = $('[data-hook=modal-back]');

        $transition.addClass('is-active');
        $link.removeClass('wobble').addClass('is-active');

        setTimeout(function() {
            $sample.addClass('is-active');
            $sample.find('[data-hook=sample-image]').addClass('is-active');
            $sample.find('[data-hook=sample-content]').addClass('is-active');
            $close.addClass('is-active');
            $background.show(0);
        }, 200);
    },

    // close active sample
    // transition determines whether the background closes, making it more or less of a "transition" rather than "close"
    close: function(isTransition) {
        var $background = $('[data-hook=modal-back]');

        // if it's not a transition, hide the background so the modal completely closes
        if(! isTransition ) {
            $background.hide(0);
        }

        $('[data-hook=sample-image], [data-hook=sample-content]').each(function() {
            $(this).fadeOut(function() {
                $(this).removeClass('is-active');
                // remove style from fadeOut
                $(this).attr('style', '');
                $('[data-hook=transition].is-active').show(0, function() {
                    $('[data-hook=transition].is-active').removeClass('is-active');
                    $('[data-hook=sample].is-active').removeClass('is-active');
                    $('[data-hook=thumbnail].is-active').addClass('wobble').removeClass('is-active');
                    setTimeout(function() {
                        $('[data-hook=thumbnail].wobble').removeClass('wobble');
                    }, 1000);
                });
            });
        });

        $('[data-hook=close]').hide(0, function() {
            $('[data-hook=close]').removeClass('is-active');
            $('[data-hook=close]').attr('style', '');
        });
    },

    isOpen: function($sample) {
        return $sample.hasClass('is-active');
    },

    // return true if any sample is open
    anyOpen: function() {
        return $('[data-hook=sample].is-active').length;
    }
};

module.exports = sample;