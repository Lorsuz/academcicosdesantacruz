import React from 'react';
import styled from 'styled-components';

const Address = () => {
	const [state, setState] = React.useState<boolean>(false);

	const toggleState = () => {
		setState(!state);
	};

	return <StyledComponent $state={state}>endereço</StyledComponent>;
};

const StyledComponent = styled.section<{ $state: boolean }>``;

export default Address;
