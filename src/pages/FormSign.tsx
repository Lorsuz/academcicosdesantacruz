import React from 'react';
import styled from 'styled-components';
import FormLogin from '@component/forms/LoginForm';
import FormRegister from '@component/forms/RegisterForm';

import Layout from '@layout/PagesLayout';
import BackgroundForOverlay from '@image/Logo/gresasc-overlay.jpg';

const FormSign = () => {
	const [haveAccount, setHaveAccount] = React.useState<boolean>(true);

	const toggleHaveAccount = () => {
		setHaveAccount(!haveAccount);
	};

	return (
		<Layout title='Formulario de Authenticação'>
			<StyledComponent $haveAccount={haveAccount}>
				<article>
					<section className='in'>
						<FormLogin toggleHaveAccount={toggleHaveAccount}></FormLogin>
					</section>
					<section className='up'>
						<FormRegister toggleHaveAccount={toggleHaveAccount}></FormRegister>
					</section>
					<div className='overlay-container'>
						{/* <div className='wallpaper'></div>
						<div className='container'>
							<h2>Lorem ipsum dolor sit.</h2>
							<h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, incidunt?</h3>
						</div> */}
					</div>
				</article>
			</StyledComponent>
		</Layout>
	);
};

const StyledComponent = styled.section<{ $haveAccount: boolean }>`
	padding: 80px 0;
	/* font-family: Playpen Sans; */
	height: 100vh;

	* {
		/* outline: 1px dotted red; */
	}

	article {
		display: flex;
		align-items: center;
		width: 1000px;
		height: 500px;
		margin: 0 auto;
		overflow: hidden;
		border-radius: 10px;
		position: relative;
		box-shadow: 0 0 10px 0px #0000007b;

		section {
			width: 50%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex-direction: column;
			padding: 40px;
			row-gap: 20px;
			h2 {
				color: var(--color-primary);
				text-align: center;
				font-family: 'Advent Pro', sans-serif;
				font-weight: 500;
				font-size: 2.5rem;
			}
			form {
				display: flex;
				height: 80%;
				width: 100%;
				flex-direction: column;
				.input-field {
					margin-bottom: 5px;
					.input-container {
						width: 100%;
						display: flex;
						justify-content: center;
						height: 50px;
						.icon {
							width: 50px;
							height: 50px;
							background: var(--color-primary);
							display: flex;
							justify-content: center;
							align-items: center;
							border-radius: 5px 0 0 5px;
							* {
								color: #fff;
							}
						}
						input {
							height: 50px;
							border-radius: 0 5px 5px 0;
							border: 1px solid #ccc;
							display: block;
							font-size: 1.2rem;
							padding: 0 10px;
							width: 100%;
						}
					}
					.error {
						height: 25px;
						width: 100%;
						display: flex;
						justify-content: start;
						align-items: center;
						span {
							font-size: 0.8rem;
							color: red;
						}
					}
				}

				.forgot-password {
					margin: 10px 0 20px;
					button {
						color: var(--color-primary);
					}
				}
				.button-submit {
					width: 100%;
					height: 50px;
					background: var(--color-primary);
					font-size: 1.2rem;
					color: #fff;
					border: 5px;
					border-radius: 5px;
					&:hover {
						background: var(--color-primary-soft);
					}
				}
				.error-server {
					height: 25px;
					width: 100%;
					display: flex;
					justify-content: center;
					align-items: center;
					color: red;
					font-size: 0.9rem;
				}
			}
			.toggle {
				width: 100%;
				display: flex;
				justify-content: center;
				button {
					background: transparent;
					border: none;
					color: var(--color-primary);
					cursor: pointer;
					&:hover {
						text-decoration: underline;
					}
				}
			}
		}

		.overlay-container {
			position: absolute;
			width: 50%;
			height: 100%;
			background: #fff;
			top: 0;
			left: 0%;
			padding: 40px;
			display: flex;
			justify-content: center;
			align-items: center;
			/* display: none; */
			background: #fff url(${BackgroundForOverlay}) center no-repeat;
			background-size: cover;
			transition: transform 0.5s ease-in-out;
			${({ $haveAccount }) => ($haveAccount ? 'transform: translateX(100%);' : '')}

			.wallpaper {
				position: absolute;
				width: 100%;
				height: 100%;
				top: 0;
				left: 0;
				background: #000;
				opacity: 0.5;
			}
			.container {
				z-index: 1;
				* {
					text-align: center;
					color: #fff;
				}
				h2 {
					font-size: 2rem;
					margin-bottom: 30px;
					text-transform: uppercase;
				}
				h3 {
					font-size: 1.5em;
					color: #dcdcdc;
				}
			}
		}
	}
`;

export default FormSign;
