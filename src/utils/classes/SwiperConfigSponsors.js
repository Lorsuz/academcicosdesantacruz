const SwiperConfigSponsors = {
	direction: 'horizontal',
	loop: true,
	slidesPerView: 1,
	grabCursor: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},
	// scrollbar: {
	// 	el: '.swiper-scrollbar',
	// },
	mousewheel: {
		forceToAxis: true
	},
	breakpoints: {
		800: {
			slidesPerView: 2
		},
		1200: {
			slidesPerView: 3
		}
	}
};

export default SwiperConfigSponsors;
