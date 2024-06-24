import React from 'react';
import styled from 'styled-components';

import PlotSongLogic from '../../PlotSongLogic';

import ButtonForPdfDownload from '../../shared/ButtonForPdfDownload';
const HomePlot = (): React.FunctionComponentElement<JSX.Element> => (
	<StyledComponent>
		<div className='wrapper'>
			<div className='description'>
				<h2>Enredo 2024</h2>
				<h1>As bruxas estão soltas!</h1>
				<p>
					O enredo "As Bruxas Estão Soltas!" celebrou o poder feminino, explorando a manifestação das energias ancestrais através da Deusa Terra e dos quatro elementos da criação.
				</p>
				<p>
					A narrativa abordou a conexão entre passado e presente, destacando as mulheres que, ao longo da história, detinham conhecimentos medicinais e espirituais, mas foram
					perseguidas sob a acusação de bruxaria.
				</p>
				<p>
					O enredo também aborda a resistência dessas mulheres e sua contínua luta contra o machismo e a intolerância, honrando a força do sagrado feminino e a capacidade de voar
					além dos limites impostos, como estrelas brilhantes no céu.
				</p>
				<span>Iae, gostou? Para ter acesso a nossa sinopse completa basta baixar o PDF a baixo:</span>
				<ButtonForPdfDownload content='Baixar Sinopse' filePath='../../assets/PDF/sinopse-2024.pdf' />
			</div>
			<PlotSongLogic />
		</div>
	</StyledComponent>
);
const StyledComponent = styled.section`
	height: auto;

	.wrapper {
		.description {
			grid-column: 2/6;

			h2 {
				font-size: 2rem;
				font-family: 'Advent Pro', sans-serif;
				color: var(--color-primary);
				font-weight: 500;
				line-height: 0.4;
			}

			h1 {
				margin-bottom: 20px;
				font-size: 3.4rem;
				color: var(--color-text);
				font-family: 'Advent Pro', sans-serif;
				font-weight: 500;

			}

			p {
				color: var(--color-text-soft);
				text-align: justify;
				margin-bottom: 10px;
			}

			span {
				margin-top: 30px;
				margin-bottom: 30px;
				display: block;
				color: var(--color-text);
			}

			button {
				display: block;
			}
		}
	}
	@media screen {
		@media (max-width: 1100px) {
			.wrapper {
				margin-bottom: 50px;

				.description {
					grid-column: 2/12;
					margin-bottom: 70px;
				}
			}
		}
	}
`;
export default HomePlot;
