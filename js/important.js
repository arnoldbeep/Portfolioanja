$('.menu-burger, .menu-items').on('click', function() {
  $('.menu-bg, .menu-items, .menu-burger').toggleClass('fs');
  $('.menu-burger').text() == "☰" ? $('.menu-burger').text('✕') : $('.menu-burger').text('☰');
});

$(document).ready(function($) {
  $(window).load(function() {
    $(".loader").delay(500).fadeOut(1000, function() {
      $(".load_page").fadeOut(1000)
    })
  })
});
$(document).ready(function($) {
  $("#tagline").hide();
  $(window).load(function() {
    $("#tagline").delay(1800).fadeIn(1500)
  })
});

$(document).ready(function($) {
  $(window).load(function() {
    $(".loader").delay(500).fadeOut(1000, function() {
      $(".load_page").fadeOut(1000)
    })
  })
});
$(document).ready(function() {
  $('#menu li a').on('click', function() {
    $('#menuToggle').hide(300);
    $('#menuToggle input').removeClass('checked');
    //   $('#menuToggle', 'span').show(100);
  })
});
// $(document).on('click', '.close', function() {
//   $('#menuToggle').removeClass('closed open');
// })

function isMobile() {
  return ((navigator.userAgent.match(/Android/i)) || (navigator.userAgent.match(/webOS/i)) || (navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/BlackBerry/)))
}

function tagline() {
  scrollPos = jQuery(this).scrollTop();
  $("#tagline").css({
    "margin-top": -(scrollPos / 3) + "px",
    opacity: 1 - (scrollPos / 550)
  })
}
$(document).ready(function() {
  if (!isMobile()) {
    jQuery(window).scroll(function() {
      tagline()
    })
  }
});
$(document).ready(function() {
  $("#name-contact,#email-contact,#message-contact").val("")
});

function IsChar(name) {
  var regex = /^([A-Za-z][ éàëA-Za-z]*)$/;
  return regex.test(name)
}

function IsEmail(email) {
  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email)
}
$(document).ready(function() {
  $("#error-wrap,#success-wrap,#error,#success").hide();
  $("#send-email").click(function() {
    var name = $("#name-contact").val();
    var email = $("#email-contact").val();
    var message = $("#message-contact").val();
    var errors = new Array();
    var i = -1;
    if (!IsChar(name) || ($.trim(name).length == 0)) {
      i++;
      errors[i] = " ";
      $("#name-contact").animate({
        outlineColor: "#5c6576"
      }, "slow");
      $("#error-wrap").stop(true, true).delay(200).animate({
        height: "50px",
        mode: "show"
      }, {
        duration: 400
      });
      $("#error").delay(500).fadeIn(700)
    }
    if (!IsEmail(email)) {
      i++;
      errors[i] = " ";
      $("#email-contact").animate({
        outlineColor: "#5c6576"
      }, "slow");
      $("#error-wrap").stop(true, true).delay(200).animate({
        height: "50px",
        mode: "show"
      }, {
        duration: 400
      });
      $("#error").delay(500).fadeIn(700)
    }
    if ($.trim(message).length == 0) {
      i++;
      errors[i] = " ";
      $("#message-contact").animate({
        outlineColor: "#5c6576"
      }, "slow");
      $("#error-wrap").stop(true, true).delay(200).animate({
        height: "50px",
        mode: "show"
      }, {
        duration: 400
      });
      $("#error").delay(500).fadeIn(700)
    }
    if (errors.length == 0) {
      $.ajax({
        url: "envoi.php",
        data: {
          name: name,
          email: email,
          message: message
        },
        type: "POST",
        success: function(data) {
          $("#success-wrap").stop(true, true).delay(200).animate({
            height: "50px",
            mode: "show"
          }, {
            duration: 400
          });
          $("#success").delay(500).fadeIn(700);
          $("#error-wrap").stop(true, true).delay(100).animate({
            height: "50px",
            mode: "hide"
          }, {
            duration: 200
          });
          $("#error").delay(100).fadeOut(200);
          $("#name-contact,#email-contact,#message-contact").delay(1000).val("");
          $("#name-contact,#email-contact,#message-contact").animate({
            outlineColor: "transparent"
          })
        }
      })
    }
  })
});


