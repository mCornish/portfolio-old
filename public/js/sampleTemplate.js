var $ = require('jquery');
var Handlebars = require('handlebars');

var Samples = require('./sampleData');

(function() {
    var sampleScript = $('[data-hook=sample-template]').html();
    var sampleTemplate = Handlebars.compile(sampleScript);
    $('[data-hook=samples]').append(sampleTemplate(Samples));
}());