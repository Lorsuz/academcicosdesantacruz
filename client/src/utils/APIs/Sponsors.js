import sponsors from '../functions/Swiper.js';
const container = document.querySelector('.sponsors .swiper-wrapper');

fetch('components/json/data.json').then(response => {
	response.json().then(data => {
		data.sponsors.map(obj => {
			container.innerHTML += `
				<div class="swiper-slide">
				<img
					src="${obj.image}"
					alt="${obj.image}">
				</div>
				`;
		});
		sponsors();
	});
});
