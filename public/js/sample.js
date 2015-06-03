'use strict';

var $ = require('jquery');

var sample = {
    // open a sample
    open: function($link) {
        var $transition = $link.siblings('[data-hook=transition]');
        var $container = $link.parent('[data-hook=thumbnail-container]');
        var $sample =  $container.siblings('[data-hook=sample]');

        $transition.addClass('is-active');
        $link.removeClass('wobble').addClass('is-active');

        setTimeout(function() {
            $sample.addClass('is-active');
            $sample.find('[data-hook=sample-image]').addClass('is-active');
            $sample.find('[data-hook=sample-content]').addClass('is-active');
            $('[data-hook=close]').addClass('is-active');
        }, 200);
    },

    // close active sample
    close: function() {
        $('[data-hook=sample-image], [data-hook=sample-content]').each(function() {
            $(this).fadeOut(function() {
                $(this).removeClass('is-active');
                // remove style from fadeOut
                $(this).attr('style', '');
                $('[data-hook=transition].is-active').show(0, function() {
                    $('[data-hook=transition].is-active').removeClass('is-active');
                    $('[data-hook=sample].is-active').removeClass('is-active');
                    $('[data-hook=thumbnail].is-active').addClass('wobble').removeClass('is-active');
                });
            });
        });

        $('[data-hook=close]').hide(0, function() {
            $('[data-hook=close]').removeClass('is-active');
            $('[data-hook=close]').attr('style', '');
        });
    },

    // return true if any sample is open
    isOpen: function() {
        return $('[data-hook=sample].is-active').length;
    }
};

module.exports = sample;