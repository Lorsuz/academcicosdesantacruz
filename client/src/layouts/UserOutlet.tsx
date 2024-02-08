import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

import styled from 'styled-components';
import Layout from './PagesLayout';
import { FaGem } from 'react-icons/fa';

const UserOutlet = (): React.FunctionComponentElement<JSX.Element> => {
	return (
		<Layout backgroundColor='#f5f5f5'>
			<StyledComponent>
				<div className='wrapper'>
					<aside>
						<div className='profile-example'>
							<div className='profile-image'>
								<img src='https://via.placeholder.com/150' alt='profile' />
							</div>
							<div className='profile-details'>
								<span>Ariel Souza</span>
								<div className='balance'>
										<FaGem></FaGem>
									<span>23</span>
								</div>
							</div>
						</div>
						<nav>
							<div>
								<Link to='/private/user/profile'>Minhas Conta</Link>
								<ul>
									<li>
										<NavLink to='/private/user/account/profile'>Perfil</NavLink>
									</li>
									<li>
										<NavLink to='/private/user/account/address'>Endereços</NavLink>
									</li>
									<li>
										<NavLink to='/private/user/account/password'>Senha</NavLink>
									</li>
								</ul>
							</div>
							<div>
								<NavLink to='/private/user/purchase'>Minhas Compras</NavLink>
							</div>
							<div>
								<Link to='/private/user/purchase'>Notificações</Link>
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
								<NavLink to='/private/user/coins'>Balança Virtual</NavLink>
							</div>
						</nav>
					</aside>
					<Outlet />
				</div>
			</StyledComponent>
		</Layout>
	);
};

const StyledComponent = styled.section`
	background: #f5f5f5;
	padding: 20px 0;

	* {
		/* outline: 1px dotted; */
	}
	.wrapper {
		gap: 20px;
	}
	aside {
		grid-column: 2 / 4;
		background: #fff;
		padding: 20px 30px;

		a:hover,
		a:hover * {
			color: var(--color-primary);
			transition: 0s;
		}

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
			gap: 20px;
			> div {
				> a {
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
						}
					}
				}
			}
		}
	}
`;

export default UserOutlet;
