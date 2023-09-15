import Head from 'next/head';
import React from 'react';
import Container from '../../components/layout/Container';
import Layout from '../../components/layout/Layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'About',
};

const About = () => {
	return (
		<Layout>
			<Container>
				<h1 className="text-2xl font-bold wow fadeInUp">about me</h1>
				<div
					className="pt-6 text-lightgray mb-20 wow fadeInUp"
					data-wow-delay="0.2s">
					<div className="prose prose-invert max-w-none m-auto text-gray">
						I'm Nicolas Guarini and I'm a 21y/o aspiring software engineer
						currently based in Italy, bachelor's degree student in Computer
						Science at University of Insubria.
						<br />
						<br />
						I'm also a private teacher of programming and data analysis for
						university students, and a freelance developer of web solutions for
						small and medium-sized companies and freelancers. I have developed
						several projects in the mobile field, fullstack webapps, desktop,
						data analysis, and lately I'm getting very passionate about security
						analysis and reverse engineering. Currently, i'm studying the
						Flutter framework and backend development with express.js.
						<br />
						<br />
						During 2023, I will be a university tutor of computer programming
						and architecture for first year students.
						<br />
						<br />
						In my free time, I love creating and playing music, and I'm
						extremely passionate to chess and strategy games in general. I've
						also won a few rubik's cube speedsolving competitions, averaging
						about 16 seconds of resolution time.
					</div>
				</div>
			</Container>
		</Layout>
	);
};

export default About;
