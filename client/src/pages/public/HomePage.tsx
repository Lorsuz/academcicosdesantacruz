import React, { useEffect } from 'react';
import Layout from '../../layouts/PagesLayout';
import styled from 'styled-components';

const HomePage: React.FunctionComponent = () => {
	const [users, setUsers] = React.useState<any[]>([]);

	useEffect(() => {
		fetch('http://localhost:3001/api/users')
			.then(response => response.json())
			.then(data => {
				console.log('====================================');
				console.log(data);
				console.log('====================================');

				setUsers(data);
			});
	}, []);

	return (
		<Layout title='Home Page'>
			<StyledHomePage>
				<h1>Home Page</h1>
				<ul>
					{users.map(user => (
						<li key={user.id}>{user.name}</li>
					))}
				</ul>
			</StyledHomePage>
		</Layout>
	);
};

const StyledHomePage = styled.main`
	width: 100%;
`;

export default HomePage;
