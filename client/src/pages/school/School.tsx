import React from 'react';
import styled from 'styled-components';

import Layout from '../../layouts/PagesLayout';

const School = () => {
	const [state, setState] = React.useState<boolean>(false);

	const toggleState = () => {
		setState(!state);
	};

	return (
		<Layout title='Nossa Escola'>
			<StyledComponent $state={state}>
				<article className='wrapper'>
					{/* Diretoria */}
					{/* Seguimentos */}
					{/* Historia */}
					{/* Torcida */}
					{/* Pavilhão */}
					{/* Sambas */}
				</article>
			</StyledComponent>
		</Layout>
	);
};

const StyledComponent = styled.section<{ $state: boolean }>``;

export default School;
