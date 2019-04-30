// Nav to page scroll animaition/////////////////////////////
$(document).ready(function() {
  $('#topButton').click(function() {    
    animateScrollTo('#topPage')
  })
})
$(document).ready(function() {
  $('#aboutButton').click(function() {    
    animateScrollTo('#aboutPage')
  })
  $('#arrow').click(function(){
    animateScrollTo('#aboutPage')
  })
})
$(document).ready(function() {
  $('#projectsButton').click(function() {    
    animateScrollTo('#projectsPage')
  })
})
$(document).ready(function() {
  $('#skillButton').click(function() {    
    animateScrollTo('#skillPage')
  })
})

function animateScrollTo(id) {
  $('html, body').animate({
      scrollTop: $(id).offset().top
  }, 600, 'swing');
}

//////// hide show nav animation////////////////////////////
let startPos = 0,winScrollTop = 0;
$(window).on('scroll',function(){
    winScrollTop = $(this).scrollTop();
    if (winScrollTop >= startPos) {
        $('header').addClass('hide');
    } else {
        $('header').removeClass('hide');
    }
    startPos = winScrollTop;
});

$(function() {
  $('#sub-nav').click(function(){
      $('header').toggleClass('open');
  });
});


///////// font animation ///////////////////////

$(function(){
  // スクロールのファンクション
  $(window).scroll(function (){
    // それぞれのeffectに反映する
    $(".content").each(function(){
      // effectの位置
      let Position = $(this).offset().top;
      // スクロールの量
      let scroll = $(window).scrollTop();
      // ウィンドウの高さ
      let windowHeight = $(window).height();
      // スクロールして要素が見える時(必要に応じて変更)
      if (scroll > Position - windowHeight + windowHeight/5){
        if($(window).width() < 768) {
            $(".fadeintxt span",this).css({
              "opacity" : "1",
              "font-size": "52px"
            });
            $(".article", this).css('opacity', '1');
            $(".skillContent").addClass("boxfadein");

          } else {
            $(".fadeintxt span",this).css({
              "opacity" : "1",
              "font-size": "62px"
            });
            $(".article", this).css('opacity', '1');
            $(".skillContent").addClass("boxfadein");

          }
        } else {
          $(".fadeintxt span",this).css({
              "opacity" : "0",
              "font-size": "0"
            });
            $(".article", this).css('opacity', '0');
            $(".skillContent").removeClass("boxfadein");
      }
    });
  });
});



/////////////////// about page btn ////////////////////
$(document).ready(function(){
  $("#morebtn").click(function(){
    $("#pro-skill").toggleClass("dropdown");
    $("#profile").toggleClass("dropdown");   
    $(".aboutContent").toggleClass("move-about");
    $("#pro-skill").fadeToggle(100);
    $(this).text(function(x, y){
      return y === 'More' ? 'Hide' : 'More'
    });
    })
  });
      
  


