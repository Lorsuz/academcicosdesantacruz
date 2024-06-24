import React from 'react';
import styled from 'styled-components';

import Layout from '../../../layouts/PagesLayout';
import { useSelector } from 'react-redux';

const UserDetails = () => {
	const [state, setState] = React.useState<boolean>(false);

	const { userInfo } = useSelector((state: any) => state.userLogin);

	const toggleState = () => {
		setState(!state);
	};

	return (
		<Layout title='Detalhes de usuario'>
			<StyledComponent $state={state}>
				<article className='wrapper'>
					<section>
						<div className='background-image'>
							<img src={userInfo.profileImage} alt='Imagem de Perfil' />
							
						</div>
					</section>
				</article>
			</StyledComponent>
		</Layout>
	);
};

const StyledComponent = styled.section<{ $state: boolean }>``;

export default UserDetails;
