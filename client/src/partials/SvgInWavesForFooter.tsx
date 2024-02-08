import React from 'react';

import styled from 'styled-components';

type SvgInWavesForFooterProps = {
	backgroundColor?: string;
};
const SvgInWavesForFooter = ({
	backgroundColor = '#ffffff'
}: SvgInWavesForFooterProps): React.FunctionComponentElement<JSX.Element> => (
	<StyledComponent $backgroundColor={backgroundColor}>
		<svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'>
			<path
				d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
				className='shape-fill'
			></path>
		</svg>
	</StyledComponent>
);

const StyledComponent = styled.div<{ $backgroundColor: string }>`
	float: left;
	width: 100%;
	overflow: hidden;
	transform: rotate(180deg);
	display: flex;
	justify-content: center;
	position: relative;
	height: 100px;
	margin: -3px 0;

	svg {
		min-width: 1500px;
		width: 100%;
		position: absolute;
		height: 100%;
		background: ${props => props.$backgroundColor};

		.shape-fill {
			fill: #1c3b35;
		}
	}
`;

export default SvgInWavesForFooter;
