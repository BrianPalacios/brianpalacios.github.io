$(document).ready(function(){
    $('.menu a').each(function(index, element){
        $(this).css({
            'top' : '-200px'
        });

        $(this).animate({
            top: '0'
        }, 2000 + (index * 500));
    });
});