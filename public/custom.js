/* ### Função Jquery para ativar o botão do menu no modo de dispositivo movel ##*/

$(function(){
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");

    });
});

