var $ = require('jquery');
var Handlebars = require('handlebars');

(function() {
    var Samples = [
        {
            id: 1,
            header: 'Story Blog',
            subheader: 'The story of a storyteller',
            link: 'http://www.mikecornish.net'
        },
        {
            id: 1,
            header: 'Neeks & Gerds',
            subheader: 'The story of an inspired geek',
            link: 'http://www.neeksandgerds.com'
        },
        {
            id: 1,
            header: 'My Designs',
            subheader: 'A story of simplicity and function',
            link: ''
        }
    ];

    var sampleScript = $('[data-hook=sample-template]').html();
    var sampleTemplate = Handlebars.compile(sampleScript);
    $('[data-hook=samples]').append(sampleTemplate(Samples));
}) ();