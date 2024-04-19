import React from 'react';
import Layout from '../layouts/PagesLayout';
import styled from 'styled-components';

// #region del
const Site = () => {
	return (
		<Layout>
			<StyledComponent className='wrapper'>
				<section className='site wrapper'>
					<h1>Sobre o site</h1>
					<div className='text'>
						<p>
							Este é o site oficial do Grêmio Recreativo Escola de Samba Acadêmicos de Santa Cruz. Seu objetivo é levar a todo e qualquer visitante a maior quantidade de
							informações possível sobre a Escola representante do bairro de Santa Cruz, desde sua origem até os dias atuais.
						</p>
						<p>Todos os textos, fotos, áudios e vídeos possuem seus respectivos créditos na seção Créditos.</p>
						<p>
							Não há qualquer intuito de estimular a pirataria ou cópia ilegal de material. Se o visitante é proprietário de algum material contido neste site, pedimos que entre em
							contato caso deseje que o material seja retirado, ou deseje receber os créditos.
						</p>
						<p>Agradecemos pela sua visita!</p>
						<p>G.R.E.S. Acadêmicos de Santa Cruz</p>
					</div>
					<div className='img'>
						<img src='' alt='' />
					</div>
				</section>
				<section className='credits'>
					<h2></h2>
				</section>
			</StyledComponent>
		</Layout>
	);
};
// #region del

const StyledComponent = styled.main`
	section {
		grid-column: 2/12;
		h1{
			grid-column: 1/13;
			text-align: center;

			
		}
		&.site {
			.text {
				p {
					margin-bottom: 20px;
					
				}
			}
		}
		&.credits {
		}
	}
`;

export default Site;
