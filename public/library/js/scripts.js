/*
 * Get Viewport Dimensions
 * returns object with viewport dimensions to match css in width and height properties
 * ( source: http://andylangton.co.uk/blog/development/get-viewport-size-width-and-height-javascript )
*/
function updateViewportDimensions() {
	var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;
	return { width:x,height:y };
}
// setting the viewport width
var viewport = updateViewportDimensions();


/*
 * Throttle Resize-triggered Events
 * Wrap your actions in this function to throttle the frequency of firing them off, for better performance, esp. on mobile.
 * ( source: http://stackoverflow.com/questions/2854407/javascript-jquery-window-resize-how-to-fire-after-the-resize-is-completed )
*/
var waitForFinalEvent = (function () {
	var timers = {};
	return function (callback, ms, uniqueId) {
		if (!uniqueId) { uniqueId = "Don't call this twice without a uniqueId"; }
		if (timers[uniqueId]) { clearTimeout (timers[uniqueId]); }
		timers[uniqueId] = setTimeout(callback, ms);
	};
})();

// how long to wait before deciding the resize has stopped, in ms. Around 50-100 should work ok.
var timeToWaitForLast = 100;



/*

	Equal heights function. Uncomment this to use it.
	Usage is as follow:

		equalheight('.classname');

	// Equal height for divs - Taken from here -http://codepen.io/micahgodbolt/pen/FgqLc
	equalheight = function(container) {

		var currentTallest = 0,
		currentRowStart = 0,
		rowDivs = new Array(),
		$el,
		topPosition = 0;

		jQuery(container).each(function() {

			$el = jQuery(this);
			jQuery($el).innerHeight('auto');
			topPostion = $el.position().top;

			if (currentRowStart != topPostion) {

				for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
					rowDivs[currentDiv].innerHeight(currentTallest);
				}

				rowDivs.length = 0; // empty the array
				currentRowStart = topPostion;
				currentTallest = $el.innerHeight();
				rowDivs.push($el);

			} else {

				rowDivs.push($el);
				currentTallest = (currentTallest < $el.innerHeight()) ? ($el.innerHeight()) : (currentTallest);

			}
			for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {

				rowDivs[currentDiv].innerHeight(currentTallest);

			}

		});

	};

*/



/*

	Variables

*/
var wrapIndent				= '';



jQuery(document).ready(function($) {



	/*

	    Prevent links with # href doing anything.

	*/
	$('a[href="#"]').on('click', function(e) {
		e.preventDefault();
	});



	/*

	    Any video within .content will be fitvidded.
	    https://github.com/davatron5000/FitVids.js

	*/
	$(".content").fitVids();



	/*

		Generic primary nav toggle. This will most likely
		change per project but it's a start.

	*/
	$('.nav--primary--toggle').on('click', function() {

		if ( $('.nav--primary').hasClass('visible') ) {

			$('.nav--primary').removeClass('visible');
			$('.nav--primary').find('.nav--primary--links').slideUp('fast');

		} else {

			$('.nav--primary').addClass('visible');
			$('.nav--primary').find('.nav--primary--links').slideDown('fast');

		}

	});



	/*

		Sitewide to set an image as a background. Styling for this
		can be found in modules/images.scss

	*/
	$('.bg-image').each(function() {

		var url = $(this).find('.bg-image--src').attr('src');
		$(this).css('background-image', 'url("'+ url +'")');

	});



	/*

		Accordion toggles

		NOTE - This may need to be removed if Accordians aren't used on the site

	*/
	if($('.accordion').length > 0) {

		$('.accordion--toggle').click(function() {

			var parentAccordion			= $(this).parent();
			var siblings				= $(this).siblings('.accordion--content');

			if(parentAccordion.hasClass('visible')) {

				parentAccordion.removeClass('visible');
				siblings.slideUp('fast');

			} else {

				if($('.accordion.visible').length > 0) {

					$('.accordion.visible .accordion--content').slideUp('fast');
					$('.accordion.visible').removeClass('visible');

					setTimeout(function() {
						parentAccordion.addClass('visible');
						siblings.slideDown('fast');
					}, 250);

				} else {

					parentAccordion.addClass('visible');
					siblings.slideDown('fast');

				}

			}



		});

	}




	/*

		Run functions

	*/




});



jQuery( window ).load(function() {



	// Variable Updates
	wrapIndent			= jQuery('.wrap').offset();
	viewport 			= updateViewportDimensions();



	/*

		Run functions

	*/



});



jQuery( window ).resize(function() {



	// Variable Updates
	wrapIndent			= jQuery('.wrap').offset();
	viewport 			= updateViewportDimensions();



	/*

		Primary navigtaion removing inline styles

	*/
	if(viewport.width >= 800) {
		jQuery('.nav--primary').removeAttr('style');
		jQuery('.nav--primary').removeClass('visible');
		jQuery('.nav--primary--links').removeAttr('style');
	}



	/*

		Run functions

	*/



});
