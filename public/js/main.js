'use strict';

var $ = require('jquery'),
    Mixpanel = require('mixpanel'),
    mixpanel = Mixpanel.init('3f920f1325b407efd7d1e6df75fe01b1'),
    sample = require('./sample'),
    sampleTemplate = require('./sampleTemplate'),
    pageTemplate = require('./pageTemplate'),
    menuTemplate = require('./menuTemplate'),
    page = require('./page');

(function () {

    // Click event for opening sample from thumbnail
    $('[data-hook=thumbnail]').on('click', function (e) {
        e.preventDefault();

        mixpanel.track('Sample open', {
            sample: ''
        });

        var $link = $(e.target);
        // check whether this page is already open
        if (sample.isOpen($link)) {
            closeWindows();
            return;
        }
        closeWindows(function() {
            sample.open($link);
        });
    });
    // Also trigger click for thumbnails' children
    $('[data-hook=thumbnail-child]').on('click', function(e) {
        e.preventDefault();

        $(this).parent().trigger('click');
    });

    // Click event for closing sample container
    $('[data-hook=close]').on('click', function (e) {
        e.preventDefault();

        mixpanel.track('Sample close', {
            sample: ''
        });

        sample.close();
    });

    // Click event for opening page container
    $('[data-hook=page-link]').on('click', function (e) {
        e.preventDefault();

        mixpanel.track('Page open', {
            page: ''
        });

        var $link = $(e.target);
        // check whether this page is already open
        if (page.isOpen($link)) {
            closeWindows();
            return;
        }
        closeWindows(function() {
            page.open($link);
        }, true);
    });

    // Click event for closing page container
    $('[data-hook=page-close]').on('click', function (e) {
        e.preventDefault();

        mixpanel.track('Page close', {
            page: ''
        });

        page.close();
    });

    // Close any open samples/pages
    // isTransition determines whether the transition should stay open (avoiding flash of color on open-close
    function closeWindows(callback, isTransition) {
        if (sample.anyOpen()) {
            sample.close(isTransition);
        }
        if (page.anyOpen()) {
            page.close(isTransition);
        }

        if (callback) {
            callback();
        }
    }
})();
