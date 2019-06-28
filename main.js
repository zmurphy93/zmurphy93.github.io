$(document).ready(function() {

  var headerHeight = $('.navbar').outerHeight(); // Target your header navigation here

  $('#main-nav li a').click(function(e) {

  	var targetHref   = $(this).attr('href');

	$('html, body').animate({
		scrollTop: $(targetHref).offset().top - headerHeight // Add it to the calculation here
	}, 1000);

    e.preventDefault();
  });
});