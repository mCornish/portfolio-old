var $ = require('jquery');
var Handlebars = require('handlebars');

(function() {

    var Pages = [
        {
            id: 1,
            header: 'About Me',
            content: 'Back in late 2014, I started studying storytelling, both as a writing tool, and as a business tool. Books like <em>The Storytelling Animal</em> and <em>Wired for Story</em> explain that people respond to stories, no matter the context. I wanted to understand why, and how I could use it in my creative work.' +
            '<br><br>' +
            'I originally created MikeCornish.net to be a resource that creative minds could use to apply storytelling in new ways. Time constraints kept me from following through on the end goal, but the website remains as my first attempt building a single-page app from scratch.' +
            '<br><br>' +
            'The website is built on AngularJS and uses Gulp for optimization and deployment bundling.'
        },
        {
            id: 2,
            header: 'What I Do',
            content: 'Years ago, I was an avid blogger. Whenever I wasn\'t in class I was researching, writing, or building an audience. This work culminated in Neeks and Gerds, my biggest bolg and my first experience with web design.' +
            '<br><br>' +
            'I didn\'nt know much about design or storytelling back then, but I still knew that I had to make Neeks and Gerds something special. I focused on community, and telling the stories of an often-rejected group of individuals — geeks. It seemed to work, getting the attenion of a geeky internet celebrity, Felicia Day, as well as a few sponsors.' +
            '<br><br>' +
            'Neeks & Gerds was built on Wordpress with custom CSS and a few plugins.'
        },
        {
            id: 3,
            header: 'Let\'s Work Together',
            content: 'I\'m a subscriber of the idea that design should be so simple and so natural that it goes unnoticed. Interacting with a UI should require little-to-no thought. Reading an promotional poster should be effortless. Yet, design should also be unified by a story.' +
            '<br><br>' +
            'I try to create my designs like characters, giving them a personality that resonates in their voice, appearance, content, and interactions. People understand and relate to characters, the same way I want them to relate to my designs.' +
            '<br><br>' +
            'Most of my design experience comes from leading the design of an on-campus organization and working on small, personal projects, but I\'m currently working on expanding my work to entire brands.'
        }
    ];

    var pageScript = $('[data-hook=page-template]').html();
    var pageTemplate = Handlebars.compile(pageScript);
    $('[data-hook=pages]').append(pageTemplate(Pages));
}());