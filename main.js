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

///////// font animation ////////////////////////
// $(function(){
// 	$(".subtxt").addClass("changed");
// 	$(".fullname").addClass("loaded");
// 	$(".smalltxt").css('opacity', '1');
// 	$(".downbtn a").css({
// 		"opacity" : "1",
// 		"padding" : "15px 10px",
// 	});
// });

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
            // 追加のエフェクト(スマホ)
            $(".fadeintxt span",this).css({
              "opacity" : "1",
              "font-size": "52px"
            });
            $(".article", this).css('opacity', '1');
            $("#skills").addClass("boxfadein");

          } else {
            // 追加のエフェクト(PC)
            $(".fadeintxt span",this).css({
              "opacity" : "1",
              "font-size": "62px"
            });
            $(".article", this).css('opacity', '1');
            $("#skills").addClass("boxfadein");

          }
        } else {
          $(".fadeintxt span",this).css({
              "opacity" : "0",
              "font-size": "0"
            });
            $(".article", this).css('opacity', '0');
            $("#skills").addClass("boxfadein");

        }
    });
  });
});


// スクロールのファンクション
$(window).scroll(function (){
  // それぞれのeffectに反映する
  $(".effect").each(function(){
    // effectの位置
    var Position = $(this).offset().top;
    // スクロールの量
    var scroll = $(window).scrollTop();
    // ウィンドウの高さ
    var windowHeight = $(window).height();
    // スクロールして要素が見える時(必要に応じて変更)
    if (scroll > Position - windowHeight + windowHeight/5){
      if($(window).width() < 768) {
          // 追加のエフェクト(スマホ)
          $(".pagefadein",this).css({
            "opacity" : "1",
          });
          $(".introtxt p", this).css('opacity', '1');
          $("hr", this).css('width', '50%');
          $("#skills").addClass("boxfadein");
        } else {
          // 追加のエフェクト(PC)
          $(".pagefadein",this).css({
            "opacity" : "1",
          });
          $(".introtxt p", this).css('opacity', '1');
          $("hr", this).css('width', '50%');
          $("#skills").addClass("boxfadein");
        }
      } else {
        $(".pagefadein",this).css({
            "opacity" : "0",
          });
          $(".introtxt p", this).css('opacity', '0');
          $("hr", this).css('width', '0%');
          $("#skills").addClass("boxfadein");
        }
  });
});









$(document).ready(function(){
  $("#morebtn").click(function(){
    $("#pro-skill").toggleClass("dropdown");
    $("#profile").toggleClass("dropdown");   
    $(".aboutContent").toggleClass("move-about");
    $(this).text(function(x, y){
      return y === 'More' ? 'Hide' : 'More'
    });
    })
  });
      



