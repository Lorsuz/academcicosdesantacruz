import React from 'react';
import styled from 'styled-components';
import FormLogin from './FormLogin';
import FormRegister from './FormRegister';

import Layout from '../../layouts/PagesLayout';

import BackgroundForOverlay from '../../assets/images/Logo/gresasc-overlay.jpg';

const FormSign = () => {
	console.log('FormSign');
	const [haveAccount, setHaveAccount] = React.useState<boolean>(false);

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
	padding: 150px 0;
	font-family: Playpen Sans;
	height: 100vh;
	* {
		/* outline: 1px dotted; */
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
			padding: 40px 40px;
			row-gap: 40px;
			h2 {
				color: var(--color-primary);
				font-size: 2rem;
			}
			form {
				display: flex;
				height: 80%;
				width: 100%;
				flex-direction: column;
				.input-container {
					width: 100%;
					display: flex;
					justify-content: center;
					height: 50px;
					margin-bottom: 20px;
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

				.forgot-password {
					margin: 20px 0 30px;
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
			}
			.toggle {
				width: 100%;
				display: flex;
				justify-content: center;
				margin-top: 10px;
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
