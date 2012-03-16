$(function(){
			$(window)._scrollable();

			// height variables
			var reflexPoint = 2667;
			var heightS = [2777,2327,1877,3307,1147];	// < based on background image heights

			// sliding info menu
			$('#infographic-menu img').css('cursor','pointer').toggle(function() {
				$(this).parent().parent().stop().animate({
					right: 0
				}, 500);
				this.src = "images/modal-close.png";
			}, function() {
				$(this).parent().parent().stop().animate({
					right: -347
				}, 500);
				this.src = "images/modal-open.png";
			});
			function showIt(q) {
				q.parent().animate({
					right: 0
				});
			}

			//footer return switch
			//$('.footer img').click(function() {
			//	$(window).scrollTo(0,600);
			//});

			// where am i? lock menu?
			function checkPos(y) {
				if(y<reflexPoint ) {
						$('.sticky-nav').removeClass('fixed');
				} else {
						$('.sticky-nav').addClass('fixed');
				}
			}

			// as you scroll, check position
			$(window).scroll(function(){
				var y = $(window).scrollTop();
				checkPos(y);
			});

			// zero stage for click-for-content
			$("#content-stor .fram").hide();

			// flip stage on sticky nav click
			$('.sticky-nav li a').click(function(event) {
    			event.preventDefault();
    			$(".sticky-nav-grey").removeClass("sticky-nav-grey").addClass("sticky-nav-green");
    			$(this).removeClass('sticky-nav-green').addClass('sticky-nav-grey');
    			var hook = $(this).parent().attr('id');
    			hook = hook.substring(3);
    			var latch = parseInt(hook.substring(1))-1;
    			$('#content-stor .fram > :not(#'+hook+'_hype_container)').hide();
    			$('#content-stor .fram ##'+hook+'_hype_container').show();
    			if($("#content-stor .fram").is(":visible")) {
    				$("landing_hype_container").css('height',2774+heightS[latch]+'px');
      				});
    			} else {
	    			$("landing_hype_container").css('height','2774 px');
    			}
			});
		$('.help_map a').click(function(event) {
			event.preventDefault()	
			var hook = $(this).parent().attr('id');
    			hook = hook.substring(3);
    			$(".sticky-nav-grey").removeClass("sticky-nav-grey").addClass("sticky-nav-green");
    			$('#sc-'+hook+' a').removeClass("sticky-nav-green").addClass("sticky-nav-grey");
    			var latch = parseInt(hook.substring(1))-1;
    			if($("#content-stor .fram").is(":visible")) {
    				$("landing_hype_container").css('height','2774''px')
    				$("#content-stor .fram:visible").slideUp(400, function () {
		    			$('#content-stor #'+hook+'_hype_container').slideDown(400, function() {
							$(window).scrollTo(reflexPoint, 600);
						});
    				});
    			} else {
	    			$('#content-stor #'+hook+'_hype_container').slideDown(400, function() {
						$(window).scrollTo(reflexPoint, 600);
					});
    			}

			});
		$("#map-00").click(function(event) {
			event.preventDefault()	
			$(window).scrollTo(0, 800);
		});
		});
	</script>