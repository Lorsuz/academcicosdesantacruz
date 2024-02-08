import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Mousewheel } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/mousewheel';
import { Link } from 'react-router-dom';

const CategoriesSection = ({ list }: { list: any }) => {
	const [slidesPerView, setSlidesPerView] = useState(9);

	useEffect(() => {
		window.addEventListener('resize', () => {
			if (window.innerWidth < 700) {
				setSlidesPerView(3);
			} else if (window.innerWidth < 1000) {
				setSlidesPerView(4);
			} else {
				setSlidesPerView(5);
			}
		});
	}, []);

	return (
		<StyledComponent>
			<div className='wrapper'>
				<div className='slide-container'>
					<h2>Categorias</h2>
					<Swiper
						modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Mousewheel]}
						autoplay={{ delay: 5000, disableOnInteraction: false }}
						mousewheel={true}
						loop={true}
						slidesPerView={slidesPerView}
						// pagination={{ clickable: true }}
						spaceBetween={0}
						centeredSlides={true}
						// preloadSlides={5}
					>
						{list.map((item: any, index: any) => (
							<SwiperSlide key={index}>
								<Link to='/'>
									<div className='slide-pag'>
										<img src='http://placeholder.co/50x50' alt='' />
										<span>{item}</span>
									</div>
								</Link>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</StyledComponent>
	);
};

const StyledComponent = styled.section`
	padding: 40px 0;
	background-color: #f5f5f5;
	* {
		/* outline: 1px dotted; */
	}

	.slide-container {
		background-color: #fff;
		padding: 30px 25px;
		grid-column: 2 / 12;
		h2{
			text-align: center;
			margin-bottom: 20px;
			/* border-bottom: 1px solid #eaeaea; */
			color: #787878;
			text-transform: uppercase;
		}
		.slide-pag {
			height: 120px;
			width: 100px;
			display: flex;
			justify-content: center;
			flex-direction: column;
			align-items: center;
			border: 1px solid #eaeaea;
			cursor: pointer;

			&:hover {
				/* box-shadow: 0px 0px 15px 0 #eaeaea; */
			}
			img {
				width: 50px;
				height: 50px;
				margin-right: 20px;
				border-radius: 50%;
				margin: 0 auto 15px;
			}
			span {
				text-transform: capitalize;
				text-align: center;
				line-height: 1em;
				height: 1em;
			}
		}
	}

	.swiper {
		display: block;
		.swiper-wrapper {
			padding: 5px 0;

			.swiper-slide {
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}

		.swiper-pagination {
			.swiper-pagination-bullet {
				background: var(--color-primary);
			}
		}
	}
`;

export default CategoriesSection;
