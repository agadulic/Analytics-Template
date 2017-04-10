		/*
		    $(window).on("scroll", function() {
            var innerBar = $(".inner-bar");
            var yScroll = window.pageYOffset;
            var position = $("#progressbars").offset().top;

            if (yScroll > position - 10) {

                $.each(innerBar, function(index, value) {
                    $(this).animate({
                        width: $(this).data("percent")
                    }, 1500);
                });
            }
        });
		*/

		//progress bars

	    $(function(){
        $('.inner-bar').each(function(){
           $(this).animate({
               width: $(this).data('percent')
						 }, 2000);
			});
		})

		//responsive

		function toggleSidebar() {
		  $('button').toggleClass('');
		  $('#light-grey').toggleClass('');
		  $('').toggleClass('');
		}

		$('.button').on('click tap', function() {
		  toggleResponsive();
		});
		$(document).keyup(function(e) {
		  if (e.keyCode === 27) {
		    toggleResponsive();
		  }
		});

		//alerts

		var close = document.getElementsByClassName("closebtn");
		var i;

		for (i = 0; i < close.length; i++) {
		    close[i].onclick = function(){
		        var div = this.parentElement;
		        div.style.opacity = "0";
		        setTimeout(function(){ div.style.display = "none"; }, 600);
		    }
		}

		//Google Map

     	function initMap() {
	        var uluru = {lat: -25.363, lng: 131.044};
	        var map = new google.maps.Map(document.getElementById('map'), {
	          zoom: 4,
	          center: uluru
	        });
	        var marker = new google.maps.Marker({
	          position: uluru,
	          map: map
	        });
	    }

	    // Validating Empty Field
		function check_empty() {
			if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
				alert("Fill All Fields !");
			} else {
				document.getElementById('form').submit();
				alert("Form Submitted Successfully...");
			}
		}
		//Function To Display Popup
		function div_show() {
			document.getElementById('abc').style.display = "block";
		}
		//Function to Hide Popup
		function div_hide(){
			document.getElementById('abc').style.display = "none";
		}