$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
		loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        900:{
            items:2
        },
        1024:{
            items:3
            
        }
    }
	});

	$('.examples-container').each(function () {     
var owl = $(this).find('.owl-carousel').owlCarousel();      
$(this).find('.fixed-container__button_pointer-left').on('click', function () {         
owl.trigger('prev.owl.carousel');   
});      
$(this).find('.fixed-container__button_pointer-right').on('click', function () {         
owl.trigger('next.owl.carousel');   
}); 
});


$(function(){



    $('.fixed-container__button_call-button, .footer__button_call-button')
    .click(function(){
        $('.popup-container').fadeIn(500, enableScroll);
    });

    $('.popup__button')
    .click(function(){
        $('.popup-container').fadeOut(500, disableScroll);
    });



    $('.popup-container').click(function(event){
        if(event.target == this) 
            $(this).fadeOut(500, disableScroll)
    })

    function disableScroll(){

        $('html, body').removeClass('stop-scrolling')
        
    }

    
    function enableScroll(){

        $('html, body').addClass('stop-scrolling')
    }

    $('.skills-container__button_knew-price, .examples-container__button_style, .fixed-container__button_knew-more')
    .click(function(){
        $('.popup-container-short').fadeIn(500, enableScroll);
    });

    $('.popup__button')
    .click(function(){
        $('.popup-container-short').fadeOut(500, disableScroll);
    });



    $('.fixed-container__button_ul-show')
    .click(function(){
        $('.mobile-popup-container').fadeIn(400, enableScroll);
        $('.fixed-container__button_ul-show').hide()
        $('.fixed-container__button_ul-hide').show()
        $('.header__top-background').hide()
    
    });

    $('.fixed-container__button_ul-hide')
    .click(function(){
        $('.mobile-popup-container').fadeOut(400, disableScroll);
        $('.fixed-container__button_ul-show').show()
        $('.fixed-container__button_ul-hide').hide()
        $('.header__top-background').show()
    })

});

});