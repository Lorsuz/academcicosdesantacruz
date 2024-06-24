import React from 'react';
import styled from 'styled-components';
import { FaYoutube, FaXTwitter as FaXTwitter, FaInstagram, FaFacebook } from 'react-icons/fa6';

type SocialMediaProps = {
	customStyled?: boolean;
};
const SocialMedia = ({ customStyled }: SocialMediaProps): React.FunctionComponentElement<JSX.Element> => (
	<StyledComponent $footer={customStyled}>
		<li>
			<a target='_blank' href='https://www.instagram.com/academicosdesantacruzrj/'>
				<FaInstagram />
			</a>
		</li>
		<li>
			<a target='_blank' href='https://www.facebook.com/acadsantacruz?mibextid=LQQJ4d'>
				<FaFacebook />
			</a>
		</li>
		<li>
			<a target='_blank' href='https://www.youtube.com/@academicosdesantacruz'>
				<FaYoutube />
			</a>
		</li>
		<li>
			<a target='_blank' href='https://x.com/acadsantacruz?s=11'>
				<FaXTwitter />
			</a>
		</li>
	</StyledComponent>
);

const StyledComponent = styled.ul<{ $footer?: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	transition: all 0.5s ease-in-out;


	li {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 70px;
		height: 70px;
		border-radius: 50%;
		cursor: pointer;
		transition: all 0.5s ease-in-out;
		
		* {
			font-size: 2rem;
			transition: all 0.5s ease-in-out;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		a {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 90%;
			height: 90%;
			border-radius: 50%;
			box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

			* {
				${props => (props.$footer ? 'color: #ffffff;' : 'color: var(--color-primary-soft);')}
			}
		}

		&:hover {
			background: #000000;

			a {
				border: 3px solid #ffffff;
				width: 95%;
				height: 95%;

				* {
					color: #ffffff;
				}
			}

			&:nth-child(1) {
				background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285aeb 90%);
			}
			&:nth-child(2) {
				background: #3b5998;
			}
			&:nth-child(3) {
				background: #cd201f;
			}
			&:nth-child(4) {
				background: #000000;
			}
		}
	}
	@media screen {
		@media (max-width: 600px) {
			gap: 15px;
			li {
				width: 50px;
				height: 50px;

				a {
					* {
						font-size: 1.5rem;
					}
				}
			}
		}
	}
`;

export default SocialMedia;
