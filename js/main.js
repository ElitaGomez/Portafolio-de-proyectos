// JavaScript Document
 
/* ==========================================================================
   NOTE:
   This file is being used to activate and/or set options for all jQuery plugins
   for this template. Please don't modify this file unless necessary. This will 
   make it easy for you to upgrade your website with new template files easily 
   when new version of this template will be available.    
   --------------------------------------------------------------------------
    TABLE OF CONTENT
   --------------------------------------------------------------------------
   01. preloader animation
   02. on-scroll navbar animation
   03. megamenu dropdown effect
   04. bouncing arrow ( page-header )
   05. init parallax effect
   06. offcanvas navigation open/close button
   07. custom scroll bar for offcanvas navigation
   08. search pop-up
   09. shopping cart pop-up
   10. full-screen intro section
   11. iCheck settings (to style the checkboxes and redio buttons)
   12. custom select list
   13. spinedit (spinner form element)
   14. carousels
   15. fun facts (counter)
   16. magnific popup (lightbox)
   17. mailchimp settings
   18. tooltip settings
   19. Horizontal Tabs
   20. Vertical Tabs
   21. UX accordion
   22. testimonials
   23. portfolio love system
   24. updating portfolio selected category title
   25. custom bakcground image using ( data-bg )
   26. flickr feed
   27. twitter feed
   28. responsive video settings
   29. back to top button
   30. progress bars
   ========================================================================== */

