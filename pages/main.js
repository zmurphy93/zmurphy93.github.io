$(document).ready(function () {

    //$('.menu').click(function(){
      //  $(this).toggleClass("clicked");
    //});

    $('.menu').click(function() {
        var $clicked = $(this)
        $(this).addClass("clicked");
        $('.menu').each(function(){
            var $menu = $(this);
            if (!$menu.is($clicked))
            {
                $($menu.attr('data-item')).hide();
                $(this).removeClass("clicked");
            }
        });
        $($clicked.attr('data-item')).toggle();
    });

});
