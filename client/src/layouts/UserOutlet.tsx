import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

import styled from 'styled-components';
import Layout from './PagesLayout';
import { FaGem } from 'react-icons/fa';
import { AppRoutes } from '../config/appRoutes.config';
import { useSelector } from 'react-redux';

const UserOutlet = (): React.FunctionComponentElement<JSX.Element> => {
	const { userInfo } = useSelector((state: any) => state.userLogin);

	return (
		<Layout backgroundColor='#f5f5f5'>
			<StyledComponent>
				<div className='wrapper'>
					<aside>
						<div className='profile-example'>
							<div className='profile-image'>
								<img src={userInfo.profileImage} alt='Imagem de Perfil' />
							</div>
							<div className='profile-details'>
								<span>@{userInfo.name}</span>
								<div className='balance'>
									<FaGem></FaGem>
									<span>23</span>
								</div>
							</div>
						</div>
						<nav>
							<div>
								<span>Minhas Conta</span>
								<ul>
									<li>
										<NavLink to={AppRoutes.userAccountProfile}>Perfil</NavLink>
									</li>
									<li>
										<NavLink to={AppRoutes.userAccountAddress}>Endereços</NavLink>
									</li>
									<li>
										<NavLink to={AppRoutes.userAccountPassword}>Senha</NavLink>
									</li>
								</ul>
							</div>
							<div>
								<span>Minhas Compras</span>
								<ul>
									<li>
										<NavLink to='/private/user/purchase'>Historico</NavLink>
									</li>
								</ul>
							</div>
							<div>
								<span>Notificações</span>
								<ul>
									<li>
										<NavLink to='/private/user/notifications/orders'>Pedidos</NavLink>
									</li>
									<li>
										<NavLink to='/private/user/notifications/promotions'>Promoções</NavLink>
									</li>
									<li>
										<NavLink to='/private/user/notifications/updates'>Atualizações da Loja</NavLink>
									</li>
								</ul>
							</div>
							<div>
								<span>Joias da Santa Cruz</span>
								<ul>
									<li>
										<NavLink to='/private/user/balance'>Balança</NavLink>
									</li>
								</ul>
							</div>
						</nav>
					</aside>
					<section className='PrivateUserAccount-content'>
						<h1>Minha Conta</h1>
						<Outlet />
					</section>
				</div>
			</StyledComponent>
		</Layout>
	);
};

const StyledComponent = styled.section`
	background: #f5f5f5;
	padding: 20px 0;

	.wrapper {
		gap: 20px;
	}
	aside {
		grid-column: 2 / 4;
		background: #fff;
		padding: 20px 30px;

		.profile-example {
			width: 100%;
			display: flex;
			align-items: center;
			margin-bottom: 20px;
			gap: 15px;

			.profile-image {
				display: flex;
				justify-content: center;
				align-items: center;

				img {
					border-radius: 50%;
					width: 50px;
					height: 50px;
				}
			}
			.profile-details {
				.balance {
					display: flex;
					align-items: center;
					gap: 5px;
					margin-top: 5px;
					path {
						color: var(--color-primary);
					}
					span {
						display: block;
					}
				}
			}
		}
		nav {
			display: flex;
			flex-direction: column;
			gap: 10px;
			> div {
				> span {
					color: #000;
					text-decoration: none;
					display: block;
					font-size: 1.2rem;
					font-weight: bold;
				}
				ul {
					li {
						margin: 10px 0;

						a {
							color: #000;
							text-decoration: none;
							display: block;
							padding-left: 20px;
							font-size: 0.9rem;
							font-weight: 500;
							&:hover {
								color: var(--color-primary);
							}
						}
					}
				}
			}
		}
	}
	.PrivateUserAccount-content {
		background: #ffffff;
		height: 100%;
		grid-column: 4 / 12;
		padding: 20px;
	}
`;

export default UserOutlet;
