import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/mousewheel';
import { Link } from 'react-router-dom';
import { array } from 'zod';

const CategoriesSection = ({ list }: { list: any }) => {
	const [slidesPerView, setSlidesPerView] = useState(5);

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
					<Swiper
						modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
						autoplay={{ delay: 5000, disableOnInteraction: false }}
						mousewheel={true}
						loop={true}
						slidesPerView={slidesPerView}
						// pagination={{ clickable: true }}
						spaceBetween={50}
						centeredSlides={true}
					>
						{list.map((item: any, index: any) => (
							<SwiperSlide key={index}>
								<Link to='/'>
									<div className='slide-pag'>
										<img src='http://placeholder.co/50x50' alt='' />
										<h4>{item}</h4>
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
	* {
		/* outline: 1px dotted; */
	}

	.slide-container {
		grid-column: 2 / 12;
		.slide-pag {
			min-height: 70px;
			min-width: 200px;
			display: flex;
			/* justify-content: center; */
			align-items: center;
			border-radius: 5px;
			box-shadow: 0px 0px 15px 0 #eaeaea;
			padding: 5px 20px;
			/* border-radius: 100% 69% 73% 77% / 50% 40% 22% 44%; */
			cursor: pointer;
			&:hover {
				/* box-shadow: 0px 0px 15px 0 #eaeaea; */

			}
			img {
				width: 50px;
				height: 50px;
				margin-right: 20px;
				border-radius: 50%;
			}
			h4{
				text-transform: capitalize;
			}
		}
	}

	.swiper {
		display: block;
		.swiper-wrapper {
			padding: 25px 0;

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
