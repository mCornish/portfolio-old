'use strict';

// Click event for opening sample from thumbnail
$('[data-hook=thumbnail]').on('click', function(e) {
    e.preventDefault();
    openSample(e.target);
    // unbind click event
    $('[data-hook=thumbnail]').each(function() {
        $(this).off('click');
    });
});

// Click event for closing sample container
$('[data-hook=close]').on('click', function(e) {
    e.preventDefault();
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

    $(this).fadeOut(function() {
        $(this).removeClass('is-active');
        $(this).attr('style', '');
    });
});

// Click event for opening page container
$('[data-hook=page-link]').on('click', function(e) {
    e.preventDefault();

    var $link = $(e.target);

    var $transition = $link.siblings('[data-hook=transition]');
    var $menuItem = $link.parent('[data-hook=menu-item]');
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
});

// Click event for closing page container
$('[data-hook=page-close]').on('click', function(e) {
    e.preventDefault();

    $('[data-hook=transition].is-active').show(0, function() {
        $('[data-hook=transition].is-active').removeClass('is-active');
        $('[data-hook=page].is-active').removeClass('is-active');
        $('[data-hook=menu-item].is-active').addClass('snap').removeClass('is-active');
    });

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

    $(this).fadeOut(function() {
        $(this).removeClass('is-active');
        $(this).attr('style', '');
    });
});


// Open sample and sample content in container
function openSample(thumb) {
    var $transition = $(thumb).siblings('[data-hook=transition]');
    var $container = $(thumb).parent('[data-hook=thumbnail-container]');
    var $sample =  $container.siblings('[data-hook=sample]');

    $transition.addClass('is-active');
    $(thumb).removeClass('wobble').addClass('is-active');

    setTimeout(function() {
        $sample.addClass('is-active');
        $sample.find('[data-hook=sample-image]').addClass('is-active');
        $sample.find('[data-hook=sample-content]').addClass('is-active');
        $('[data-hook=close]').addClass('is-active');
    }, 200);
}