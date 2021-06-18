$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top ;
    var elementBottom = elementTop + $(this).outerHeight() ;
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height() / 2;
    return elementBottom > viewportTop && elementTop < viewportBottom;
};



$(window).on(' scroll', function() {
    var elTop =  $(window).scrollTop();
    // console.log(elTop);
    $('.roadmap-item').each(function() {
        if ($(this).isInViewport()) {
            $(this).addClass('visible')
            $(this).prev().addClass('prev')
            $(this).removeClass('next')
        } else {
            $(this).removeClass('visible')
            $(this).addClass('next')
            $(this).removeClass('prev')
        }
    });
    $('.roadmap-item').removeClass('active')
    $('.roadmap-item.visible').last().addClass('active')
   
});



$(document).ready( function() {

    if (window.matchMedia('(max-width: 768px)').matches) {
        // $('.roadmap__group').removeClass('hidden')
        // console.log(2);
    };
    $('.roadmap__group__year').on('click', function(){
        $(this).parent().removeClass('hidden')
        // $(this).parent().css('height','auto');
        $(this).parent().next().show()
    })
    $('.roadmap__group__year--tablet').on('click', function(){
        $(this).parent().parent().removeClass('hidden')
        // $(this).parent().css('height','auto');
        $(this).parent().parent().next().show()
    })

    $('.roadmap__group.hidden').not(':first').hide()
    if (window.matchMedia('(max-width: 768px)').matches) {
        // $('.roadmap__group').show()
    };


    $('.hamburger').on('click', function(){
        $('.header__menu').toggleClass('header__menu--open');
        $('.hamburger__icon').toggleClass('active');
        $('body').toggleClass('scrollHidden')
    });
});
