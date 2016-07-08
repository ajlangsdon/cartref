(function($) {
    $(function(){
        $('legend').click(function(){
            $(this).parent().find('legend').toggleClass("expanded");
            $(this).parent().find('.content').slideToggle("slow");
            $(this).parent().find('.content').toggleClass("expanded");
        });
    });
})(jQuery);