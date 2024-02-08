import React from 'react';
import styled from 'styled-components';

import Layout from '../../layouts/PagesLayout';
import AccountOutlet from '../../layouts/AccountOutlet';
const Account = () => {
	const [state, setState] = React.useState<boolean>(false);

	const toggleState = () => {
		setState(!state);
	};

	return (
		<Layout title='Template'>
			<StyledComponent $state={state}>
				<AccountOutlet></AccountOutlet>
			</StyledComponent>
		</Layout>
	);
};

const StyledComponent = styled.section<{ $state: boolean }>``;

export default Account;

