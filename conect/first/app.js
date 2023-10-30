// $(document).ready(function(){
//     $('.fa-bars').click(function(){
//         $(this).toggleClass('fa-bars fa-x');
//         $('.nav_links ul').toggle();
//     })
// })


$(document).ready(function(){
    function toggleMenu() {
        $('.icon').toggleClass('fa-bars fa-xmark');
        $('.nav_links ul').toggleClass('show-menu');
    }

    $('.fa-bars').click(function(){
        toggleMenu();
        $('nav').css('background-color', 'black');

    });
});
$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 30){
            $('nav').css({
                'background-color': 'black',
                'padding': '3px 15px'
            });
            $('.nav_links ul li a ').css('color', 'white');
        } else {
            $('nav').css('background-color', 'transparent');
            $('.nav_links ul li a ').css('color', '#000');
        }
    });
});
