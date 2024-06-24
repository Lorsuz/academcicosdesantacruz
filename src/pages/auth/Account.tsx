import React from 'react';
import styled from 'styled-components';

import Layout from '@layout/PagesLayout';
import AccountOutlet from '@layout/AccountOutlet';
const Account = () => {
	return (
		<Layout title='Template'>
			<StyledComponent >
				<AccountOutlet></AccountOutlet>
			</StyledComponent>
		</Layout>
	);
};

const StyledComponent = styled.section``;

export default Account;

