import React from 'react';
import Layout from '@layout/PagesLayout';
import styled from 'styled-components';
import LogoImg from '@image/logo - gresasc.jpg';
// #region lembrar de usar isso depois
const Site = (): React.FunctionComponentElement<JSX.Element> => {
	console.log('');
	
	
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
						<img src={LogoImg} alt='' />
					</div>
				</section>
				<section className='credits'>
					<h1>Créditos</h1>
					<div className='part-grid'>
						<h3>Dados de Desfile</h3>
						<ul>
							<li>
								<a href='https://www.galeriadosamba.com.br' target='_blank'>
									Galeria do Samba
								</a>
							</li>
							<li>
								<a href='https://www.academiadosamba.com.br' target='_blank'>
									Academia do Samba
								</a>
							</li>
							<li>
								<a href='https://www.sambariocarnaval.com' target='_blank'>
									SambaRio
								</a>
							</li>
							<li>
								<a href='https://www.apoteose.com' target='_blank'>
									Apoteose Online
								</a>
							</li>
						</ul>
					</div>
					<div className='part-grid'>
						<h3>História e Sambas-Enredo</h3>
						<ul>
							<li>Dicionário Cravo Albin de Música Popular Brasileira</li>
							<li>NOPH (Núcleo de Orientação e Pesquisa Histórica)</li>
							<li>Centro Cultural de Santa Cruz</li>
							<li>Ala de Compositores</li>
						</ul>
					</div>
					<div className='part-grid'>
						<h3>Mapa de notas da apuração</h3>
						<ul>
							<li>Hemeroteca Digital da Biblioteca Nacional</li>
							<li>Galeria do Samba</li>
							<li>LIERJ</li>
							<li>AESCRJ</li>
						</ul>
					</div>
					<div className='entire-grid'>
						<h3>Fotografias</h3>
						<ul>
							<li>Ao Brasil</li>
							<li>Brasilien Information</li>
							<li>Carnaval-Rio.Org</li>
							<li>Fototeca PCRJ</li>
							<li>Folha Online</li>
							<li>O Globo Online</li>
							<li>Portal G1</li>
							<li>JB Online</li>
							<li>Marcelo O'Reilly (Sambanet)</li>
							<li>Mauro Samagaio (Sambanet)</li>
							<li>Wigder Frota</li>
							<li>Diego Mendes</li>
							<li>Julio Ricardo</li>
							<li>Leandro Milton (SRZD)</li>
							<li>Hyrinéa Bornéo (SRZD)</li>
							<li>O Batuque</li>
							<li>O Dia</li>
							<li>O Dia na Folia</li>
							<li>Rádio Fm O Dia</li>
							<li>Revista Manchete</li>
							<li>Revista Fatos e Fotos</li>
							<li>RioTur</li>
							<li>Sambanet</li>
							<li>Portal UOL</li>
						</ul>
					</div>
				</section>
			</StyledComponent>
		</Layout>
	);
};

const StyledComponent = styled.main`
	section {
		grid-column: 2/12;
		h1 {
			grid-column: 1/13;
			text-align: center;
			font-size: 2rem;
			margin-bottom: 20px;
		}
		&.site {
			.text {
				grid-column: 1/7;

				p {
					margin-bottom: 20px;
				}
			}
		}
		&.credits {
			
			gap: 10px;
			> div {
				h3 {
					text-align: center;
					color: #e90b0b;
				}
			}
			.part-grid {
				grid-column: 12fr;
				
				background: #000;
			}
			.entire-grid {
				grid-column: 1/13;
				ul {
					display: flex;
					gap: 20px;
					flex-wrap: wrap;
				}
			}
		}
	}
`;

export default Site;
