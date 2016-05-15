//*************************************************
//              JQuery
//*************************************************

$('.nav-icon').on('click', function(){
   navActive();
})



//*************************************************
//              Activate By Location
//*************************************************

var loc = (window.location.pathname).substr(0, 10);

// Index Page Functions
if (loc == '/home') {

  $('.index-phones-icon-left').on('click', function() {
      phoneListSlideLeft();
  })

  $('.index-phones-icon-right').on('click', function() {
    phoneListSlideRight();
  })

  // On page load delay animation
  $(window).on('load', function(){
      setTimeout(function() {
          $('.intro-plan-img').addClass('active-plan-img');
      }, 300)
  })

}

// Phones Page Functions
if (loc == '/phones') {

  // On page load delay animation
  $(window).on('load', function() {
      setTimeout(function() {
        $('.phones-intro-switch figure').addClass('active-phone-switch');
      }, 300)
    })
}

$('.plans-plans-options button').on('click', function() {
  $('.plans-plans-options button').removeClass('active-plans-button');
  $(this).addClass('active-plans-button');


  // console.log(this.className);
  if (this.className == 'button-one active-plans-button') {
    $('.plans-span-text').text('50');
  } else if (this.className == 'button-two active-plans-button') {
    $('.plans-span-text').text('65');
  } else if (this.className == 'button-three active-plans-button') {
    $('.plans-span-text').text('80');
  } else if (this.className == 'button-four active-plans-button') {
    $('.plans-span-text').text('95');
  }
});


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
  console.log(x);
}
