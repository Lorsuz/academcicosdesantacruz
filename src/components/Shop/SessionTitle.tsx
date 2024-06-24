import React from 'react';
import { FaStore } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa6';

const SessionTitle = ({ title }: { title: string }): React.FunctionComponentElement<JSX.Element> => {
	return (
		<StyledComponent>
			<div className='title'>
				<div className='icon'>
					<FaStore></FaStore>
				</div>
				<span>{title}</span>
			</div>
			<Link to='/'>
				<span>Ver Mais</span>
				<div className='icon'>
					<FaArrowRight></FaArrowRight>
				</div>
			</Link>
		</StyledComponent>
	);
};

const StyledComponent = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 20px;

	.title {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 10px;

		span {
			font-size: 1.5em;
			font-weight: 500;
			text-transform: capitalize;
			font-family: 'Advent Pro', sans-serif;
			color: var(--color-primary);
			font-weight: 500;
			font-size: 2rem;
		}
		.icon * {
			color: var(--color-primary);
			font-size: 2em;
		}
	}

	a {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 10px;

		span {
			color: var(--color-primary);
			font-size: 1.2em;
			font-weight: 500;
			text-transform: capitalize;
		}
		.icon * {
			color: var(--color-primary);
			font-size: 1.5rem;
		}

		&:hover span {
			text-decoration: underline;
		}
	}
`;

export default SessionTitle;
