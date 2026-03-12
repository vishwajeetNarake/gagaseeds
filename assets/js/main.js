/* ===================================================================
    
	Author          : Valid Theme
	Template Name   : Agrica - Organic Farm Agriculture Template
	Version         : 1.0
    
* ================================================================= */
(function ($) {
	"use strict";

	$(document).ready(function () {



		/* ==================================================
			# Tooltip Init
		===============================================*/
		$('[data-toggle="tooltip"]').tooltip();


		/* ==================================================
			# Youtube Video Init
		 ===============================================*/
		$('.player').mb_YTPlayer();



		/* ==================================================
			# Scrolla active
		===============================================*/
		$('.animate').scrolla();


		/* ==================================================
			# imagesLoaded active
		===============================================*/
		$('#gallery-masonary,#shop-masonary').imagesLoaded(function () {

			/* Filter menu */
			$('.mix-item-menu').on('click', 'button', function () {
				var filterValue = $(this).attr('data-filter');
				$grid.isotope({
					filter: filterValue
				});
			});

			/* filter menu active class  */
			$('.mix-item-menu button').on('click', function (event) {
				$(this).siblings('.active').removeClass('active');
				$(this).addClass('active');
				event.preventDefault();
			});

			/* Filter active */
			var $grid = $('#gallery-masonary').isotope({
				itemSelector: '.gallery-item',
				percentPosition: true,
				masonry: {
					columnWidth: '.gallery-item',
				}
			});

			/* Filter active */
			var $grid = $('#shop-masonary').isotope({
				itemSelector: '.product',
				percentPosition: true,
				masonry: {
					columnWidth: '.product',
				}
			});

		});


		/* ==================================================
			# Fun Factor Init
		===============================================*/
		$('.timer').countTo();
		$('.fun-fact').appear(function () {
			$('.timer').countTo();
		}, {
			accY: -100
		});

		/* ==================================================
			# Magnific popup init
		 ===============================================*/
		$(".popup-link").magnificPopup({
			type: 'image',
			// other options
		});

		$(".popup-gallery").magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			},
			// other options
		});

		$(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
			type: "iframe",
			mainClass: "mfp-fade",
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});

		$('.magnific-mix-gallery').each(function () {
			var $container = $(this);
			var $imageLinks = $container.find('.item');

			var items = [];
			$imageLinks.each(function () {
				var $item = $(this);
				var type = 'image';
				if ($item.hasClass('magnific-iframe')) {
					type = 'iframe';
				}
				var magItem = {
					src: $item.attr('href'),
					type: type
				};
				magItem.title = $item.data('title');
				items.push(magItem);
			});

			$imageLinks.magnificPopup({
				mainClass: 'mfp-fade',
				items: items,
				gallery: {
					enabled: true,
					tPrev: $(this).data('prev-text'),
					tNext: $(this).data('next-text')
				},
				type: 'image',
				callbacks: {
					beforeOpen: function () {
						var index = $imageLinks.index(this.st.el);
						if (-1 !== index) {
							this.goTo(index);
						}
					}
				}
			});
		});


		/* ==================================================
			_Progressbar Init
		 ===============================================*/
		function animateElements() {
			$('.progressbar').each(function () {
				var elementPos = $(this).offset().top;
				var topOfWindow = $(window).scrollTop();
				var percent = $(this).find('.circle').attr('data-percent');
				var animate = $(this).data('animate');
				if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
					$(this).data('animate', true);
					$(this).find('.circle').circleProgress({
						// startAngle: -Math.PI / 2,
						value: percent / 100,
						size: 130,
						thickness: 3,
						lineCap: 'round',
						emptyFill: '#f1f1f1',
						fill: {
							gradient: ['#49a760', '#49a760']
						}
					}).on('circle-animation-progress', function (event, progress, stepValue) {
						$(this).find('strong').text((stepValue * 100).toFixed(0) + "%");
					}).stop();
				}
			});

		}

		animateElements();
		$(window).scroll(animateElements);


		/* ==================================================
			# Banner Carousel
		 ===============================================*/
		const bannerFade = new Swiper(".banner-fade", {
			// Optional parameters
			direction: "horizontal",
			loop: true,
			autoplay: true,
			effect: "fade",
			fadeEffect: {
				crossFade: true
			},

			// If we need pagination
			pagination: {
				el: '.banner-pagination',
				type: 'bullets',
				clickable: true,
			},

			// Navigation arrows
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev"
			}

			// And if we need scrollbar
			/*scrollbar: {
			el: '.swiper-scrollbar',
		  },*/
		});


		/* ==================================================
			# Testimonials Carousel
		 ===============================================*/
		const testimonialCarousel = new Swiper(".testimonial-carousel", {
			// Optional parameters
			direction: "horizontal",
			loop: true,
			autoplay: true,
			effect: "fade",
			fadeEffect: {
				crossFade: true
			},

			// And if we need scrollbar
			/*scrollbar: {
			el: '.swiper-scrollbar',
		  },*/
		});


		/* ==================================================
			# Testimonials Carousel
		 ===============================================*/
		const testimonialTwoCarousel = new Swiper(".testimonial-style-two-carousel", {
			// Optional parameters
			direction: "horizontal",
			loop: true,
			autoplay: true,
			effect: "fade",
			fadeEffect: {
				crossFade: true
			},
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},

			// And if we need scrollbar
			/*scrollbar: {
			el: '.swiper-scrollbar',
		  },*/
		});


		/* ==================================================
			# Gallery Style One Carousel
		 ===============================================*/
		const galleryOne = new Swiper(".gallery-style-one-carousel", {
			// Optional parameters
			loop: true,
			freeMode: true,
			grabCursor: true,
			slidesPerView: 1,
			spaceBetween: 30,
			autoplay: true,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			breakpoints: {
				991: {
					slidesPerView: 2,
				},
				1400: {
					slidesPerView: 3,
				}
			},
		});


		/* ==================================================
			# Service Carousel
		 ===============================================*/
		const serviceOneCarousel = new Swiper(".service-style-two-carousel", {
			// Optional parameters
			loop: true,
			freeMode: true,
			grabCursor: true,
			slidesPerView: 1,
			spaceBetween: 30,
			autoplay: true,
			// Navigation arrows
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev"
			},
			breakpoints: {
				768: {
					slidesPerView: 2,
				},
				1400: {
					slidesPerView: 3,
					spaceBetween: 60,
				}
			},
		});


		/* ==================================================
			# Team Carousel
		 ===============================================*/
		const teamCarousel = new Swiper(".team-style-one-carousel", {
			// Optional parameters
			loop: true,
			freeMode: true,
			grabCursor: true,
			slidesPerView: 1,
			spaceBetween: 30,
			autoplay: true,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			// Navigation arrows
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev"
			},
			breakpoints: {
				768: {
					slidesPerView: 2,
				}
			},
		});


		/* ==================================================
			# Clients Carousel
		 ===============================================*/
		const brandOneCarousel = new Swiper(".brand-style-one-carousel", {
			// Optional parameters
			loop: true,
			slidesPerView: 2,
			spaceBetween: 15,
			autoplay: true,
			breakpoints: {
				768: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 30,
				}
			},
		});


		/* ==================================================
			# Product Cateogry Carousel
		 ===============================================*/
		const proCatCarousel = new Swiper(".pro-cat-carousel", {
			// Optional parameters
			loop: true,
			slidesPerView: 1,
			spaceBetween: 30,
			autoplay: true,
			pagination: {
				el: ".product-pagination",
				clickable: true,
			},
			// Navigation arrows
			navigation: {
				nextEl: ".product-button-next",
				prevEl: ".product-button-prev"
			},
			breakpoints: {
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 2,
					spaceBetween: 55,
				}
			},
		});


		/* ==================================================
			# Brand Carousel
		 ===============================================*/
		const brand6col = new Swiper(".brand5col", {
			// Optional parameters
			loop: true,
			slidesPerView: 2,
			spaceBetween: 30,
			autoplay: true,
			breakpoints: {
				768: {
					slidesPerView: 3,
					spaceBetween: 40,
				},
				992: {
					slidesPerView: 4,
					spaceBetween: 60,
				},
				1199: {
					slidesPerView: 5,
					spaceBetween: 60,
				}
			},
		});


		/* ==================================================
			# Product Gallery Carousel
		 ===============================================*/
		const productGallery = new Swiper(".product-gallery-carousel", {
			// Optional parameters
			loop: true,
			slidesPerView: 2,
			spaceBetween: 30,
			autoplay: true,
			breakpoints: {
				768: {
					slidesPerView: 3,
				},
				992: {
					slidesPerView: 3,
				},
				1200: {
					slidesPerView: 4,
				},
			},
		});


		/* ==================================================
			# Related Product Carousel
		 ===============================================*/
		const relatedProduct = new Swiper(".related-product-carousel", {
			// Optional parameters
			loop: true,
			slidesPerView: 1,
			spaceBetween: 30,
			autoplay: true,
			breakpoints: {
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				},
				1400: {
					slidesPerView: 4,
				},
			},
		});


		/* ==================================================
			# Timeine Carousel
		 ===============================================*/
		const timelineCarousel = new Swiper(".timeline-carousel", {
			// Optional parameters
			loop: true,
			freeMode: true,
			grabCursor: true,
			slidesPerView: 1,
			spaceBetween: 30,
			autoplay: true,
			// Navigation arrows
			navigation: {
				nextEl: ".timeline-button-next",
				prevEl: ".timeline-button-prev"
			},
			breakpoints: {
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				},
				1400: {
					slidesPerView: 5,
				},
			},
		});



		/* ==================================================
			Contact Form Validations
		================================================== */
		$('.contact-form').each(function () {
			var formInstance = $(this);
			formInstance.submit(function () {

				var action = $(this).attr('action');

				$("#message").slideUp(750, function () {
					$('#message').hide();

					$('#submit')
						.after('<img src="assets/img/ajax-loader.gif" class="loader" />')
						.attr('disabled', 'disabled');

					$.post(action, {
						name: $('#name').val(),
						email: $('#email').val(),
						phone: $('#phone').val(),
						comments: $('#comments').val()
					},
						function (data) {
							document.getElementById('message').innerHTML = data;
							$('#message').slideDown('slow');
							$('.contact-form img.loader').fadeOut('slow', function () {
								$(this).remove()
							});
							$('#submit').removeAttr('disabled');
						}
					);
				});
				return false;
			});
		});


		/* ==================================================
			GSAP animation
		================================================== */

		gsap.set(".animation-shape", {
			yPercent: 10
		});

		gsap.to(".animation-shape", {
			yPercent: -100,
			ease: "none",
			scrollTrigger: {
				trigger: ".animation-shape",
				scrub: 1
			},
		});


	}); // end document ready function


	/* ==================================================
		Preloader Init
	 ===============================================*/
	function loader() {
		$(window).on('load', function () {
			setTimeout(function () {
				$('#agrica-preloader').addClass('loaded');
				$("#loading").fadeOut(500);

				if ($('#agrica-preloader').hasClass('loaded')) {
					$('#preloader').delay(900).queue(function () {
						$(this).remove();
					});
				}
			}, 1000); // 1-second delay so the preloader animation is visible on localhost/fast networks
		});
	}
	loader();

	/* ==================================================
		Floating Contact Button
	 ===============================================*/
	$(document).ready(function () {
		var whatsappButton = `
		<a href="https://wa.me/919911725200" class="floating-contact-btn glass-btn" target="_blank" rel="noopener noreferrer">
			<i class="fab fa-whatsapp"></i>
		</a>
		`;
		$('body').append(whatsappButton);

		/* ==================================================
			Active Navigation Link Highlight
		===============================================*/
		// Get current absolute URL without hash or search params
		var currentUrl = window.location.href.split('#')[0].split('?')[0];

		$('nav.navbar.validnavs ul.nav > li > a').each(function () {
			// Get each link's absolute URL
			var linkUrl = this.href.split('#')[0].split('?')[0];
			var $link = $(this);

			if (currentUrl === linkUrl) {
				$link.addClass('active');
				$link.closest('li').addClass('active');
			}
			// Fallback: If current URL is a directory root (like GitHub pages gagaseeds/) 
			// and the link points to index.html in that root.
			else if (currentUrl.endsWith('/') && linkUrl.endsWith('/index.html')) {
				if (currentUrl + 'index.html' === linkUrl) {
					$link.addClass('active');
					$link.closest('li').addClass('active');
				}
			}
		});

		/* ==================================================
			Product Description Full-Screen Modal
		===============================================*/
		// Inject modal HTML
		var modalHtml = `
            <div class="glass-modal-overlay" id="productModal" style="display:none;">
                <div class="glass-modal-content glass-card">
                    <button class="close-modal"><i class="fas fa-times"></i></button>
                    <h3 id="modalTitle">Product Title</h3>
                    <p id="modalDescription">Product description goes here.</p>
                </div>
            </div>
        `;
		$('body').append(modalHtml);

		// Open Modal
		$('.open-description-modal').on('click', function (e) {
			e.preventDefault();
			var title = $(this).data('title');
			var description = $(this).data('description');

			$('#modalTitle').text(title);
			$('#modalDescription').text(description);
			$('#productModal').fadeIn(300);
			$('body').css('overflow', 'hidden'); // Prevent background scrolling
		});

		// Close Modal via Button
		$('.close-modal').on('click', function () {
			$('#productModal').fadeOut(300);
			$('body').css('overflow', 'auto');
		});

		// Close Modal via Overlay Click
		$('#productModal').on('click', function (e) {
			if ($(e.target).is('#productModal')) {
				$(this).fadeOut(300);
				$('body').css('overflow', 'auto');
			}
		});

	});

})(jQuery); // End jQuery