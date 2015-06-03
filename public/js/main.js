'use strict';

var $ = require('jquery');
var sample = require('./sample');
var sampleTemplate = require('./sampleTemplate');
var page = require('./page');

(function () {

// Click event for opening sample from thumbnail
    $('[data-hook=thumbnail]').on('click', function (e) {
        e.preventDefault();

        var $link = $(e.target);
        // check whether this page is already open
        if ($link.hasClass('is-active')) {
            closeWindows();
            return;
        }
        closeWindows();

        sample.open($link);
    });

// Click event for closing sample container
    $('[data-hook=close]').on('click', function (e) {
        e.preventDefault();

        sample.close();
    });

// Click event for opening page container
    $('[data-hook=page-link]').on('click', function (e) {
        e.preventDefault();

        var $menuItem = $link.parent('[data-hook=menu-item]');
        // check whether this page is already open
        if ($menuItem.hasClass('is-active')) {
            closeWindows();
            return;
        }
        closeWindows();

        var $link = $(e.target);
        page.open($link);
    });

// Click event for closing page container
    $('[data-hook=page-close]').on('click', function (e) {
        e.preventDefault();

        page.close();
    });

// Close any open samples/pages
    function closeWindows() {
        if (sample.isOpen()) {
            sample.close();
        }
        if (page.isOpen()) {
            page.close();
        }
    }
})();
