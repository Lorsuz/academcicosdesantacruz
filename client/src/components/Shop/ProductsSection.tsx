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
import SessionTitle from './SessionTitle';

const CategoriesSection = ({ title }: { title: string }) => {
	const [slidesPerView, setSlidesPerView] = useState(5);

	// useEffect(() => {
	// 	window.addEventListener('resize', () => {
	// 		if (window.innerWidth < 700) {
	// 			setSlidesPerView(3);
	// 		} else if (window.innerWidth < 1000) {
	// 			setSlidesPerView(4);
	// 		} else {
	// 			setSlidesPerView(4);
	// 		}
	// 	});
	// }, []);
	const a = [1, 2, 3, 4, 5, 6, 7, 8];

	return (
		<StyledComponent>
			<div className='wrapper'>
				<div className='slide-container'>
					<SessionTitle title={title}></SessionTitle>
					<Swiper
						modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
						autoplay={{ delay: Math.floor(Math.random() * (10000 - 5000) + 5000), disableOnInteraction: false }}
						mousewheel={true}
						loop={true}
						slidesPerView={slidesPerView}
						// pagination={{ clickable: true }}
						spaceBetween={50}
						centeredSlides={true}
					>
						{a.map((item, index) => (
							<SwiperSlide key={index}>
								<div className='slide-pag'>
									<div className='img'>
										<div className='discount'>30%</div>
										{/* <img src='http://placeholder.co/300x200' alt='' /> */}
										<img
											// src='https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSHOQXnZWQTCqFlhA1K2dfoCaSn3hlviFfpQoxkWb9QsmDCrduXvPhsLE5UmcaiKvVj75__8neXuY8kx5FBHzHSr1-D7sDK1ohI36ZTAYqn_-UO65-PTRVRCfVYq23zqBgq0MZRaEUb1Oo&usqp=CAc'
											alt=''
										/>
										<img
											src='https://m.media-amazon.com/images/G/32/Moda/2021/SpringFlip/ShoppingPages/950.Shoppingpages_35_800x800._SS600_QL85_.jpg'
											alt=''
										/>
									</div>
									<div className='text'>
										<h4>Produto {item}</h4>
										<div className='stock'>
											<span>Stock</span>
											<span>123</span>
										</div>
										<div className='price'>
											<span>R$ 500,00</span>
											<Link to='/'>R$ 300,00</Link>
										</div>
									</div>
								</div>
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
			display: flex;
			flex-direction: column;
			border-radius: 5px;
			overflow: hidden;
			cursor: pointer;
			width: 300px;

			.img {
				width: 100%;
				height: 230px;
				margin-right: 20px;
				overflow: hidden;
				position: relative;
				display: flex;
				align-items: center;
				justify-content: center;

				&:hover img {
					transform: scale(1.1);
				}

				.discount {
					position: absolute;
					top: 10px;
					left: 10px;
					background-color: red;
					color: white;
					padding: 5px;
					border-radius: 5px;
					z-index: 2;
				}

				img {
					width: 100%;
					/* height: 100%; */
					object-fit: scale-down;
				}
			}
			.text {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				padding: 20px 0;
				flex-grow: 1;

				h4 {
					font-size: 1.2rem;
					margin-bottom: 10px;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
					overflow: hidden;
					transition: 0s;
					&:hover {
						text-decoration: underline;
						color: var(--color-primary);
					}
				}
				.stock {
					display: flex;
					justify-content: space-between;
					margin-bottom: 10px;

					span {
						display: block;
					}
				}

				.price {
					font-size: 1.2rem;

					span {
						white-space: nowrap;
						text-decoration: line-through;
						font-size: 0.8rem;
						color: #3c3c3c;
					}

					a {
						white-space: nowrap;
						display: block;
						font-size: 1rem;
						color: var(--color-primary);
					}
				}
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
