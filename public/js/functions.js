//*************************************************
//              JQuery
//*************************************************

// Navigation Event
$('.nav-icon').on('click', function(){
   navActive();
})

//*************************************************
//              Activate By Location
//*************************************************

var loc = (window.location.pathname);

// Index Page Functions
if (loc.substr(0, 5) == '/home') {

  $('.index-phones-icon-left').on('click', function() {
      phoneListSlideLeft();
  })
//
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
if (loc.substr(0, 7) == '/phones') {

  // On page load delay animation
  $(window).on('load', function() {
      setTimeout(function() {
        $('.phones-intro-switch figure').addClass('active-phone-switch');
      }, 300)
    })
}

// Plans Page Functions
if (loc.substr(0, 6) == '/plans') {
  $('.plans-plans-options button').on('click', function() {
    var planButton = this;
    priceChange(planButton);
  });
}

// Phone Details Page Functions
if (loc.substr(0, 8) === '/phones/') {
  $('.details-right-icon').on('click', function() {
    detailsLeftPhoneChange();
  });

  $('.details-left-icon').on('click', function() {
    detailsRightPhoneChange();
  });
}



//*************************************************
//             Functions
//*************************************************

// Toggle Navigation Menu
function navActive() {
    $('.nav-wrapper').toggleClass('active-nav');
    $('.nav-icon span').toggleClass('active-nav')
    $('.nav-icon').toggleClass('active-nav');
    $('.nav-logo').toggleClass('active-nav');
    $('.nav-display').toggleClass('active-nav');
}

// Slider for Phones on mobile view || Index Page
var x = 0;
function phoneListSlideLeft() {

  if(x === 0) {
  } else {
    x = x + 300;

    $('.index-phones-list ul').css({
      'transform' : 'translateX('+ x +'px)'
    })
  }
}

// Slider for Phones on mobile view || Index Page
function phoneListSlideRight() {

    if(x === -900) {
    } else {
      x = x + (-300);

      $('.index-phones-list ul').css({
        'transform' : 'translateX(' + x + 'px)'
      })
    }
}

// Changes Price on plans page || Plans Page
function priceChange(prop) {

  $('.plans-plans-options button').removeClass('active-plans-button');
  $(prop).addClass('active-plans-button');

  if (prop.className == 'button-one active-plans-button') {
    $('.plans-span-text').text('50');
  } else if (prop.className == 'button-two active-plans-button') {
    $('.plans-span-text').text('65');
  } else if (prop.className == 'button-three active-plans-button') {
    $('.plans-span-text').text('80');
  } else if (prop.className == 'button-four active-plans-button') {
    $('.plans-span-text').text('95');
  }
}

// Changes Phone Details Images || Phone Details
function detailsLeftPhoneChange() {
  $('.details-phone-img li:nth-of-type(2)').css({
      'opacity' : '1'
    });
    $('.details-phone-img li:nth-of-type(1)').css({
      'opacity' : '0'
    });
}

// Changes Phone Details Images || Phone Details
function detailsRightPhoneChange() {
   $('.details-phone-img li:nth-of-type(1)').css({
      'opacity' : '1'
    });
    $('.details-phone-img li:nth-of-type(2)').css({
      'opacity' : '0'
    });
}
