$(window).scroll(function(){
    console.log("scrolled")
    $('.navbar').toggleClass('scrolled', $(this).scrollTop() > 50);
    $('.custom-toggler.navbar-toggler').toggleClass('scrolledt', $(this).scrollTop() > 50);
    $('.custom-toggler .navbar-toggler-icon').toggleClass('scrolledti', $(this).scrollTop() > 50);
    
});

// $("#project1").on("click",function(){
   
//     $("#project1").toggleClass('exp');
// })