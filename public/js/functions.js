//*************************************************
//              JQuery
//*************************************************

$('.nav-icon').on('click', function(){
   navActive();
})

$('.index-phones-icon-left').on('click', function() {
    phoneListSlideLeft();
})

$('.index-phones-icon-right').on('click', function() {
  phoneListSlideRight();
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
    $('.nav-icon').toggleClass('active-nav');
    $('.nav-logo').toggleClass('active-nav');
    $('.nav-display').toggleClass('active-nav');
}

var x = 0;
var dist_slide;
function phoneListSlideLeft() {

  if(x === 0) {
    console.log(x);
  } else {
    x = x + 300;

    $('.index-phones-list ul').css({
      'transform' : 'translateX('+ x +'px)'
    })
  }
console.log(x);
}

function phoneListSlideRight() {

    if(x === -900) {
      console.log(x)
    } else {
      x = x + (-300);

      $('.index-phones-list ul').css({
        'transform' : 'translateX(' + x + 'px)'
      })
    }
  console.log(x)
}
