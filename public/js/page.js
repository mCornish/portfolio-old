'use strict';

var $ = require('jquery');

var page = {
    open: function($link) {
        var $menuItem = $link.parent('[data-hook=menu-item]');
        var $transition = $link.siblings('[data-hook=page-transition]');
        var pageName = $link.attr('data-page');
        var $page = $('[data-hook=page][data-page=' + pageName + ']');

        $transition.addClass('is-active');
        $menuItem.addClass('is-active').removeClass('snap');

        setTimeout(function() {
            $page.addClass('is-active');
            $transition.hide(0);
            $page.find('[data-hook=page-content]').addClass('is-active');
            $('[data-hook=page-close]').addClass('is-active');
        }, 200);
    },

    // close active page
    close: function() {
        $('[data-hook=page-transition].is-active').show(0);
        $('[data-hook=page-transition].is-active').removeClass('is-active');
        $('[data-hook=page].is-active').removeClass('is-active');
        $('[data-hook=menu-item].is-active').addClass('snap').removeClass('is-active');

        $('[data-hook=page-image], [data-hook=page-content]').each(function() {
            $(this).fadeOut(function() {
                $(this).removeClass('is-active');
                // remove style from fadeOut
                $(this).attr('style', '');

            });
        });

        // rebind click event
        $('[data-hook=thumbnail]').each(function() {
            $(this).on('click', function(e) {
                e.preventDefault();
                openSample(e.target);
                $('[data-hook=thumbnail]').each(function() {
                    $(this).off('click');
                });
            });
        });

        $('[data-hook=page-close]').hide(0, function() {
            $('[data-hook=page-close]').removeClass('is-active');
            $('[data-hook=page-close]').attr('style', '');
        });
    },
    
    // return true if any page is open
    isOpen: function() {
        return $('[data-hook=page].is-active').length;
    }
};

module.exports = page;