import Slide from '../classes/Slide.js';

let Slides = document.querySelector('main section.banner .slides');
let pagination = document.querySelector('main .banner .pagination');

async function fetchData() {
	try {
		const response = await fetch('components/json/data.json');
		const data = await response.json();

		data.banner.forEach((card, index) => {
			Slides.innerHTML += ` 
				<li class="slide ${index == 0 ? 'active' : ''}">
				<div class="img">
					<img src="./components/assets/images/Carrossel/${card.image}" alt="${card.alt}">
				</div>
				<div class="text">  

				${
					index == 9
						? `
				<h2>Evento Academicos</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique deleniti maxime neque, laudantium architecto incidunt placeat labore quaerat atque dolorum?</p>
					<a href="" class="button">Comece agora</a>`
						: ''
				}
				
				</div>
			</li>
        `;
			pagination.innerHTML += `<li class="dot ${index == 0 ? 'active' : ''}"></li>`;
		});

		var a = new Slide(
			'main .banner .slides .slide',
			'main .banner .prev',
			'main .banner .next',
			'main .banner .pagination .dot'
		);
	} catch (error) {
		console.error(error);
	}
}

fetchData();