$(document).ready(function(){
  $('.bxslider').bxSlider({
    adaptiveHeight: false,
    auto: true,
    mode: 'fade',
    speed: 900
  });
});

$(function() {
  $(".nav-bar").click(function() {
    $("header").toggleClass("close");
  });
});

$(document).ready(function() {
  $(".tabs-menu a").click(function(event) {
    event.preventDefault();
    $(this).parent().addClass("current");
    $(this).parent().siblings().removeClass("current");
    var tab = $(this).attr("href");
    $(".tab-content").not(tab).css("display", "none");
    $(tab).fadeIn(1200);
  });
});

$(function() {
  $('nav a').bind('click',function(event){
    var $anchor = $(this);
    $('a').each(function () {
      $(this).removeClass('active');
    })
    $(this).addClass('active');
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top-80
    }, 1500,'easeInOutExpo');

    event.preventDefault();
  });
  $('.welcome a').bind('click',function(event){
    var $anchor = $(this);
    $('a').each(function () {
      $(this).removeClass('active');
    })
    $(this).addClass('active');
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500,'easeInOutExpo');

    event.preventDefault();
  });
});
$(document).ready(function () {
  $(document).on("scroll", onScroll);

  //smoothscroll
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function () {
      $(this).removeClass('active');
    })
    $(this).addClass('active');

    var target = this.hash,
    menu = target;
    $target = $(target);

  });
});
function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('nav a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $('nav a').removeClass("active");
      currLink.addClass("active");
    }
    else{
      currLink.removeClass("active");
    }
  });
}

//gif on scroll

$(document).scroll(function() {
  var gif = $(this).scrollTop();
  if (gif > 400) {
    $('.bg-image').fadeIn();
  } else {
    $('.bg-image').fadeOut();
  }
});


//filter of gallery
$(function() {
  $('.toggles button').click(function(){
    var get_id = this.id;
    var get_current = $('.gallery_containers .' + get_id);
    $('.gallery_container').not( get_current ).hide(500);
    get_current.show(500);
  });
});
//
// $(document).ready(function() {
//   $(".toggles button").click(function(event) {
//     event.preventDefault();
//     $(this).parent().addClass("current");
//     $(this).parent().siblings().removeClass("current");
//     var button = this.button;
//     var get_id = this.id;
//     var current = $('.gallery_containers .' + get_id);
//     $('.gallery_container').not(current).hide(500);
//     get_current.show(500);
//     $(".toggles button").not(current).css("display");
//     current.css();
//   });
// });
//portfolio GALLERY

//trivia portfolio
$(document).ready(function () {
  $(".gal_btn1").click(function () {
    $(".pop1").fadeIn(300);
  });
  //close
  $(".pop1 > span1").click(function () {
    $(".pop1").fadeOut(300);
  });
});
//cheerie portfolio
$(document).ready(function () {
  $(".gal_btn2").click(function () {
    $(".pop2").fadeIn(300);
  });
  //close
  $(".pop2 > span2").click(function () {
    $(".pop2").fadeOut(300);
  });
});
//icare portfolio
$(document).ready(function () {
  $(".gal_btn3").click(function () {
    $(".pop3").fadeIn(300);
  });
  //close
  $(".pop3 > span3").click(function () {
    $(".pop3").fadeOut(300);
  });
});
//node portfolio
$(document).ready(function () {
  $(".gal_btn4").click(function () {
    $(".pop4").fadeIn(300);
  });
  //close
  $(".pop4 > span4").click(function () {
    $(".pop4").fadeOut(300);
  });
});
$(document).ready(function () {
  $(".gal_btn5").click(function () {
    $(".pop5").fadeIn(300);
  });
  //close
  $(".pop5 > span5").click(function () {
    $(".pop5").fadeOut(300);
  });
});
//yearbook
$(document).ready(function () {
  $(".gal_btn6").click(function () {
    $(".pop6").fadeIn(600);
  });
  //close
  $(".pop6 > span6").click(function () {
    $(".pop6").fadeOut(300);
  });
});
