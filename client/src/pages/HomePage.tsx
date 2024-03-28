import React from 'react';
import Layout from '../layouts/PagesLayout';
import styled from 'styled-components';

import HomeCover from '../components/containers/Home/Cover';
import Carousel from '../components/containers/Home/Carousel';
import SchoolNumbers from '../components/containers/Home/SchoolNumbers';
import HomePlot from '../components/containers/Home/Plot';
import AboutSchool from '../components/containers/Home/AboutSchool';
import HomeSponsors from '../components/containers/Home/Sponsors';
import Contact from '../components/containers/Home/Contact';
import HomeNavInfo from '../components/containers/Home/NavInfo';

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