$( document ).ready( function(){
	
	'use strict';	
	
	/*		
	01. preloader animation
	*/
    $('.spinner-wrap').fadeOut();
	$('.preloader').delay(500).fadeOut('slow');
	
	/*
	02. on-scroll navbar animation
	*/
	$( function(){
		if ( $(".navbar").offset().top > 50 ) {
			$( ".navbar-fixed-top" ).addClass( "top-nav-collapse" );
		} else {
			$( ".navbar-fixed-top" ).removeClass( "top-nav-collapse" );
		}
	});
	$( window ).scroll( function() {
		if ( $( ".navbar" ).offset().top > 50 ) {
			$( ".navbar-fixed-top" ).addClass( "top-nav-collapse" );
		} else {
			$( ".navbar-fixed-top" ).removeClass( "top-nav-collapse" );
		}
	});
	
	/*
	03. megamenu dropdown effect
	*/
	$('.dropdown-toggle').dropdownHover().dropdown();
	$(document).on('click', '.mega-menu .dropdown-menu', function(e) {
		e.stopPropagation()
	});
	
	/*
	04. bouncing arrow ( page-header )
	*/
	$('.bounce, .jump-to, .ux-hash-nav li a').on('click', function(){	
		var el = jQuery(this).attr('href');
		var elWrapped = jQuery(el);		
		scrollToDiv(elWrapped,40);
		return false;	
	});
	function scrollToDiv(element,navheight){	
		var offset = element.offset();
		var offsetTop = offset.top;
		var totalScroll = offsetTop-navheight;		
		jQuery('body,html').animate({
				scrollTop: totalScroll
		}, 1000);
	}
	
	/*
	05. init parallax effect
	*/
	$( '.parallax' ).jarallax({
		speed: 0.5,
		imgWidth: 1366,
		imgHeight: 768
	}); 
		
	/*
	06. offcanvas navigation open/close button
	*/
	$( '[data-toggle="offcanvas"]' ).click( function () {
		$('.row-offcanvas').toggleClass('active')
	});
	
	/*
	07. custom scroll bar for offcanvas navigation
	*/
	$('.scroll-bar-wrapper, .cart-wrapper .cart-items').mCustomScrollbar({
		scrollButtons:{enable:false},
		theme:"minimal"
	});
	$(window).resize(function(){
		$('.scroll-bar-wrapper, .cart-wrapper .cart-items').mCustomScrollbar({
			scrollButtons:{enable:false},
			theme:"minimal"
		});		
	});
	
	/*
	08. search pop-up
	*/
	$( '.search-btn' ).on( 'click', function(){
		$(' .search-popup ').toggleClass( 'open-now' );
	});
	$( '.search-popup .close-it' ).on( 'click', function(){
		$(' .search-popup ').removeClass( 'open-now' );
	});
	
	/*
	09. shopping cart pop-up
	*/
	$( '.cart-btn' ).on( 'click', function(){
		$(' .cart-popup ').toggleClass( 'open-now' );
	});
	$( '.cart-popup .close-it' ).on( 'click', function(){
		$(' .cart-popup ').removeClass( 'open-now' );
	});
	
	/*
	10. full-screen intro section
	*/
	function fullScreen() {
	  var introHeight = $(window).height();
	  $(".full-screen").css('height',introHeight); 	  
	}
	fullScreen();
	$(window).bind('resize', fullScreen);
	
	/*
	11. iCheck settings (to style the checkboxes and redio buttons)
	*/
	$('input').iCheck({
		checkboxClass: 'icheckbox_square',
		radioClass: 'iradio_square',
		increaseArea: '20%' // optional
	});	
	
	/*
	12. custom select list
	*/
	$('.select').selectik({
		minScrollHeight: 20
	});
	
	/*
	13. spinedit (spinner form element)
	*/
	$('.spin').spinedit({
		minimum: -10000,
		maximum: 10000,
		step: 1,
		value: 1,
		numberOfDecimals: 0
	});	
	
	/*
	14. carousels
	*/
	//image carousel
	$('.ux-slides').owlCarousel({
		rewind:true,
		margin:10,
		items:1,
		nav:true,
		lazyLoad:true,
		video:true,
		videoHeight:200,
		merge:true,
		loop:true,
		center:true,
		animateOut:'fadeOut',
		navText:['<i class="ti-arrow-left"></i><span>prev</span>','<span>next</span><i class="ti-arrow-right"></i>']
	});
	//initializing carousel again when ajax content is loaded in portfolio-single-page.html
	$("#portfolio-wrapper").on('updateSinglePageInlineStart.cbp', function() {
		$('#portfolio-wrapper .ux-slides').owlCarousel({
			rewind:true,
			margin:10,
			items:1,
			nav:true,
			lazyLoad:true,
			video:true,
			videoHeight:200,
			merge:true,
			loop:true,
			center:true,
			animateOut:'fadeOut',
			navText:['<i class="ti-arrow-left"></i><span>prev</span>','<span>next</span><i class="ti-arrow-right"></i>']
		});
	});
	//clients (logos) carousel
	$('.clients-carousel').owlCarousel({
		autoplay:true,
		autoplayHoverPause:true,
		rewind:true,		
		items:5,
		responsive:{
			0:{
				items:1
			},
			320:{
				items:2
			},
			480:{
				items:3
			},
			767:{
				items:4
			},
			1140:{
				items:5
			},
			1600:{
				items:6
			},
			2400:{
				items:7
			}
		},
		margin:30,		
		nav:false,
		dots:false,
		lazyLoad:true,
		merge:true,
		loop:true,
		animateOut:'fadeOut',
		navText:['<i class="ti-arrow-left"></i><span>prev</span>','<span>next</span><i class="ti-arrow-right"></i>']
	});
	//meet the team carousel
	$('.team-carousel').owlCarousel({
		autoplay:true,
		autoplayHoverPause:true,
		rewind:true,
		responsive:{
			0:{
				items:1
			},
			620:{
				items:2
			},
			992:{
				items:3
			}
		},
		lazyLoad:true,
		margin:30,		
		nav:false,
		dots:false,
		merge:true,
		loop:true,
		animateOut:'fadeOut',
		navText:['<i class="ti-arrow-left"></i><span>prev</span>','<span>next</span><i class="ti-arrow-right"></i>']
	});
	
	/*
	15. fun facts (counter)
	*/
	$(".fun-counter").appear(function(){
		var count = $(this);
		count.countTo({
			from: 0,
			to: count.html(),
			speed: 3000,
			refreshInterval: 10
		});		
	});	
	
	/*
	16. magnific popup (lightbox)
	*/
	$('.lightbox').magnificPopup({
		removalDelay: 300, 		
		mainClass: 'mfp-with-zoom'
	});
	uxGalleryInit();
	//initializing popup again when ajax content is loaded in gallery pages
	$("#gallery-wrapper").on('pluginResize.cbp', function() {
		uxGalleryInit();
	});
	//to create image gallery use 'gallery-item' class on <a> tags
	function uxGalleryInit(){
		$('.ux-gallery').magnificPopup({
			removalDelay: 300, 		
			mainClass: 'mfp-with-zoom', // this class is for CSS animation below
			zoom: {
				enabled: true, // By default it's false, so don't forget to enable it
				duration: 300, // duration of the effect, in milliseconds
				easing: 'ease-in-out', // CSS transition easing function			
				// The "opener" function should return the element from which popup will be zoomed in
				// and to which popup will be scaled down
				// By defailt it looks for an image tag:
				opener: function(openerElement) {
					// openerElement is the element on which popup was initialized, in this case its <a> tag
					// you don't need to add "opener" option if this code matches your needs, it's defailt one.
					return openerElement.is('img') ? openerElement : openerElement.find('img');
				}
			},
			gallery: {
				enabled: true, // set to true to enable gallery			
				preload: [1,1], // read about this option in next Lazy-loading section			
				navigateByImgClick: true,			
				arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button			
				tPrev: 'Previous (Left arrow key)', // title for left button
				tNext: 'Next (Right arrow key)', // title for right button
				tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
			}
		});
	}
	
	/*
	17. mailchimp settings
	*/
	$('#mailchimp').ajaxChimp({
		callback: mailchimpCallback,
		url: "http://oscodo.us9.list-manage.com/subscribe/post?u=aef5e76b30521b771cf866464&amp;id=f9f9e8db45"
		//replace above url with your own mailchimp post url inside the "".
		//to learn how to get your own URL, please check documentation file.
	});	
	function mailchimpCallback(resp) {
		 if (resp.result === 'success') {
			$('#mailchimp .subscription-success').html('<i class="icon_check_alt2"></i>' + resp.msg).slideDown(1000);
			$('#mailchimp .subscription-error').slideUp(500);
			
		} else if(resp.result === 'error') {
			$('#mailchimp .subscription-success').slideUp(500);
			$('#mailchimp .subscription-error').html('<i class="icon_close_alt2"></i>' + resp.msg).slideDown(1000);
		}  
	}
	
	/*
	18. tooltip settings
	*/
	$('[data-toggle="tooltip"]').tooltip();
	
	/*
	19. Horizontal Tabs
	*/
	$('.horizontal-tabs').easyResponsiveTabs({
		type: 'default', //Types: default, vertical, accordion
		width: 'auto', //auto or any width like 600px
		fit: true, // 100% fit in a container
		tabidentify: 'hor_1', // The tab groups identifier
		activate: function(event) { // Callback function if tab is switched
			var $tab = $(this);
			var $info = $('#nested-tabInfo');
			var $name = $('span', $info);
			$name.text($tab.text());
			$info.show();
		}
	});
	
	/*
	20. Vertical Tabs
	*/
	$('.vertical-tabs').easyResponsiveTabs({
		type: 'vertical', //Types: default, vertical, accordion
		width: 'auto', //auto or any width like 600px
		fit: true, // 100% fit in a container
		closed: 'accordion', // Start closed if in accordion view
		tabidentify: 'hor_1', // The tab groups identifier
		activate: function(event) { // Callback function if tab is switched
			var $tab = $(this);
			var $info = $('#nested-tabInfo2');
			var $name = $('span', $info);
			$name.text($tab.text());
			$info.show();
		}
	});
	
	/*
	21. UX accordion
	*/
	$('.ux-accordion').easyResponsiveTabs({
		type: 'accordion', //Types: default, vertical, accordion
		width: 'auto', //auto or any width like 600px
		fit: true, // 100% fit in a container
		closed: '', // Start closed if in 'accordion' view
		tabidentify: 'hor_1', // The tab groups identifier
		activate: function(event) { // Callback function if tab is switched
			var $tab = $(this);
			var $info = $('#nested-tabInfo2');
			var $name = $('span', $info);
			$name.text($tab.text());
			$info.show();
		}
	});
	
	/*
	22. testimonials
	*/
	$('.ux-testimonials').owlCarousel({
		rewind:true,
		margin:10,
		items:1,
		autoplayTimeout:6500,
		nav:false,
		autoplay:true,	
		animateIn:'fadeIn',
		animateOut:'fadeOut'
	});
	
	/*
	23. portfolio love system
	*/
	$(document).on('click', 'a.love-it', function(e){
		$(this).find('i').addClass('fa-heart').removeClass('fa-heart-o');
	});
	
	/*
	24. updating portfolio selected category title
	*/
	$('.cbp-filter-item').on('click', function(){
		var projectTitle = $(this).text();
		$(this).parents().find('.folio-cat-title').find('.page-header').text(projectTitle);
	 });
	 
	 /*
	 25. custom bakcground image using ( data-bg )
	 */
	$( ".img-bg" ).each(function() {
		var attr = $(this).attr('data-bg');
		if (typeof attr !== typeof undefined && attr !== false) {
			$(this).css('background', 'url('+attr+')');
		}
	});
	
	/*
	26. flickr feed
	*/
	$('.flickr-feed').jflickrfeed({
		limit: 12,
		qstrings: {
			id: '52617155@N08'
		},
		itemTemplate: '<li><a href="{{image_b}}"><img src="{{image_s}}" alt="{{title}}" /></a></li>'
	});
	
	/*
	27. twitter feed
	*/
	$('#tweets').tweecool({
		username : 'oscodoco',
		limit:3,
		profile_image : true,
		show_time : true,
		show_media : false,
		show_media_size: 'thumb',  //values: small, large, thumb, medium 
		callback: function() {
			$('#tweets').find('ul').addClass('tweet-slider');
			$('.tweet-slider').owlCarousel({
				items:1
			});			
		}
	});
	
	/*
	28. responsive video settings
	*/
	$(".responsive-video").fitVids();
	
	/*
	29. back to top button
	*/
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
	//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
	offset_opacity = 1200,
	//duration of the top scrolling animation (in ms)
	scroll_top_duration = 700,
	//grab the "back to top" link
	$back_to_top = $('.go-top');
	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});
	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});
	
	
	/*
	30. progress bars
	*/
	$('.chart').appear(function(){
		$(this).easyPieChart({
			barColor: '#deb025',
			trackColor: '#111',
			scaleColor: false,
			lineCap: 'round',
			easing: 'easeOutBounce',
			rotate: -90,
			lineWidth: 5,
			size: 60,
			animate: 2000,
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});
	});
	
	
	
});
