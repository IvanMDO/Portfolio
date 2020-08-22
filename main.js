$(document).ready(function(){
    var ingles = $('.inglesIdioma')
    var español = $('.españolIdioma')

    $(ingles).addClass('ingles');

    $('.inglesButton').click(function(){
        $(ingles).removeClass('ingles');
        $(español).addClass('español')
    });

    $('.españolButton').click(function(){
        $(español).removeClass('español');
        $(ingles).addClass('ingles')
    });

});