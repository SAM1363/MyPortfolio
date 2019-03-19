
$(document).ready(function() {
  $('#topButton').click(function() {    
    animateScrollTo('#topPage')
  })
})
$(document).ready(function() {
  $('#aboutButton').click(function() {    
    animateScrollTo('#aboutPage')
  })
})
$(document).ready(function() {
  $('#projectsButton').click(function() {    
    animateScrollTo('#projectsPage')
  })
})
$(document).ready(function() {
  $('#contactButton').click(function() {    
    animateScrollTo('#contactPage')
  })
})

function animateScrollTo(id) {
  $('html, body').animate({
      scrollTop: $(id).offset().top
  }, 600, 'swing');
}