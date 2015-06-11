var $ = require('jquery');
var Handlebars = require('handlebars');

var Pages = require('./pageData');

(function() {

    var pageScript = $('[data-hook=page-template]').html();
    var pageTemplate = Handlebars.compile(pageScript);
    $('[data-hook=pages]').append(pageTemplate(Pages));
}());