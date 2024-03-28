import React from 'react';
import styled from 'styled-components';

const Details = () => {
	const [state, setState] = React.useState<boolean>(false);

	const toggleState = () => {
		setState(!state);
	};

	return <StyledComponent $state={state}>{/* <AccountOutlet></AccountOutlet> */}</StyledComponent>;
};

const StyledComponent = styled.section<{ $state: boolean }>``;

export default Details;
