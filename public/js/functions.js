//*************************************************
//              JQuery
//*************************************************

$('.nav-icon').on('click', function(){
   navActive();
})

$(window).on('load', function(){
    setTimeout(function(){
        $('.intro-plan-img').addClass('active-plan-img');
    }, 300)  
})


//*************************************************
//             Functions
//*************************************************

function navActive() {
    $('.nav-wrapper').toggleClass('active-nav');
    $('.nav-icon span').toggleClass('active-nav')
    $('.nav-logo').toggleClass('active-nav');
    $('.nav-display').toggleClass('active-nav');
}