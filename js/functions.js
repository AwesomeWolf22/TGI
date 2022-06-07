$(function(){

    $.ajax({
        'url':'elementos/cabecario.html',
    }).done(function(data){
        $('#cabecario').append(data);
    })

    $.ajax({
        'url':'elementos/rodape.html',
    }).done(function(data){
        $('#rodape').append(data);
    })
    $('html').scrollTop(0)

});