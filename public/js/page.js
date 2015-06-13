'use strict';

var $ = require('jquery');

var page = {
    open: function($link) {
        var $menuItem = $link.parent('[data-hook=menu-item]'),
            $transition = $link.siblings('[data-hook=page-transition]'),
            pageId = $link.attr('data-page'),
            $page = $('[data-hook=page][data-page=' + pageId + ']'),
            $content = $page.find('[data-hook=page-content]'),
            $close =  $('[data-hook=page-close]'),
            $background = $('[data-hook=modal-back]');

        $transition.addClass('is-active');
        $menuItem.addClass('is-active').removeClass('snap');

        setTimeout(function() {
            $page.addClass('is-active');
            $transition.hide(0);
            $content.addClass('is-active');
            $close.addClass('is-active');
            $background.show(0);
        }, 200);
    },

    // close active page
    // transition determines whether the background closes, making it more or less of a "transition" rather than "close"
    close: function(isTransition) {
        var $menuItem = $('[data-hook=menu-item].is-active'),
            $link = $menuItem.find('[data-hook=page-link]'),
            $transition = $link.siblings('[data-hook=page-transition]'),
            pageId = $link.attr('data-page'),
            $page = $('[data-hook=page][data-page=' + pageId + ']'),
            $content = $page.find('[data-hook=page-content]'),
            $image = $page.find('[data-hook=page-image]'),
            $background = $('[data-hook=modal-back]');

        if (! $transition.hasClass('is-active')) {
            throw new Error('Transition not active');
        }

        // if it's not a transition, hide the background so the page completely closes
        if(! isTransition ) {
            $background.hide(0);
        }

        $transition.show(0);
        $transition.removeClass('is-active');
        $page.removeClass('is-active');
        $menuItem.addClass('snap').removeClass('is-active');

        $content.removeClass('is-active');
        $image.removeClass('is-active');

        $('[data-hook=page-close]').hide(0, function() {
            var $close = $('[data-hook=page-close]');
            $close.removeClass('is-active');
            $close.attr('style', '');
        });
    },
    
    // return true if $link's page is open
    isOpen: function($link) {
        var $menuItem = $link.parent('[data-hook=menu-item]');
        return $menuItem.hasClass('is-active');
    },

    // return true if any page is open
    anyOpen: function() {
        return $('[data-hook=page].is-active').length;
    }
};

module.exports = page;