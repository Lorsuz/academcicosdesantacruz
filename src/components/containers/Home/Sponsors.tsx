import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import dataAPI from '../../json/data.json';

import Drogamix from '@image/Sponsors/Drogamix.png';
import LFbets from '@image/Sponsors/LFbets.png';
import Haras from '@image/Sponsors/Haras.png';
import LaDameFemme from '@image/Sponsors/La-Dame-Femme.png';

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/mousewheel';

const HomeSponsors = (): React.FunctionComponentElement<JSX.Element> => {
	// const [sponsorsPathImg] = useState(dataAPI.sponsors);
	const [slidesPerView, setSlidesPerView] = useState(3);
	const [isGrabbing, setIsGrabbing] = useState(false);

	useEffect(() => {
		window.addEventListener('resize', () => {
			if (window.innerWidth < 700) {
				setSlidesPerView(1);
			} else if (window.innerWidth < 1000) {
				setSlidesPerView(2);
			} else {
				setSlidesPerView(3);
			}
		});
	}, []);

	useEffect(() => {
		const swiperWrapper = document.querySelector('.swiper-wrapper') as HTMLElement;
		swiperWrapper.addEventListener('click', () => {
			setIsGrabbing(true);
		});
		swiperWrapper.addEventListener('mouseup', () => {
			setIsGrabbing(false);
		});
	}, []);

	return (
		<StyledComponent $isGrabbing={isGrabbing}>
			<h1 className='theme-title'>Apoios</h1>
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
				autoplay={{ delay: 1000, disableOnInteraction: false }}
				mousewheel={true}
				loop={true}
				slidesPerView={slidesPerView}
				pagination={{ clickable: true }}
				spaceBetween={50}
				centeredSlides={true}
			>
				{/* {sponsorsPathImg.map((sponsorPathImg, index: number) => (
					<SwiperSlide key={index}>
						<img src={`src/assets/images/Sponsors/${sponsorPathImg.image}`} alt={sponsorPathImg.image} />
					</SwiperSlide>
				))} */}
				<SwiperSlide>
					<img src={Drogamix} alt='' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={LFbets} alt='' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={Haras} alt='' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={LaDameFemme} alt='' />
				</SwiperSlide>
			</Swiper>
		</StyledComponent>
	);
};

const StyledComponent = styled.section<{ $isGrabbing: boolean }>`
	padding: 50px 0;
	margin: 0 auto;

	h1 {
		text-align: center;
		font-family: 'Advent Pro', sans-serif;
		color: var(--color-primary);
		font-weight: 500;
		font-size: 3.5rem;
	}

	.swiper {
		display: block;
		max-width: 1700px;
		width: 100vw;
		.swiper-wrapper {
			height: 300px;
			cursor: ${({ $isGrabbing }) => ($isGrabbing ? 'grabbing' : 'grab')};

			.swiper-slide {
				display: flex;
				align-items: center;
				justify-content: center;
				overflow: hidden;
				border-radius: 5px;

				img {
					width: 350px;
					height: 200px;
					object-fit: scale-down;
				}
			}
		}

		.swiper-pagination {
			.swiper-pagination-bullet {
				background: var(--color-primary);
			}
		}
	}
`;

export default HomeSponsors;
