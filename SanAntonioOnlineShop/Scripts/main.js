(function ($) {
 "use strict";
    
/*----------------------------
    Toogle Search Button
------------------------------ */
    $('#toggle-category').on('click', function() {
        $('.category-items').toggleClass('open');
        return false;
    });
    
/*----------------------------
    Wow js active
------------------------------ */
    new WOW().init();
    
/*----------------------------
    Price Slider Js
------------------------------ */  
    $( "#slider-range" ).slider({
        range: true,
        min: 100,
        max: 1580,
        values: [ 100, 1580 ],
        slide: function( event, ui ) {
            $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
	   " - $" + $( "#slider-range" ).slider( "values", 1 ) );  
	 
/*----------------------------
    jQuery MeanMenu
------------------------------ */
	jQuery('nav#dropdown').meanmenu();
 
/*----------------------------
    Product Tab Carousel
------------------------------ */  
    $(".product-tab-carousel").owlCarousel({
        autoPlay: false, 
        slideSpeed:2000,
        pagination:false,
        navigation:true,	  
        items : 4,
        /* transitionStyle : "fade", */    /* [This code for animation ] */
        navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [980,3],
        itemsTablet: [768,1],
        itemsMobile : [479,1]
    });
/*----------------------------
    New Product Carousel
------------------------------ */     
    $(".new-product-carousel").owlCarousel({
        autoPlay: false, 
        slideSpeed:2000,
        pagination:false,
        navigation:true,	  
        items : 5,
        /* transitionStyle : "fade", */    /* [This code for animation ] */
        navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [980,3],
        itemsTablet: [768,1],
        itemsMobile : [479,1]
    });
/*----------------------------
    Product Thumb Carousel
------------------------------ */     
    $(".product-thumb-carousel").owlCarousel({
        autoPlay: false, 
        slideSpeed:2000,
        pagination:false,
        navigation:true,	  
        items : 3,
        /* transitionStyle : "fade", */    /* [This code for animation ] */
        navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        itemsDesktop : [1199,2],
        itemsDesktopSmall : [980,2],
        itemsTablet: [768,1],
        itemsMobile : [479,1]
    });
/*----------------------------
    Blog Carousel
------------------------------ */     
    $(".blog-carousel").owlCarousel({
        autoPlay: false, 
        slideSpeed:2000,
        pagination:false,
        navigation:true,	  
        items : 1,
        /* transitionStyle : "fade", */    /* [This code for animation ] */
        navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [980,1],
        itemsTablet: [768,1],
        itemsMobile : [479,1]
    });
/*----------------------------
    Home Three Aside Carousel
------------------------------ */     
    $(".aside-carousel").owlCarousel({
        autoPlay: false, 
        slideSpeed:2000,
        pagination:false,
        navigation:true,	  
        items : 1,
        /* transitionStyle : "fade", */    /* [This code for animation ] */
        navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [980,2],
        itemsTablet: [768,1],
        itemsMobile : [479,1]
    });
/*----------------------------
    Sidebar Tab Carousel
------------------------------ */ 
    $(".sidebar-tab-carousel").owlCarousel({
        autoPlay: false, 
        slideSpeed:2000,
        pagination:false,
        navigation:true,	  
        items : 3,
        /* transitionStyle : "fade", */    /* [This code for animation ] */
        navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        itemsDesktop : [1199,2],
        itemsDesktopSmall : [980,2],
        itemsTablet: [768,1],
        itemsMobile : [479,1]
    });
/*----------------------------
    Home Two Blog Carousel
------------------------------ */ 
    $(".blog-carousel-home-two").owlCarousel({
        autoPlay: false, 
        slideSpeed:2000,
        pagination:false,
        navigation:true,	  
        items : 4,
        /* transitionStyle : "fade", */    /* [This code for animation ] */
        navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [980,2],
        itemsTablet: [768,1],
        itemsMobile : [479,1]
    });
/*----------------------------
    Special Product Carousel
------------------------------ */ 
    $(".special-product-carousel").owlCarousel({
        autoPlay: false, 
        slideSpeed : 200,
        pagination:false,
        navigation:true,	  
        items : 1,
        /* transitionStyle : "fade", */    /* [This code for animation ] */
        navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [980,1],
        itemsTablet: [768,1],
        itemsMobile : [479,1]
    });
/*-------------------------------
    Product Details Tab Carousel
--------------------------------- */ 
    $(".p-details-slider").owlCarousel({
        autoPlay: false, 
        slideSpeed : 200,
        pagination:false,
        navigation:true,	  
        items : 4,
        /* transitionStyle : "fade", */    /* [This code for animation ] */
        navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [980,4],
        itemsTablet: [768,4],
        itemsMobile : [479,3]
    });
  
/*--------------------------
    scrollUp
---------------------------- */	
	$.scrollUp({
        scrollText: '',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    }); 	
    
/*--------------------------
    Sticky Js 
---------------------------- */	
    $("#sticker").sticky({topSpacing:0});
    
/*------------------------------------------
    Billing Old and New Address toggle function
--------------------------------------------*/
    $("#ship-box").on('click', function(){
        $("#ship-box-info").slideToggle();
		$("#shipping-box-info").css("display","none");
    });
	$("#shipping-box").on('click', function(){
        $("#shipping-box-info").slideToggle();
		$("#ship-box-info").css("display","none");
    });    
    
/*------------------------------------------
    Delivery Old and New Address toggle function
---------------------------------------------*/
    $("#delivery-add").on('click', function(){
        $("#delivery-add-info").slideToggle();
		$("#delivery-new-add-info").css("display","none");
    });
	$("#delivery-new-add").on('click', function(){
        $("#delivery-new-add-info").slideToggle();
		$("#delivery-add-info").css("display","none");
    });
    
/*------------------------------------
    Tooltip
-------------------------------------- */
    $('[data-toggle="tooltip"]').tooltip(); 
    
/*-------------------------------------------
    ElevateZoom
-------------------------------------------- */ 
    $("#zoom1").elevateZoom({
        gallery:'gallery_01',
        responsive : true, 
        galleryActiveClass: "active", 
        imageCrossfade: true,
        easing : true,
        cursor: "crosshair",
        zoomWindowFadeIn: 300,
        zoomWindowFadeOut: 350
    });
    
})(jQuery); 