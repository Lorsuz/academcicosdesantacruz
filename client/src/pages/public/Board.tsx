import React from 'react';
import Layout from '../../layouts/PagesLayout';
import styled from 'styled-components';

const Board = (): React.FunctionComponentElement<JSX.Element> => {
	const a: number = 0;
	a ? a : a;
	return (
		<Layout title='Diretoria'>
			<StyledComponent>
				
			</StyledComponent>
		</Layout>
	);
};

// const CardForBoard = () => {};

const StyledComponent = styled.main`
	background: #000;
`;

export default Board;
