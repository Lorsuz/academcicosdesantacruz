import React from 'react';
import Layout from '@layout/PagesLayout';
import styled from 'styled-components';

import AboutSchool from '@component/containers/Home/AboutSchool';
import Carousel from '@component/containers/Home/Carousel';
import Contact from '@component/containers/Home/Contact';
import HomeCover from '@component/containers/Home/Cover';
import HomeNavInfo from '@component/containers/Home/NavInfo';
import HomePlot from '@component/containers/Home/Plot';
import HomeSponsors from '@component/containers/Home/Sponsors';
import SchoolNumbers from '@component/containers/Home/SchoolNumbers';

const HomePage: React.FunctionComponent = () => (
	<Layout title='Home Page' backgroundColor='#0B1127'>
		<StyledHomePage>
			<HomeCover />
			<HomeNavInfo />
			<Carousel />
			<HomePlot />
			<HomeSponsors />
			<SchoolNumbers />
			<AboutSchool />
			<Contact />
		</StyledHomePage>
	</Layout>
);

const StyledHomePage = styled.main`
	width: 100%;
`;

export default HomePage;
