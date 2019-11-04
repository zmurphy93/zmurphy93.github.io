$(document).ready(function() {

  var headerHeight = $('.navbar').outerHeight(); // Target your header navigation here
  $('#main-nav li a').click(function(e) {
  	var targetHref   = $(this).attr('href');
	$('html, body').animate({
		scrollTop: $(targetHref).offset().top - headerHeight // Add it to the calculation here
	}, 1000);
    e.preventDefault();
  });

$(".flipper").click(function() {
    var target = $( event.target );
    if ( target.is("a") ) {
      //follow that link
      return true;
    } else {
      $(this).toggleClass("flip");
    }
    return false;
  });


  var page = 1; //current page
  $('#pg2').hide();
  $('#pg3').hide();
  $('#fwd').click(function() {
    var currentPage = "#pg" + page.toString();
    $(currentPage).hide();
    page++;
    var nextPage = "#pg" + page.toString();
    $(nextPage).show();
  });


  $('#bck').click(function() {
    var currentPage = "#pg" + page.toString();
    $(currentPage).hide();
    if (page==1){
      page=1;
      console.log(page);
      var nextPage = "#pg1";
      $(nextPage).show();
    }
    else{
        page = page-1;
        var nextPage = "#pg" + page.toString();
        $(nextPage).show();
        }
      });
  });
