/*jshint browser:true */
/*!
* FitVids 1.1
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
*/

;(function( $ ){

  'use strict';

  $.fn.fitVids = function( options ) {
    var settings = {
      customSelector: null,
      ignore: null
    };

    if(!document.getElementById('fit-vids-style')) {
      // appendStyles: https://github.com/toddmotto/fluidvids/blob/master/dist/fluidvids.js
      var head = document.head || document.getElementsByTagName('head')[0];
      var css = '.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}';
      var div = document.createElement("div");
      div.innerHTML = '<p>x</p><style id="fit-vids-style">' + css + '</style>';
      head.appendChild(div.childNodes[1]);
    }

    if ( options ) {
      $.extend( settings, options );
    }

    return this.each(function(){
      var selectors = [
        'iframe[src*="player.vimeo.com"]',
        'iframe[src*="youtube.com"]',
        'iframe[src*="youtube-nocookie.com"]',
        'iframe[src*="kickstarter.com"][src*="video.html"]',
        'object',
        'embed'
      ];

      if (settings.customSelector) {
        selectors.push(settings.customSelector);
      }

      var ignoreList = '.fitvidsignore';

      if(settings.ignore) {
        ignoreList = ignoreList + ', ' + settings.ignore;
      }

      var $allVideos = $(this).find(selectors.join(','));
      $allVideos = $allVideos.not('object object'); // SwfObj conflict patch
      $allVideos = $allVideos.not(ignoreList); // Disable FitVids on this video.

      $allVideos.each(function(count){
        var $this = $(this);
        if($this.parents(ignoreList).length > 0) {
          return; // Disable FitVids on this video.
        }
        if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; }
        if ((!$this.css('height') && !$this.css('width')) && (isNaN($this.attr('height')) || isNaN($this.attr('width'))))
        {
          $this.attr('height', 9);
          $this.attr('width', 16);
        }
        var height = ( this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10))) ) ? parseInt($this.attr('height'), 10) : $this.height(),
            width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
            aspectRatio = height / width;
        if(!$this.attr('id')){
          var videoID = 'fitvid' + count;
          $this.attr('id', videoID);
        }
        $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+'%');
        $this.removeAttr('height').removeAttr('width');
      });
    });
  };
// Works with either jQuery or Zepto
})( window.jQuery || window.Zepto );
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
