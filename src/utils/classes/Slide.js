export default class Slide {
	slides;
	prev;
	next;
	pagination;
	slideCurrent = 0;
	totalSlides;
	interval;

	constructor(slides, prev, next, pagination) {
		this.slides = document.querySelectorAll(slides);
		this.prev = document.querySelector(prev).addEventListener('click', () => {
			this.calculateSlideCurrent(-1);
		});
		this.next = document.querySelector(next).addEventListener('click', () => {
			this.calculateSlideCurrent(1);
		});
		this.pagination = document.querySelectorAll(pagination);
		for (let index = 0; index < this.pagination.length; index++) {
			this.pagination[index].addEventListener('click', () => {
				this.removeAnimation();
				this.animationEffect(this.slideCurrent, index);
				this.changeSlideCurrent(index);
			});
		}
		this.totalSlides = this.slides.length - 1;
		this.init();
	}

	init() {
		this.interval = setInterval(() => {
			this.calculateSlideCurrent(1);
		}, 5000);
	}

	calculateSlideCurrent(value) {
		this.removeAnimation();
		var index = this.slideCurrent;
		index += value;
		if (index < 0) {
			index = this.totalSlides;
		}
		if (index > this.totalSlides) {
			index = 0;
		}
		this.animationEffect(this.slideCurrent, index, value);
		this.changeSlideCurrent(index);
	}

	animationEffect(slideCurrent, index, value = 0) {
		if (value == 1) {
			this.slides[slideCurrent].classList.add('toRightOld');
			this.slides[index].classList.add('toRightNew');
		} else if (value == -1) {
			this.slides[this.slideCurrent].classList.add('toLeftOld');
			this.slides[index].classList.add('toLeftNew');
		} else if (slideCurrent < index) {
			this.slides[slideCurrent].classList.add('toRightOld');
			this.slides[index].classList.add('toRightNew');
		} else if (slideCurrent > index) {
			this.slides[slideCurrent].classList.add('toLeftOld');
			this.slides[index].classList.add('toLeftNew');
		}
	}

	changeSlideCurrent(index) {
		this.slides[this.slideCurrent].classList.remove('active');
		this.pagination[this.slideCurrent].classList.remove('active');
		this.slideCurrent = index;
		this.slides[this.slideCurrent].classList.add('active');
		this.pagination[this.slideCurrent].classList.add('active');

		this.init();
	}

	removeAnimation() {
		clearInterval(this.interval);
		this.slides.forEach(element => {
			element.classList.remove('toRightOld');
			element.classList.remove('toRightNew');
			element.classList.remove('toLeftOld');
			element.classList.remove('toLeftNew');
		});
	}
}
