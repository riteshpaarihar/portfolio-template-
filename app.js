var options = {
    strings: ["Designer", "Developer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
    startDelay: 500,
    loop: true,
    loopCount: Infinity
};

var typed = new Typed('#typed-output', options);





$(document).ready(function() {
    const messages = [
        
        "We build amazing websites",
        "Contact us for top-notch development",
        "Your success is our priority"
    ];

    let messageIndex = 0;
    let charIndex = 0;

    function showContent() {
        const message = messages[messageIndex];
        if (charIndex < message.length) {
            $('#dynamicContent').text($('#dynamicContent').text() + message.charAt(charIndex));
            charIndex++;
            setTimeout(showContent, 100);
        } else {
            setTimeout(function() {
                charIndex = 0; // Reset charIndex for the next message
                messageIndex = (messageIndex + 1) % messages.length;
                $('#dynamicContent').text(""); // Reset content
                showContent();
            }, 2000);
        }
    }

    showContent();
});




$(document).ready(function(){
    function toggleMenu() {
        $('.icon').toggleClass('fa-bars fa-xmark');
        $('#header').toggleClass('show-menu');
    }

    $('.fa-bars').click(function(){
        toggleMenu();
    });
});









 



