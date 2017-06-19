 $(document).ready(function() {

			function initialization(){
				$('#myContainer').fullpage({
					sectionsColor: ['#303F9F', '#C2185B', '#3F51B5', '#536DFE'],
					anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
					navigationTooltips: ['Hi', 'Get to know me', 'Projects', 'Get in touch'],
					resize: false,
					animateAnchor:false,
					scrollOverflow: false,
					autoScrolling: false,
					responsive: 900,
					scrollingSpeed: 500,
					fitSection: false,
					menu: '#menu',
					navigation:true,
					continuousVertical:true,
					paddingTop: '20px',
					css3: true,
					onLeave: function(index, nextIndex, direction){
						console.log('onLeave--' + 'index: ' + index + ' nextIndex: ' + nextIndex + ' direction: ' +  direction);
					},
					afterLoad: function(anchorLink, index){
						console.log('afterLoad--' + 'anchorLink: ' + anchorLink + ' index: ' + index );
					},
					afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
						console.log('afterSlideLoad--' + 'anchorLink: ' + anchorLink + ' index: ' + index + ' slideAnchor: ' + slideAnchor + ' slideIndex: ' + slideIndex);
					},
					onSlideLeave: function(anchorLink, index, slideIndex, direction){
						console.log('onSlideLeave--' + 'anchorLink: ' + anchorLink + ' index: ' + index + ' slideIndex: ' + slideIndex + ' direction: ' + direction);
					},
					afterRender: function(){
						console.log('afterRender');
					},
					afterResize: function(){
						console.log('afterResize');
					}
				});
			}

			//fullPage.js initialization
			initialization();


			$('#moveSectionUp').click(function(e){
				e.preventDefault();
				$.fn.fullpage.moveSectionUp();
			});

			$('#moveSectionDown').click(function(e){
				e.preventDefault();
				$.fn.fullpage.moveSectionDown();
			});

			$('#moveTo').click(function(e){
				e.preventDefault();
				$.fn.fullpage.moveTo(2, 3);
			});

			$('#silentMoveTo').click(function(e){
				e.preventDefault();
				$.fn.fullpage.silentMoveTo(2);
			});

			$('#silentMoveToSlide').click(function(e){
				e.preventDefault();
				$.fn.fullpage.silentMoveTo(2, 3);
			});

			$('#moveSlideRight').click(function(e){
				e.preventDefault();
				$.fn.fullpage.moveSlideRight();
			});

			$('#moveSlideLeft').click(function(e){
				e.preventDefault();
				$.fn.fullpage.moveSlideLeft();
			});

			$('#setAutoScrollingFalse').click(function(e){
				e.preventDefault();
				$.fn.fullpage.setAutoScrolling(false);
			});

			$('#setAutoScrollingTrue').click(function(e){
				e.preventDefault();
				$.fn.fullpage.setAutoScrolling(true);
			});

			$('#setAllowScrollingFalse').click(function(e){
				e.preventDefault();
				$.fn.fullpage.setAllowScrolling(false);
			});

			$('#setAllowScrollingTrue').click(function(e){
				e.preventDefault();
				$.fn.fullpage.setAllowScrolling(true);
			});

			$('#setKeyboardScrollingFalse').click(function(e){
				e.preventDefault();
				$.fn.fullpage.setKeyboardScrolling(false);
			});

			$('#setKeyboardScrollingTrue').click(function(e){
				e.preventDefault();
				$.fn.fullpage.setKeyboardScrolling(true);
			});

			$('#setScrollingSpeed1500').click(function(e){
				e.preventDefault();
				$.fn.fullpage.setScrollingSpeed(2500);
			});
				$(function() {
				// say we want to have only one item opened at one moment
				var opened = false;

				$( '#grid > div.uc-container' ).each( function( i ) {
					var $item = $( this ), direction;
					switch( i ) {
						case 0 : direction = ['right','bottom']; break;
						case 1 : direction = ['left','bottom']; break;
						case 2 : direction = ['right','top']; break;
						case 3 : direction = ['left','top']; break;
					}
					var pfold = $item.pfold( {
						folddirection : direction,
						speed : 300,
						onEndFolding : function() { opened = false; },
					} );

					$item.find( 'span.icon-eye' ).on( 'click', function() {

						if( !opened ) {
							opened = true;
							pfold.unfold();
						}
					} ).end().find( 'span.icon-cancel' ).on( 'click', function() {

						pfold.fold();

					} );

				} );
				
			});

$('.thumb-desc0').hover(function () {
    $('.hover-it0').fadeToggle('slow').css('visibility', 'visible');    
 });
$('.thumb-desc1').hover(function () {
    $('.hover-it1').fadeToggle('slow').css('visibility', 'visible');
 });
$('.thumb-desc2').hover(function () {
    $('.hover-it2').fadeToggle('slow').css('visibility', 'visible');
 });
$('.thumb-desc3').hover(function () {
    $('.hover-it3').fadeToggle('slow').css('visibility', 'visible');
 });
$('.thumb-desc4').hover(function () {
    $('.hover-it4').fadeToggle('slow').css('visibility', 'visible');
 });
$('.thumb-desc5').hover(function () {
    $('.hover-it5').fadeToggle('slow').css('visibility', 'visible');
 });
$('.thumb-desc6').hover(function () {
    $('.hover-it6').fadeToggle('slow').css('visibility', 'visible');
 });
$('.thumb-desc7').hover(function () {
    $('.hover-it7').fadeToggle('slow').css('visibility', 'visible');
 });

				
		});

 