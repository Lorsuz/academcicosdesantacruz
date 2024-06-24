import React from 'react';
import styled from 'styled-components';

import Layout from '@layout/PagesLayout';

const School = () => {
	const [state, setState] = React.useState<boolean>(false);

	const toggleState = () => {
		setState(!state);
	};

	return (
		<Layout title='Nossa Escola'>
			<StyledComponent className='wrapper' $state={state}>
				<div className="banner">
					<h1>Nossa Escola</h1>
				</div>
				<aside>
					<ul>
						<li>
							<button onClick={toggleState}>Diretoria</button>
						</li>
						<li>
							<button onClick={toggleState}>Seguimentos</button>
						</li>
						<li>
							<button onClick={toggleState}>História</button>
						</li>
						<li>
							<button onClick={toggleState}>Torcida</button>
						</li>
						<li>
							<button onClick={toggleState}>Pavilhão</button>
						</li>
						<li>
							<button onClick={toggleState}>Sambas</button>
						</li>
					</ul>
				</aside>
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

const StyledComponent = styled.main<{ $state: boolean }>`

.banner{
	background: url('https://source.unsplash.com/random') no-repeat center center/cover;
	height: 200px;
	grid-column: 2/12;
	background: #ccc;

}
aside{
	grid-column: 2/5;
background: #ccc;
}
article{
	background: #ccc;
	grid-column: 5/12;

	section{
		color:#808080;
	}
}
`;

export default School;
