import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoPng from '@image/Logo/santa-cruz-logo-removebg-preview.png';
import styled from 'styled-components';
import { RxHamburgerMenu } from 'react-icons/rx';
import LogoWritten from '@image/Logo/logo_written.png';
import ButtonOpenProfile from '@component/ButtonOpenProfile';
import { AppRoutes } from '@config/appRoutes.config';

const Header: React.FunctionComponent = () => {
	return (
		<StyledComponent>
			<div className='wrapper'>
				<article className='top'>
					<section className='logo'>
						<img src={LogoPng} alt='' className='img' />
						<img src={LogoWritten} alt='' className='words' />
					</section>
					<ButtonOpenProfile />
				</article>
				<article className='bottom'>
					<nav className='menu-desk'>
						<ul>
							<li>
								<NavLink to={AppRoutes.homePage}>
									<span>Página Inicial</span>
								</NavLink>
							</li>
							{/* <li>
								<NavLink to={AppRoutes.store}>
									<span>Loja da Escola</span>
								</NavLink>
							</li> */}
							{/* <li>
								<NavLink to={AppRoutes.carnivalDecades}>
									<span>Carnavais</span>
								</NavLink>
							</li> */}
							<li>
								<NavLink to={AppRoutes.school}>
									<span>A Escola</span>
								</NavLink>
							</li>
							<li>
								<NavLink to={AppRoutes.fanMember}>
									<span>Desfile Conosco</span>
								</NavLink>
							</li>
							<li>
								<NavLink to={AppRoutes.supporterMember}>
									<span>Sócio Torcedor</span>
								</NavLink>
							</li>
							{/* <li>
								<NavLink to={AppRoutes.site}>
									<span>O Site</span>
								</NavLink>
							</li> */}
						</ul>
					</nav>
					<button id='menu-drop'>
						<RxHamburgerMenu></RxHamburgerMenu>
					</button>
					<nav className='menu-mobile'>
						<ul>
							<li>
								<a href='./components/pages/not-found.html'>
									<i className='fa-solid fa-house'></i>
									<span>Página Inicial</span>
								</a>
							</li>
							<li>
								<a href='./components/pages/not-found.html'>
									<i className='fa-solid fa-school'></i>
									<span>A Escola</span>
								</a>
							</li>
							<li>
								<a href='./components/pages/not-found.html'>
									<i className='fa-solid fa-clock-rotate-left'></i>
									<span>Nossa História</span>
								</a>
							</li>
							<li>
								<a href='./components/pages/not-found.html'>
									<i className='fa-solid fa-users'></i>
									<span>Sócio Torcedor</span>
								</a>
							</li>
							<li>
								<a href='./components/pages/not-found.html'>
									<i className='fa-solid fa-circle-info'></i>
									<span>Créditos</span>
								</a>
							</li>
						</ul>
					</nav>
				</article>
			</div>
		</StyledComponent>
	);
};

const StyledComponent = styled.header`
	width: 100vw;
	top: 0;
	left: 0;
	background: rgba(255, 255, 255, 0.95);
	z-index: 100;

	.wrapper {
		row-gap: 15px;
		padding: 0 0 20px;

		.top {
			display: flex;
			justify-content: space-between;
			align-items: center;
			grid-column: 2 / 12;
			padding: 20px 0 0px;

			section {
				&.logo {
					display: flex;
					align-items: center;
					justify-content: center;

					img.img {
						width: 70px;
					}
					img.words {
						width: 220px;
					}
				}
			}
		}
		.bottom {
			display: flex;
			justify-content: space-between;
			align-items: center;
			grid-column: 2 / 12;

			nav.menu-desk {
				display: flex;

				ul {
					display: flex;
					column-gap: 40px;
					align-content: center;
					justify-content: center;

					li {
						span {
							color: var(--color-text-soft);
							/* font-weight: bold; */
							position: relative;
							/* font-family: Playpen Sans; */

							&::after {
								content: '';
								display: block;
								transform-origin: right;
								position: absolute;
								height: 4px;
								background: var(--color-primary-soft);
								inset: 0;
								top: 100%;
								width: 100%;
								transition:
									transform 300ms ease-in-out,
									transform-origin 0ms;
								transform: scaleX(0);
							}

							&:hover::after {
								transform: scaleX(1);
								transform-origin: left;
							}
						}
						.active {
							& span::after {
								transform: scaleX(1);
								transform-origin: left;
							}
						}
					}
				}
			}

			button {
				cursor: pointer;
				font-weight: bold;
				z-index: 10;
				transition: 300ms;
				display: none;

				* {
					color: var(--color-primary);
					font-size: 2rem;
				}
			}

			nav.menu-mobile {
				position: fixed;
				left: 100%;
				top: 0;
				background: #fff;
				width: 100%;
				min-width: 300px;
				max-width: 400px;
				height: 100%;
				opacity: 0;
				box-shadow: 0 -5px 10px 0 rgba(0, 0, 0, 0.614);

				&.active {
					opacity: 1;
					transform: translateX(-100%);
				}

				ul {
					margin: 80px 0 0 0;

					li {
						display: flex;
						align-items: center;
						margin-left: 0;
						opacity: 1;
						border-bottom: 1px solic var(--color-primary-soft);

						a {
							display: inline-block;
							width: 100%;
							height: 100%;
							padding: 15px 40px;
							transition: 200ms;
							font-size: 1.1rem;
							letter-spacing: 2px;
							cursor: pointer;

							&:hover {
								background: var(--color-primary-soft);

								* {
									color: #fff;
								}
							}

							&:last-child {
								border: none;
							}

							i {
								cursor: pointer;
								transition: 300ms ease-in-out;
								color: var(--color-primary);
							}

							span {
								margin-left: 10px;
								cursor: pointer;
								color: var(--color-primary);
							}
						}
					}
				}
			}
		}
	}

	@media screen {
		@media (max-width: 950px) {
			.wrapper {
				.nav-bar {
					button {
						display: block;
					}

					nav {
						&.menu-desk {
							display: none;

							&.menu-mobile {
							}
						}
					}
				}
			}
		}
	}
`;

export default Header;
