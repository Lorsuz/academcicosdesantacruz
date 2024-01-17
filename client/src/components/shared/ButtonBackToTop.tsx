import React from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import styled, { StyleSheetManager } from 'styled-components';

const ButtonBackToTop = (): React.FunctionComponentElement<JSX.Element> => {
	const [showButton, setShowButton] = React.useState<boolean>(false);

	React.useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 300) {
				setShowButton(true);
			} else {
				setShowButton(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const handleClick = () => {
		const scrollToTop = () => {
			const currentPosition = window.scrollY;

			if (currentPosition > 0) {
				window.requestAnimationFrame(scrollToTop);
				if (currentPosition - currentPosition / 8 < 700) {
					window.scrollTo(0, currentPosition - currentPosition / 4);
				} else {
					window.scrollTo(0, currentPosition - currentPosition / 8);
				}
			}
		};

		scrollToTop();
	};

	return (
		<StyleSheetManager shouldForwardProp={prop => prop !== 'showButton'}>
			<StyledComponent onClick={handleClick} showButton={showButton}>
				<IoIosArrowUp />
			</StyledComponent>
		</StyleSheetManager>
	);
};

const StyledComponent = styled.div<{ showButton: boolean }>`
	position: fixed;
	border-radius: 50%;
	bottom: 25px;
	right: 25px;
	cursor: ${props => (props.showButton ? 'pointer' : 'default')};
	display: flex;
	align-items: center;
	justify-content: center;
	height: 50px;
	width: 50px;
	z-index: 3;
	background: var(--color-white);
	box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
	opacity: ${props => (props.showButton ? 1 : 0)};
	transition: opacity 0.3s ease-in-out;

	* {
		font-size: 1.5rem;
		font-weight: bold;
		color: var(--color-primary);
	}

	&:hover {
		* {
			animation: BackToTopAnimationIcon 500ms ease-out infinite alternate;
		}
	}

	@keyframes BackToTopAnimationIcon {
		to {
			transform: translateY(-3px);
		}
	}
`;

export default ButtonBackToTop;
