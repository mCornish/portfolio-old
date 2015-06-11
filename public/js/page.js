'use strict';

var $ = require('jquery');

var page = {
    open: function($link) {
        var $menuItem = $link.parent('[data-hook=menu-item]'),
            $transition = $link.siblings('[data-hook=page-transition]'),
            pageId = $link.attr('data-page'),
            $page = $('[data-hook=page][data-page=' + pageId + ']'),
            $content = $page.find('[data-hook=page-content]');

        $transition.addClass('is-active');
        $menuItem.addClass('is-active').removeClass('snap');

        setTimeout(function() {
            $page.addClass('is-active');
            $transition.hide(0);
            $content.addClass('is-active');
            $('[data-hook=page-close]').addClass('is-active');
        }, 200);
    },

    // close active page
    close: function() {
        var $menuItem = $('[data-hook=menu-item].is-active'),
            $link = $menuItem.find('[data-hook=page-link]'),
            $transition = $link.siblings('[data-hook=page-transition]'),
            pageId = $link.attr('data-page'),
            $page = $('[data-hook=page][data-page=' + pageId + ']'),
            $content = $page.find('[data-hook=page-content]'),
            $image = $page.find('[data-hook=page-image]');

        if (! $transition.hasClass('is-active')) {
            throw new Error('Transition not active');
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
    
    // return true if any page is open
    isOpen: function() {
        return $('[data-hook=page].is-active').length;
    }
};

module.exports = page;