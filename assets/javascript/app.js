$(window).scroll(function(){
    console.log("scrolled")
    $('.navbar').toggleClass('scrolled', $(this).scrollTop() > 50);
    $('.custom-toggler.navbar-toggler').toggleClass('scrolledt', $(this).scrollTop() > 50);
    $('.custom-toggler .navbar-toggler-icon').toggleClass('scrolledti', $(this).scrollTop() > 50);
    
});
$('#myemailtext,#myemail').click(function(e){
    e.preventDefault();
     $("#myemailtext").toggle();
     $("#myemail").toggle();
});
$('#mynumbertext,#mynumber').click(function(e){
    e.preventDefault();
     $("#mynumbertext").toggle();
     $("#mynumber").toggle();
})
