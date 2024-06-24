import SwiperConfigSponsors from '../classes/SwiperConfigSponsors.js';
function sponsors() {
	return new Swiper('.sponsors .swiper', SwiperConfigSponsors);
}

export default sponsors;
