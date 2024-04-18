import React from 'react';
import styled from 'styled-components';
// import Lottie from 'react-lottie';
// import SpinLoader from '../../animations/spinLoader.json';

/* const BigLoader = (): React.FunctionComponentElement<JSX.Element> => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: SpinLoader,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice'
		}
	};

	return (
		<StyledComponent>
			<Lottie options={defaultOptions} height={50} width={50} />
		</StyledComponent>
	);
};
 */
const BigLoader = (): React.FunctionComponentElement<JSX.Element> => {
	return (
		<StyledComponent>
			<div className='loader'></div>
		</StyledComponent>
	);
};

const StyledComponent = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 80vh;
	width: 100%;

	.loader {
		border: 10px solid #f3f3f3;
		border-top: 10px solid var(--color-primary);
		border-radius: 50%;
		width: 70px;
		height: 70px;
		animation: spin 2s linear infinite;
	}
	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;

export default BigLoader;
