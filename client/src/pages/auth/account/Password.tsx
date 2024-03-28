import React from 'react';
import styled from 'styled-components';

const Password = () => {
	const [state, setState] = React.useState<boolean>(false);

	const toggleState = () => {
		setState(!state);
	};

	return <StyledComponent $state={state}>senha aqui</StyledComponent>;
};

const StyledComponent = styled.section<{ $state: boolean }>``;

export default Password;
