$(window).scroll(function(){
    console.log("scrolled")
    $('.navbar').toggleClass('scrolled', $(this).scrollTop() > 50);
    $('.custom-toggler.navbar-toggler').toggleClass('scrolledt', $(this).scrollTop() > 50);
    $('.custom-toggler .navbar-toggler-icon').toggleClass('scrolledti', $(this).scrollTop() > 50);
});