var $ = require('jquery');
var Handlebars = require('handlebars');

(function() {

    var Pages = [
        {
            id: 1,
            text: 'I\'m a storyteller',
            menuClass: 'small-6 medium-4'
        },
        {
            id: 2,
            text: 'I tell stories',
            menuClass: 'small-6 medium-4'
        },
        {
            id: 3,
            text: 'Let\'s tell your story',
            menuClass: 'small-12 medium-4'
        }
    ];

    var menuScript = $('[data-hook=menu-template]').html();
    var menuTemplate = Handlebars.compile(menuScript);
    $('[data-hook=menu-list]').append(menuTemplate(Pages));
}());