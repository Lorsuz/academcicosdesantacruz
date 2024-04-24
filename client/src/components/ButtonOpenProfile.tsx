import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { logoutAction } from '@redux/actions/UserActions';
import { AppRoutes } from '@config/appRoutes.config';
import { FaBrazilianRealSign } from 'react-icons/fa6';
import { /* FaShoppingCart ,*/ FaGem /* FaUser */ } from 'react-icons/fa';

const ButtonOpenProfile = () => {
	const [profileOptionsIsOpen, setProfileOptionsIsOpen] = React.useState(false);
	const { userInfo } = useSelector((state: any) => state.userLogin);
	const dispatch = useDispatch();
	const handleProfileOptions = () => {
		setProfileOptionsIsOpen(!profileOptionsIsOpen);
	};
	const logOut = async () => {
		try {
			dispatch(logoutAction() as any);
		} catch (error: any) {
			console.log(error.message);
		}
	};

	return (
		<StyledComponent>
			<div className='profile-container'>
				{userInfo?.token ? (
					<button className='profile' onClick={handleProfileOptions}>
						<div className='img'>
							<img src={userInfo.profileImage} alt='' />
						</div>
						<div className='name'>{userInfo.name}</div>
					</button>
				) : (
					<div className='button-sign'>
						<span>Gostaria de usar uma conta?</span>
						<NavLink to={AppRoutes.sign}>Entrar</NavLink>
					</div>
				)}
			</div>
			{profileOptionsIsOpen && (
				<nav className='profile-options'>
					<div className='user'>
						<div className='name'>
							<Link to='/user'>{userInfo.name}</Link>
						</div>
						<div className='logout'>
							<button
								onClick={() => {
									setProfileOptionsIsOpen(!profileOptionsIsOpen);
									logOut();
								}}
							>
								Sair
							</button>
						</div>
					</div>
					<ul>
						<li>
							<NavLink to={AppRoutes.userDetails}>Perfil</NavLink>
						</li>
						<li>
							<NavLink to={AppRoutes.userAccountProfile}>Configurações</NavLink>
						</li>
						<li>
							<NavLink to='/user/settings'>Desfile Conosco</NavLink>
						</li>
						<li>
							<NavLink to='/store'>Carrinho</NavLink>
						</li>
						<li>
							<NavLink to='/storew'>Pedidos</NavLink>
						</li>
						<li>
							<NavLink to='/s'>Assinaturas</NavLink>
						</li>
						<li>
							<NavLink to='/'>Suporte</NavLink>
						</li>
					</ul>
					<div className='balance'>
						<div className='cash'>
							<FaBrazilianRealSign></FaBrazilianRealSign>
							<span>345.00</span>
						</div>
						<div className='jewelry'>
							<FaGem></FaGem>
							<span>213</span>
						</div>
					</div>
				</nav>
			)}
		</StyledComponent>
	);
};

const StyledComponent = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;

	.profile-container {
		.button-sign {
			display: flex;
			align-items: center;
			justify-content: center;
			margin-right: 20px;

			span {
				font-size: 1.2rem;
				color: var(--color-text-soft);
				/* font-weight: bold; */
				margin-right: 10px;
				font-size: 1rem;
			}

			a {
				color: #fff;
				font-weight: bold;
				font-size: 1.2rem;
				transition: 300ms;
				font-size: 1rem;
				background: var(--color-primary);
				padding: 8px 20px;
				position: relative;
				top: 0px;
				left: 0px;

				&:hover,
				&.active {
					background: var(--color-primary-soft);
					box-shadow: 3px 3px 0 0 var(--color-black-soft);
					top: -3px;
					left: -3px;
				}
			}
		}
		.profile {
			display: flex;
			align-items: center;
			justify-content: center;
			cursor: pointer;
			flex-direction: column;

			.img {
				width: 50px;
				height: 50px;
				border-radius: 50%;
				overflow: hidden;
				margin-bottom: 5px;
				border: 2px solid #e4e4e4;
				img {
					width: 100%;
				}
			}
			.name {
				font-size: 1.2rem;
				color: var(--color-text-soft);
				transition: 300ms;
				font-size: 1rem;
				&:hover {
					color: var(--color-primary);
					text-decoration: underline;
				}
			}
		}
	}
	.profile-options {
		position: absolute;
		top: 110%;
		right: 0;
		background: #ffffff;
		width: 250px;
		border-radius: 5px;
		overflow: hidden;
		border: 1px solid #66666692;
		padding: 10px 20px;
		z-index: 9999;

		.user {
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: 1px solid #66666692;
			padding: 10px 0px;

			.name {
				a {
					font-size: 1.2rem;
					font-weight: bold;
					color: var(--color-text-soft);
					transition: 300ms;
					font-size: 1rem;
					&:hover {
						color: var(--color-primary);
						text-decoration: underline;
					}
				}
			}
			.logout {
				button {
					font-size: 1.2rem;
					font-weight: bold;
					color: var(--color-text-soft);
					transition: 300ms;
					font-size: 1rem;
					padding: 5px 10px;
					border-radius: 5px;
					background: #f6f6f6;

					&:hover {
						color: #fff;
						background: red;
					}
				}
			}
		}

		ul {
			border-top: 1px solid #d1d1d192;
			border-bottom: 1px solid #d1d1d192;
			li {
				display: flex;
				align-items: center;
				justify-content: center;
				margin: 5px 0px;

				a {
					display: block;
					width: 100%;
					height: 100%;
					transition: 200ms;
					font-size: 1.1rem;
					letter-spacing: 2px;
					padding: 10px 20px;
					border-radius: 5px;

					cursor: pointer;

					&:hover{
						background: #1a9d3f70;
						color: #fff;
					}
					&.active {
						background: #1a9d3f;
						color: #fff;
						cursor: default;	
					}
				}
			}
		}
		.balance {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 15px 20px 10px;
			border-top: 1px solid #66666692;
			.cash {
				display: flex;
				align-items: center;
				justify-content: center;
				span {
					margin-left: 5px;
				}
			}
			.jewelry {
				display: flex;
				align-items: center;
				justify-content: center;
				span {
					margin-left: 5px;
				}
			}
		}
	}
`;

export default ButtonOpenProfile;
