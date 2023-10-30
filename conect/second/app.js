$(document).ready(function(){
    $('.fa-bars').click(function(){
        $('.nav_link').toggle();
        $('.header').toggleClass('borse_header');
    })
})

// $(document).ready(function(){
//     function toggleMenu() {
//         $('.icon').toggleClass('fa-bars fa-xmark');
//         $('#header').toggleClass('show-menu');
//     }

//     $('.fa-bars').click(function(){
//         toggleMenu();
//     });
// });