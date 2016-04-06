$( document ).ready( function() {

	//Mobile Menu icon
	$( ".mobMenu__icon" ).on( "click", function(){

	
			if( !$( ".mobMenu__icon--x" ).hasClass( "active" ) ) {

					$( ".headerMenu" ).removeClass( "headerMenu--mob--default" ).addClass( "headerMenu--mob--active" );
					$( ".headerMenu--mob" ).addClass( "appear" );
					$( ".mobMenu__icon--x" ).addClass( "active" );
			}

			else if ( $( ".mobMenu__icon--x" ).hasClass( "active" ) ) {

				$( ".headerMenu" ).removeClass( "headerMenu--mob--active" ).addClass( "headerMenu--mob--default" );
				$( ".headerMenu--mob" ).removeClass( "appear" );
				$( ".mobMenu__icon--x" ).removeClass( "active" );
			}

	});

	//Click on menu items and close the menu bar if active

	$( ".headerMenu" ).on( "click", "a[href^=\\#]", function () {

	    $( "html, body" ).animate({

			scrollTop:  $('section[data-attr-target="'+this.hash.slice(1)+'"]').offset().top},
			{duration: 300,

		    	complete: function() {

					$( ".headerMenu--mob" ).removeClass( "appear" );
			        $( ".headerMenu" ).removeClass( "headerMenu--mob--active" ).addClass( "headerMenu--mob--default" );
			        $( ".mobMenu__icon--x" ).removeClass( "active" );
	       		}

  		});

	});


	//Parallax Ads and Tour sections
	function parallax() {

		var $adsLogo = $( ".ads__logo" ),
			$adsContent = $( ".ads__content" ),
			$tourContent = $( ".tour__content" );

		$adsLogo.css({
			"top" : -( window.pageYOffset / 3.2 ) + 100 + "px"
		})

		$adsContent.add( $tourContent ).css({
			"top" : -( window.pageYOffset / 9 ) + 230 + "px"
		})

	}
		
	window.addEventListener( "scroll", parallax, false );


	//Screen resizing when Mobile menu is active
	$( window ).resize( function() {

		if ( $( window ).width() > 550 ) {

			if ( $( ".mobMenu__icon--x" ).hasClass( "active" ) ) {

				$( ".headerMenu" ).removeClass( "headerMenu--mob--active" ).addClass( "headerMenu--mob--default" );
				$( ".headerMenu--mob" ).removeClass( "appear" );
				$( ".mobMenu__icon--x" ).removeClass( "active" );
			}

		}

	});


	//Waypoints Rules & Prizes items when scrolling 
	$( ".rules__content" ).waypoint( function( dir ){

		if( dir === "down" ) {
			$( ".buds" ).add( $( ".pads" ) ).add( $( ".napkins" ) ).removeClass( "invisible" ).addClass( "fadeInUp" )
		}

	}, { offset: "bottom-in-view" })

	$( ".prizes__header" ).waypoint( function( dir ){
		if( dir === "down" ) {
			$( ".prizes__content > div" ).removeClass( "invisible" ).addClass( "fadeInUp" )
		}
	}, { offset: "25%" })

});