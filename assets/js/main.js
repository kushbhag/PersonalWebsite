/*
	Caminar by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

(function($) {

	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)'
	});

	$(function() {

		var	$window 	= $(window),
			$body 		= $('body'),
			$header 	= $('#header');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Gallery.
			$('.gallery').poptrox();

	});

})(jQuery);

$(document).ready(function(){
	$(document).on('click', '.buttonout', function(){
		$('.backgroundEff').toggle(false);
		$('#nav-content').toggle(true);
		$('#nav-container .bg').toggle(true);
	});
});



// Scrolling Button Animation
	$(function(){
		var newHeight = $(window).width();
		var offsetTop = 0;

		if (newHeight > 1580){
		  offsetTop = 70;
		} else if (newHeight > 980) {
			offsetTop = 120;
		} else {
			offsetTop = 40;
		}
		$('a[href*=#]').on('click', function(e) {
			e.preventDefault();
			$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - offsetTop}, 'slow');
		});
	});

// Changing opacity of Header
var target = $('#realheader');
var anchor = $('.backgroundEff__inner');
var targetHeight = anchor.outerHeight();

$(document).scroll(function(e){
    var scrollPercent = (window.scrollY -targetHeight) / targetHeight;
		if (scrollPercent >= 0) {
				target.css('opacity', (scrollPercent) * 1.1);
    } else if(scrollPercent < 0){
				target.css('opacity', 0.2);
    }
});

// ANIMATION ON LOGO TEXT
// Wrap every letter in a span
$('.logo .letters').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline()
  .add({
    targets: '.logo .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 1000
  })
  .add({
    targets: '.logo .line',
    translateX: [0,$(".logo .letters").width()],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.logo .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: function(el, i) {
      return 34 * (i+1)
    }
  }).add({
    targets: '.line',
    opacity: 0,
    duration: 600,
    easing: "easeOutExpo",
    delay: 1000
  });
