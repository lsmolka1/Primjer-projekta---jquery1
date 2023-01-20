$(document).foundation();   

$('#kraljica').click(function(){

    $('#kralj').css('border-width','5px');
    return false;
});

$('#kralj').dblclick(function(){

    $('#savjet').html('Pomoću kralja možeš se riješiti kraljice iako mu je najavljen šah.');
    return false;
});

$('#upitnik').mouseenter(function(){

    $('#upitnik').html('Koji je tvoj sljedeći potez? Ukoliko je potrebno, pitaj za savjet.');
    return false;
});

$('#ovdje').mouseleave(function(){

    $('#kralj').css('background-color','green');
    return false;
});



