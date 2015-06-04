var $ = require('jquery');
var Handlebars = require('handlebars');

(function() {

    var Pages = [
        {
            id: 1,
            text: 'I\'m a storyteller'
        },
        {
            id: 2,
            text: 'I tell stories'
        },
        {
            id: 3,
            text: 'Let\'s tell your story'
        }
    ];

    var menuScript = $('[data-hook=menu-template]').html();
    var menuTemplate = Handlebars.compile(menuScript);
    $('[data-hook=menu-list]').append(menuTemplate(Pages));
}());