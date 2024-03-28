// Importe os ícones corretamente
import { FaCheck } from 'react-icons/fa';
import { CiWarning } from 'react-icons/ci';
import { IoClose } from 'react-icons/io5';
import { useState } from 'react';
import styled from 'styled-components';

type ModalProps = {
	type: 'success' | 'warning' | 'error';
	message: string;
};

const Modal = ({ type, message }: ModalProps): React.FunctionComponentElement<JSX.Element> | false => {
	const [show, setShow] = useState(true);
	const [title] = useState(() => {
		switch (type) {
			case 'success':
				return 'Sucesso';
			case 'warning':
				return 'Aviso';
			case 'error':
				return 'Erro';
			default:
				return '';
		}
	});

	const [icon] = useState(() => {
		switch (type) {
			case 'success':
				return <FaCheck />;
			case 'warning':
				return <CiWarning />;
			case 'error':
				return <IoClose />;
			default:
				return null;
		}
	});

	const [color] = useState(() => {
		switch (type) {
			case 'success':
				return 'green';
			case 'warning':
				return '#FFE401';
			case 'error':
				return 'red';
			default:
				return '';
		}
	});

	return (
		show && (
			<StyledComponent $color={color}>
				<button onClick={() => setShow(false)} className='close'>
					<IoClose></IoClose>
				</button>
				<div className='icon'>{icon && <>{icon}</>}</div>
				<div className='text'>
					<h1>{title}</h1>
					<p>{message}</p>
				</div>
			</StyledComponent>
		)
	);
};

const StyledComponent = styled.article<{ $color: string }>`
	position: fixed;
	top: 100px;
	right: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0px 30px 0px 5px;
	background-color: #ffffffa5;
	/* border-radius: 1rem; */
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	z-index: 100;
	gap: 10px;
	border-left: 5px solid ${props => props.$color};

	.close {
		position: absolute;
		top: 5px;
		right: 5px;
		cursor: pointer;
		* {
			color: #aaaaaa;
			font-size: 1.5rem;
		}
		&:hover {
			* {
				color: #000000;
			}
		}
	}
	.icon {
		font-size: 4rem;
		display: flex;
		align-items: center;
		justify-content: center;
		* {
			color: ${props => props.$color};
		}
	}
	.text {
		h1 {
			font-size: 1.5rem;
			color: ${props => props.$color};
		}
		p {
			font-size: 1rem;
			color: #aaaaaa;
		}
	}
`;

export default Modal;
